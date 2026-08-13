import { json, type RequestHandler } from '@sveltejs/kit';

export interface LeaderboardEntry {
	id: string;
	name: string;
	score: number;
	max_streak: number;
	accuracy: number;
	created_at?: string;
}

// In-memory fallback for local dev when D1 isn't bound
let localFallbackLeaderboard: LeaderboardEntry[] = [
	{ id: '1', name: 'PhilNITS_God', score: 1250, max_streak: 18, accuracy: 98, created_at: new Date().toISOString() },
	{ id: '2', name: 'ByteMaster', score: 980, max_streak: 12, accuracy: 92, created_at: new Date().toISOString() },
	{ id: '3', name: 'CyberSamurai', score: 820, max_streak: 9, accuracy: 88, created_at: new Date().toISOString() },
	{ id: '4', name: 'HexRider', score: 650, max_streak: 7, accuracy: 84, created_at: new Date().toISOString() },
	{ id: '5', name: 'AgileNinja', score: 510, max_streak: 5, accuracy: 80, created_at: new Date().toISOString() }
];

export const GET: RequestHandler = async ({ platform }) => {
	try {
		const db = platform?.env?.DB;
		if (db) {
			const { results } = await db
				.prepare('SELECT id, name, score, max_streak, accuracy, created_at FROM leaderboard ORDER BY score DESC LIMIT 50')
				.all<LeaderboardEntry>();
			return json({ success: true, leaderboard: results || [] });
		}
	} catch (err) {
		console.warn('D1 fetch warning, using fallback store:', err);
	}

	// Return fallback array sorted by score
	const sorted = [...localFallbackLeaderboard].sort((a, b) => b.score - a.score);
	return json({ success: true, leaderboard: sorted, isFallback: true });
};

export const POST: RequestHandler = async ({ request, platform }) => {
	try {
		const body = await request.json() as Partial<LeaderboardEntry>;
		const { name, score, max_streak, accuracy } = body;

		if (!name || score === undefined || max_streak === undefined) {
			return json({ success: false, error: 'Missing required fields' }, { status: 400 });
		}

		const entry: LeaderboardEntry = {
			id: crypto.randomUUID(),
			name: name.slice(0, 20).trim(),
			score: Math.max(0, Math.floor(score)),
			max_streak: Math.max(0, Math.floor(max_streak)),
			accuracy: Math.min(100, Math.max(0, Math.round((accuracy || 0) * 10) / 10)),
			created_at: new Date().toISOString()
		};

		const db = platform?.env?.DB;
		if (db) {
			await db
				.prepare(
					'INSERT INTO leaderboard (id, name, score, max_streak, accuracy, created_at) VALUES (?, ?, ?, ?, ?, ?)'
				)
				.bind(entry.id, entry.name, entry.score, entry.max_streak, entry.accuracy, entry.created_at)
				.run();
		} else {
			localFallbackLeaderboard.push(entry);
			localFallbackLeaderboard.sort((a, b) => b.score - a.score);
			localFallbackLeaderboard = localFallbackLeaderboard.slice(0, 100);
		}

		return json({ success: true, entry });
	} catch (err) {
		console.error('Error submitting score:', err);
		return json({ success: false, error: 'Failed to record score' }, { status: 500 });
	}
};
