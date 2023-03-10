import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.d62fe2fd.js","imports":["_app/immutable/entry/start.d62fe2fd.js","_app/immutable/chunks/index.1757783d.js","_app/immutable/chunks/singletons.cac5b93b.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.c9770841.js","imports":["_app/immutable/entry/app.c9770841.js","_app/immutable/chunks/index.1757783d.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
