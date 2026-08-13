
import root from '../root.js';
import { set_building, set_prerendering } from '$app/env/internal';
import { set_assets } from '$app/paths/internal/server';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';
import error from '../shared/error-template.js';

export const options = {
	app_template_contains_nonce: false,
	async: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	csrf_trusted_origins: [],
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hash_routing: false,
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	service_worker_options: undefined,
	server_error_boundaries: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, interactive-widget=resizes-content, viewport-fit=cover\" />\n\t\t<meta name=\"text-scale\" content=\"scale\" />\n\t\t<script>\n\t\t\t(function() {\n\t\t\t\ttry {\n\t\t\t\t\tvar saved = localStorage.getItem('philnits_theme');\n\t\t\t\t\tvar prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;\n\t\t\t\t\tif (saved === 'light' || (!saved && prefersLight)) {\n\t\t\t\t\t\tdocument.documentElement.classList.add('light');\n\t\t\t\t\t} else {\n\t\t\t\t\t\tdocument.documentElement.classList.remove('light');\n\t\t\t\t\t}\n\t\t\t\t} catch (e) {}\n\t\t\t})();\n\t\t</script>\n\t\t<script>\n\t\t\tdocument.addEventListener('gesturestart', (e) => e.preventDefault(), { passive: false });\n\t\t\tdocument.addEventListener('gesturechange', (e) => e.preventDefault(), { passive: false });\n\t\t\tdocument.addEventListener('gestureend', (e) => e.preventDefault(), { passive: false });\n\t\t\tdocument.addEventListener('touchmove', (e) => {\n\t\t\t\tif (e.touches.length > 1) e.preventDefault();\n\t\t\t}, { passive: false });\n\t\t</script>\n\t\t<script src=\"/three.r134.min.js\"></script>\n\t\t<script src=\"/vanta.cells.min.js\"></script>\n\t\t" + head + "\n\t</head>\n\t<body data-sveltekit-preload-data=\"hover\">\n\t\t<div style=\"display: contents\">" + body + "</div>\n\t</body>\n</html>\n",
		error
	},
	version_hash: "a163qp"
};

export async function get_hooks() {
	let handle;
	let handleFetch;
	let handleError;
	let handleValidationError;
	let init;
	

	let reroute;
	let transport;
	

	return {
		handle,
		handleFetch,
		handleError,
		handleValidationError,
		init,
		reroute,
		transport
	};
}

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation };
