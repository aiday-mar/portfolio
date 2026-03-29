export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.Bl916_ah.js",app:"_app/immutable/entry/app.C5S8Xd6B.js",imports:["_app/immutable/entry/start.Bl916_ah.js","_app/immutable/chunks/gmXXhmnV.js","_app/immutable/chunks/CD7UPLB0.js","_app/immutable/chunks/BUApaBEI.js","_app/immutable/chunks/BIhvldGz.js","_app/immutable/entry/app.C5S8Xd6B.js","_app/immutable/chunks/CD7UPLB0.js","_app/immutable/chunks/DWJ6x4zX.js","_app/immutable/chunks/BIhvldGz.js","_app/immutable/chunks/BW7tTXek.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
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
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/projects/[slug]",
				pattern: /^\/projects\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
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
