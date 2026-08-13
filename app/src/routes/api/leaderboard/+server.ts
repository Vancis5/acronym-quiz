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
const INITIAL_FALLBACK_LEADERBOARD: LeaderboardEntry[] = [];

declare global {
	var __dev_leaderboard: LeaderboardEntry[] | undefined;
}

function getFallbackStore(): LeaderboardEntry[] {
	if (!globalThis.__dev_leaderboard) {
		globalThis.__dev_leaderboard = [...INITIAL_FALLBACK_LEADERBOARD];
	}
	return globalThis.__dev_leaderboard;
}

// Auto-create D1 table if not initialized
async function ensureLeaderboardTable(db: D1Database): Promise<void> {
	try {
		await db.exec(`
			CREATE TABLE IF NOT EXISTS leaderboard (
				id TEXT PRIMARY KEY,
				name TEXT NOT NULL,
				score INTEGER NOT NULL,
				max_streak INTEGER NOT NULL,
				accuracy REAL NOT NULL,
				created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
			);
			CREATE INDEX IF NOT EXISTS idx_leaderboard_score ON leaderboard (score DESC);
		`);
	} catch (e) {
		console.warn('Could not auto-create D1 schema:', e);
	}
}

// Helper to compute next guest user_N in Cloudflare D1
async function getNextGuestUsername(db: D1Database): Promise<string> {
	try {
		await ensureLeaderboardTable(db);
		const { results } = await db
			.prepare("SELECT name FROM leaderboard WHERE name LIKE 'user_%'")
			.all<{ name: string }>();

		let maxIndex = 0;
		if (results) {
			for (const row of results) {
				const match = row.name?.match(/^user_(\d+)$/);
				if (match) {
					const num = parseInt(match[1], 10);
					if (!isNaN(num) && num > maxIndex) {
						maxIndex = num;
					}
				}
			}
		}
		return `user_${maxIndex + 1}`;
	} catch (e) {
		return 'user_1';
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

		const entry: LeaderboardEntry = {
			id: crypto.randomUUID(),
			name: name.slice(0, 20),
			score: Math.max(0, Math.floor(score)),
			max_streak: Math.max(0, Math.floor(max_streak)),
			accuracy: Math.min(100, Math.max(0, Math.round((accuracy || 0) * 10) / 10)),
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
