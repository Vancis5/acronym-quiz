import { json } from "@sveltejs/kit";
//#region src/routes/api/leaderboard/+server.ts
var INITIAL_FALLBACK_LEADERBOARD = [
	{
		id: "1",
		name: "PhilNITS_God",
		score: 1250,
		max_streak: 18,
		accuracy: 98,
		created_at: (/* @__PURE__ */ new Date()).toISOString()
	},
	{
		id: "2",
		name: "ByteMaster",
		score: 980,
		max_streak: 12,
		accuracy: 92,
		created_at: (/* @__PURE__ */ new Date()).toISOString()
	},
	{
		id: "3",
		name: "CyberSamurai",
		score: 820,
		max_streak: 9,
		accuracy: 88,
		created_at: (/* @__PURE__ */ new Date()).toISOString()
	},
	{
		id: "4",
		name: "HexRider",
		score: 650,
		max_streak: 7,
		accuracy: 84,
		created_at: (/* @__PURE__ */ new Date()).toISOString()
	},
	{
		id: "5",
		name: "AgileNinja",
		score: 510,
		max_streak: 5,
		accuracy: 80,
		created_at: (/* @__PURE__ */ new Date()).toISOString()
	}
];
function getFallbackStore() {
	if (!globalThis.__dev_leaderboard) globalThis.__dev_leaderboard = [...INITIAL_FALLBACK_LEADERBOARD];
	else {
		for (const placeholder of INITIAL_FALLBACK_LEADERBOARD) if (!globalThis.__dev_leaderboard.some((e) => e.id === placeholder.id || e.name === placeholder.name)) globalThis.__dev_leaderboard.push(placeholder);
		globalThis.__dev_leaderboard.sort((a, b) => b.score - a.score);
	}
	return globalThis.__dev_leaderboard;
}
async function ensureLeaderboardTable(db) {
	try {
		await db.prepare("CREATE TABLE IF NOT EXISTS leaderboard (id TEXT PRIMARY KEY, name TEXT NOT NULL, score INTEGER NOT NULL, max_streak INTEGER NOT NULL, accuracy REAL NOT NULL, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)").run();
		await db.prepare("CREATE INDEX IF NOT EXISTS idx_leaderboard_score ON leaderboard (score DESC)").run();
		for (const p of INITIAL_FALLBACK_LEADERBOARD) await db.prepare("INSERT OR IGNORE INTO leaderboard (id, name, score, max_streak, accuracy, created_at) VALUES (?, ?, ?, ?, ?, ?)").bind(p.id, p.name, p.score, p.max_streak, p.accuracy, p.created_at || (/* @__PURE__ */ new Date()).toISOString()).run();
	} catch (e) {
		console.warn("Could not auto-create D1 schema:", e);
	}
}
async function getNextGuestUsername(db) {
	try {
		await ensureLeaderboardTable(db);
		const { results } = await db.prepare("SELECT name FROM leaderboard WHERE name LIKE 'user_%'").all();
		let maxIndex = 0;
		let foundAny = false;
		if (results && results.length > 0) for (const row of results) {
			const match = row.name?.match(/^user_(\d+)$/);
			if (match) {
				foundAny = true;
				const num = parseInt(match[1], 10);
				if (!isNaN(num) && num > maxIndex) maxIndex = num;
			}
		}
		if (foundAny) return `user_${maxIndex + 1}`;
		return getNextFallbackGuestUsername();
	} catch (e) {
		return getNextFallbackGuestUsername();
	}
}
function getNextFallbackGuestUsername() {
	const store = getFallbackStore();
	let maxIndex = 0;
	for (const row of store) {
		const match = row.name?.match(/^user_(\d+)$/);
		if (match) {
			const num = parseInt(match[1], 10);
			if (!isNaN(num) && num > maxIndex) maxIndex = num;
		}
	}
	return `user_${maxIndex + 1}`;
}
var GET = async ({ platform }) => {
	const headers = {
		"Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
		"Pragma": "no-cache",
		"Expires": "0"
	};
	try {
		const db = platform?.env?.DB;
		if (db) {
			await ensureLeaderboardTable(db);
			const { results } = await db.prepare("SELECT id, name, score, max_streak, accuracy, created_at FROM leaderboard ORDER BY score DESC LIMIT 20").all();
			return json({
				success: true,
				leaderboard: results || []
			}, { headers });
		}
	} catch (err) {
		console.warn("D1 fetch warning, using fallback store:", err);
	}
	const sorted = [...getFallbackStore()].sort((a, b) => b.score - a.score).slice(0, 20);
	return json({
		success: true,
		leaderboard: sorted,
		isFallback: true
	}, { headers });
};
var POST = async ({ request, platform }) => {
	try {
		const body = await request.json();
		const { score, max_streak, accuracy } = body;
		let name = typeof body.name === "string" ? body.name.trim() : "";
		if (score === void 0 || max_streak === void 0) return json({
			success: false,
			error: "Missing required fields"
		}, { status: 400 });
		const db = platform?.env?.DB;
		if (!name) {
			if (db) name = await getNextGuestUsername(db);
			else name = getNextFallbackGuestUsername();
		}
		const entry = {
			id: crypto.randomUUID(),
			name: name.slice(0, 20),
			score: Math.max(0, Math.floor(score)),
			max_streak: Math.max(0, Math.floor(max_streak)),
			accuracy: Math.min(100, Math.max(0, Math.round((accuracy || 0) * 10) / 10)),
			created_at: (/* @__PURE__ */ new Date()).toISOString()
		};
		if (db) try {
			await ensureLeaderboardTable(db);
			await db.prepare("INSERT INTO leaderboard (id, name, score, max_streak, accuracy, created_at) VALUES (?, ?, ?, ?, ?, ?)").bind(entry.id, entry.name, entry.score, entry.max_streak, entry.accuracy, entry.created_at).run();
		} catch (d1Err) {
			console.warn("D1 insert warning, syncing to fallback store:", d1Err);
			const store = getFallbackStore();
			store.push(entry);
			store.sort((a, b) => b.score - a.score);
			globalThis.__dev_leaderboard = store.slice(0, 20);
		}
		else {
			const store = getFallbackStore();
			store.push(entry);
			store.sort((a, b) => b.score - a.score);
			globalThis.__dev_leaderboard = store.slice(0, 20);
		}
		return json({
			success: true,
			entry
		});
	} catch (err) {
		console.error("Error submitting score:", err);
		return json({
			success: false,
			error: err?.message || String(err)
		}, { status: 500 });
	}
};
//#endregion
export { GET, POST };
