export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.CcjtY-Tw.js",app:"_app/immutable/entry/app.DJj-aDAw.js",imports:["_app/immutable/entry/start.CcjtY-Tw.js","_app/immutable/chunks/r0nuG_QQ.js","_app/immutable/chunks/C3aPmK8y.js","_app/immutable/entry/app.DJj-aDAw.js","_app/immutable/chunks/C3aPmK8y.js","_app/immutable/chunks/xihTtKlq.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
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
				endpoint: __memo(() => import('./entries/endpoints/api/leaderboard/_server.ts.js'))
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
