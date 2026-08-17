import { json, type RequestHandler } from '@sveltejs/kit';

export interface LeaderboardEntry {
	id: string;
	name: string;
	score: number;
	max_streak: number;
	accuracy: number;
	created_at?: string;
}

// In-memory fallback for local dev when D1 isn't bound (persisted on globalThis to survive Vite HMR)
const INITIAL_FALLBACK_LEADERBOARD: LeaderboardEntry[] = [
	{ id: '1', name: 'PhilNITS_God', score: 1250, max_streak: 18, accuracy: 98, created_at: new Date().toISOString() },
	{ id: '2', name: 'ByteMaster', score: 980, max_streak: 12, accuracy: 92, created_at: new Date().toISOString() },
	{ id: '3', name: 'CyberSamurai', score: 820, max_streak: 9, accuracy: 88, created_at: new Date().toISOString() },
	{ id: '4', name: 'HexRider', score: 650, max_streak: 7, accuracy: 84, created_at: new Date().toISOString() },
	{ id: '5', name: 'AgileNinja', score: 510, max_streak: 5, accuracy: 80, created_at: new Date().toISOString() }
];

declare global {
	var __dev_leaderboard: LeaderboardEntry[] | undefined;
}

function getFallbackStore(): LeaderboardEntry[] {
	if (!globalThis.__dev_leaderboard) {
		globalThis.__dev_leaderboard = [...INITIAL_FALLBACK_LEADERBOARD];
	} else {
		// Merge any missing placeholder entries into the existing store
		for (const placeholder of INITIAL_FALLBACK_LEADERBOARD) {
			if (!globalThis.__dev_leaderboard.some((e) => e.id === placeholder.id || e.name === placeholder.name)) {
				globalThis.__dev_leaderboard.push(placeholder);
			}
		}
		globalThis.__dev_leaderboard.sort((a, b) => b.score - a.score);
	}
	return globalThis.__dev_leaderboard;
}

// Auto-create D1 table if not initialized
async function ensureLeaderboardTable(db: D1Database): Promise<void> {
	try {
		await db
			.prepare(
				'CREATE TABLE IF NOT EXISTS leaderboard (id TEXT PRIMARY KEY, name TEXT NOT NULL, score INTEGER NOT NULL, max_streak INTEGER NOT NULL, accuracy REAL NOT NULL, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)'
			)
			.run();
		await db
			.prepare('CREATE INDEX IF NOT EXISTS idx_leaderboard_score ON leaderboard (score DESC)')
			.run();

		// Merge placeholder entries safely without overwriting or duplicating
		for (const p of INITIAL_FALLBACK_LEADERBOARD) {
			await db
				.prepare(
					'INSERT OR IGNORE INTO leaderboard (id, name, score, max_streak, accuracy, created_at) VALUES (?, ?, ?, ?, ?, ?)'
				)
				.bind(p.id, p.name, p.score, p.max_streak, p.accuracy, p.created_at || new Date().toISOString())
				.run();
		}
	} catch (e) {
		console.warn('Could not auto-create D1 schema:', e);
	}
}

// Helper to compute next guest user_N in Cloudflare D1
async function getNextGuestUsername(db: D1Database): Promise<string> {
	try {
		await ensureLeaderboardTable(db);
		const result = await db
			.prepare("SELECT MAX(CAST(SUBSTR(name, 6) AS INTEGER)) as max_idx FROM leaderboard WHERE name LIKE 'user_%'")
			.first<{ max_idx: number | null }>();
		const maxIndex = result?.max_idx ?? 0;
		return `user_${maxIndex + 1}`;
	} catch (e) {
		return getNextFallbackGuestUsername();
	}
}

// Helper to compute next guest user_N in local in-memory fallback
function getNextFallbackGuestUsername(): string {
	const store = getFallbackStore();
	let maxIndex = 0;
	for (const row of store) {
		const match = row.name?.match(/^user_(\d+)$/);
		if (match) {
			const num = parseInt(match[1], 10);
			if (!isNaN(num) && num > maxIndex) {
				maxIndex = num;
			}
		}
	}
	return `user_${maxIndex + 1}`;
}

export const GET: RequestHandler = async ({ platform }) => {
	const headers = {
		'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
		'Pragma': 'no-cache',
		'Expires': '0'
	};

	try {
		const db = platform?.env?.DB;
		if (db) {
			await ensureLeaderboardTable(db);
			const { results } = await db
				.prepare('SELECT id, name, score, max_streak, accuracy, created_at FROM leaderboard ORDER BY score DESC LIMIT 20')
				.all<LeaderboardEntry>();
			return json({ success: true, leaderboard: results || [] }, { headers });
		}
	} catch (err) {
		console.warn('D1 fetch warning, using fallback store:', err);
	}

	// Return fallback array sorted by score (top 20)
	const store = getFallbackStore();
	const sorted = [...store].sort((a, b) => b.score - a.score).slice(0, 20);
	return json({ success: true, leaderboard: sorted, isFallback: true }, { headers });
};

export const POST: RequestHandler = async ({ request, platform }) => {
	try {
		const body = (await request.json()) as Partial<LeaderboardEntry>;
		const { score, max_streak, accuracy } = body;
		let name = typeof body.name === 'string' ? body.name.trim() : '';

		if (score === undefined || max_streak === undefined) {
			return json({ success: false, error: 'Missing required fields' }, { status: 400 });
		}

		const db = platform?.env?.DB;

		if (!name) {
			if (db) {
				name = await getNextGuestUsername(db);
			} else {
				name = getNextFallbackGuestUsername();
			}
		}

		const safeScore = typeof score === 'number' && isFinite(score) ? score : 0;
		const safeStreak = typeof max_streak === 'number' && isFinite(max_streak) ? max_streak : 0;
		const safeAccuracy = typeof accuracy === 'number' && isFinite(accuracy) ? accuracy : 0;

		const entry: LeaderboardEntry = {
			id: crypto.randomUUID(),
			name: name.slice(0, 20),
			score: Math.max(0, Math.floor(safeScore)),
			max_streak: Math.max(0, Math.floor(safeStreak)),
			accuracy: Math.min(100, Math.max(0, Math.round(safeAccuracy * 10) / 10)),
			created_at: new Date().toISOString()
		};

		if (db) {
			try {
				await ensureLeaderboardTable(db);
				await db
					.prepare(
						'INSERT INTO leaderboard (id, name, score, max_streak, accuracy, created_at) VALUES (?, ?, ?, ?, ?, ?)'
					)
					.bind(entry.id, entry.name, entry.score, entry.max_streak, entry.accuracy, entry.created_at)
					.run();
			} catch (d1Err) {
				console.warn('D1 insert warning, syncing to fallback store:', d1Err);
				const store = getFallbackStore();
				store.push(entry);
				store.sort((a, b) => b.score - a.score);
				globalThis.__dev_leaderboard = store.slice(0, 20);
			}
		} else {
			const store = getFallbackStore();
			store.push(entry);
			store.sort((a, b) => b.score - a.score);
			globalThis.__dev_leaderboard = store.slice(0, 20);
		}

		return json({ success: true, entry });
	} catch (err: any) {
		console.error('Error submitting score:', err);
		return json({ success: false, error: err?.message || String(err) }, { status: 500 });
	}
};
