export type GradeStatus = 'correct' | 'close' | 'almost' | 'wrong' | 'skipped';

export interface EvaluationResult {
	status: GradeStatus;
	label: string;
	similarity: number;
	earnedRatio: number;
}

function levenshtein(a: string, b: string): number {
	const matrix: number[][] = [];
	for (let i = 0; i <= b.length; i++) matrix[i] = [i];
	for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

	for (let i = 1; i <= b.length; i++) {
		for (let j = 1; j <= a.length; j++) {
			if (b.charAt(i - 1) === a.charAt(j - 1)) {
				matrix[i][j] = matrix[i - 1][j - 1];
			} else {
				matrix[i][j] = Math.min(
					matrix[i - 1][j - 1] + 1, // substitution
					matrix[i][j - 1] + 1,     // insertion
					matrix[i - 1][j] + 1      // deletion
				);
			}
		}
	}
	return matrix[b.length][a.length];
}

const FILLER_WORDS = new Set(['and', 'or', 'of', 'the', 'for', 'in', 'to', 'a', 'an', '&']);

function normalizeStrict(str: string): string {
	return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function tokenize(str: string): string[] {
	return str
		.toLowerCase()
		.replace(/[^a-z0-9\s]/g, ' ')
		.split(/\s+/)
		.filter((w) => w.length > 0);
}

function tokenizeNoFiller(str: string): string[] {
	const tokens = tokenize(str).filter((w) => !FILLER_WORDS.has(w));
	return tokens.length > 0 ? tokens : tokenize(str);
}

function evaluateSingleTarget(input: string, target: string): { similarity: number; status: GradeStatus } {
	const normInputStrict = normalizeStrict(input);
	const normTargetStrict = normalizeStrict(target);

	if (!normInputStrict) {
		return { similarity: 0, status: 'wrong' };
	}

	// 1. Exact match (case/punctuation insensitive)
	if (normInputStrict === normTargetStrict) {
		return { similarity: 1, status: 'correct' };
	}

	const inputTokensNoFiller = tokenizeNoFiller(input);
	const targetTokensNoFiller = tokenizeNoFiller(target);

	// 2. Exact match ignoring filler words (e.g. "and", "of")
	if (
		inputTokensNoFiller.length > 0 &&
		inputTokensNoFiller.join('') === targetTokensNoFiller.join('')
	) {
		return { similarity: 1, status: 'correct' };
	}

	// Character-level Levenshtein similarity
	const editDist = levenshtein(normInputStrict, normTargetStrict);
	const maxLen = Math.max(normInputStrict.length, normTargetStrict.length);
	const charSimilarity = maxLen > 0 ? Math.max(0, 1 - editDist / maxLen) : 0;

	// Single typo on moderately long string -> close
	if (editDist === 1 && maxLen >= 6) {
		return { similarity: Math.max(charSimilarity, 0.85), status: 'close' };
	}
	if (editDist === 2 && maxLen >= 12) {
		return { similarity: Math.max(charSimilarity, 0.8), status: 'close' };
	}

	// Word-level matching (using filtered key tokens)
	let matchedScoreSum = 0;
	for (const tWord of targetTokensNoFiller) {
		let bestWordScore = 0;
		for (const iWord of inputTokensNoFiller) {
			if (tWord === iWord) {
				bestWordScore = Math.max(bestWordScore, 1.0);
			} else {
				const wDist = levenshtein(tWord, iWord);
				const wMax = Math.max(tWord.length, iWord.length);
				if (wMax <= 3) {
					if (wDist === 0) bestWordScore = Math.max(bestWordScore, 1.0);
				} else if (wMax <= 6) {
					if (wDist <= 1) bestWordScore = Math.max(bestWordScore, 0.85);
					else if (wDist === 2) bestWordScore = Math.max(bestWordScore, 0.5);
				} else {
					if (wDist <= 1) bestWordScore = Math.max(bestWordScore, 0.9);
					else if (wDist === 2) bestWordScore = Math.max(bestWordScore, 0.75);
					else if (wDist === 3) bestWordScore = Math.max(bestWordScore, 0.5);
				}
				// Prefix match for long words (e.g. "config" for "configuration")
				if (tWord.length >= 6 && iWord.length >= 4) {
					if (tWord.startsWith(iWord) || iWord.startsWith(tWord)) {
						bestWordScore = Math.max(bestWordScore, 0.8);
					}
				}
			}
		}
		matchedScoreSum += bestWordScore;
	}

	const wordRecall = targetTokensNoFiller.length > 0 ? matchedScoreSum / targetTokensNoFiller.length : 0;
	const wordPrecision = inputTokensNoFiller.length > 0 ? matchedScoreSum / inputTokensNoFiller.length : 0;

	// Overall similarity
	const overallSim = Math.max(
		charSimilarity,
		wordRecall * 0.85 + wordPrecision * 0.15
	);

	// Classification:
	// 1. Close: barely got it wrong (very high char similarity / typo or missed 1 minor word out of >=3)
	if (overallSim >= 0.78 || (wordRecall >= 0.75 && wordPrecision >= 0.7)) {
		return { similarity: overallSim, status: 'close' };
	}

	// 2. Almost: got it right halfway (around 50%+ meaning captured)
	if (wordRecall >= 0.45 || (charSimilarity >= 0.50 && wordRecall >= 0.33)) {
		return { similarity: overallSim, status: 'almost' };
	}

	return { similarity: overallSim, status: 'wrong' };
}

export function getCoreMeaning(fullMeaning: string): string {
	return fullMeaning.replace(/\s*\([^)]*\)/g, '').trim();
}

export function getCandidateMeanings(fullMeaning: string): string[] {
	const candidates = new Set<string>();

	const clean = fullMeaning.trim();
	const withoutParens = getCoreMeaning(clean);

	if (withoutParens) {
		candidates.add(withoutParens);
	}
	if (clean) {
		candidates.add(clean);
	}

	// Expand whole-phrase slashes / semicolons (e.g. "Application Service Provider / Active Server Pages")
	const slashPhrases = withoutParens.split(/\s+[/;]\s+/);
	if (slashPhrases.length > 1) {
		for (const p of slashPhrases) {
			const trimmed = p.trim();
			if (trimmed) candidates.add(trimmed);
		}
	}

	// Expand in-word slashes (e.g. "Independent/Inexpensive" or "Reader/Recognition")
	if (withoutParens.includes('/')) {
		const optionA = withoutParens.replace(/(\w+)\/(\w+)/g, '$1').trim();
		const optionB = withoutParens.replace(/(\w+)\/(\w+)/g, '$2').trim();
		if (optionA) candidates.add(optionA);
		if (optionB) candidates.add(optionB);
	}

	return Array.from(candidates);
}

export function evaluateAnswer(input: string, fullMeaning: string): EvaluationResult {
	const trimmedInput = input.trim();
	if (!trimmedInput) {
		return { status: 'wrong', label: 'WRONG', similarity: 0, earnedRatio: 0 };
	}

	const candidates = getCandidateMeanings(fullMeaning);

	let bestResult: { similarity: number; status: GradeStatus } = { similarity: -1, status: 'wrong' };

	const statusPriority: Record<GradeStatus, number> = {
		correct: 4,
		close: 3,
		almost: 2,
		wrong: 1,
		skipped: 0
	};

	for (const candidate of candidates) {
		const res = evaluateSingleTarget(trimmedInput, candidate);
		if (
			statusPriority[res.status] > statusPriority[bestResult.status] ||
			(statusPriority[res.status] === statusPriority[bestResult.status] && res.similarity > bestResult.similarity)
		) {
			bestResult = res;
		}
	}

	const labelMap: Record<GradeStatus, string> = {
		correct: 'CORRECT',
		close: 'CLOSE!',
		almost: 'ALMOST',
		wrong: 'WRONG',
		skipped: 'SKIPPED'
	};

	const ratioMap: Record<GradeStatus, number> = {
		correct: 1.0,
		close: 0.6,
		almost: 0.3,
		wrong: 0.0,
		skipped: 0.0
	};

	return {
		status: bestResult.status,
		label: labelMap[bestResult.status],
		similarity: Math.round(bestResult.similarity * 100) / 100,
		earnedRatio: ratioMap[bestResult.status]
	};
}
