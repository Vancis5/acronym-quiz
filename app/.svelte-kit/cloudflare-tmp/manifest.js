export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["p5.min.js","robots.txt","three.r134.min.js","vanta.cells.min.js","vanta.topology.min.js"]),
	mimeTypes: {".js":"text/javascript",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.C92TwPRa.js",app:"_app/immutable/entry/app.DJpEuplh.js",imports:["_app/immutable/entry/start.C92TwPRa.js","_app/immutable/chunks/UO8ayoEp.js","_app/immutable/chunks/DJ624bz3.js","_app/immutable/entry/app.DJpEuplh.js","_app/immutable/chunks/DJ624bz3.js","_app/immutable/chunks/xihTtKlq.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/leaderboard",
				pattern: /^\/api\/leaderboard\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/leaderboard/_server.ts.js'))
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

export const prerendered = new Set([]);

export const base_path = "";
