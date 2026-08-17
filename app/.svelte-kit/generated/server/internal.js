
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
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\n<html lang=\"en\">\n\n<head>\n\t<meta charset=\"utf-8\" />\n\t<meta name=\"viewport\"\n\t\tcontent=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, interactive-widget=resizes-content, viewport-fit=cover\" />\n\t<meta name=\"text-scale\" content=\"scale\" />\n\n\t<!-- Primary SEO -->\n\t<title>philnits acronym blitz</title>\n\t<meta name=\"description\"\n\t\tcontent=\"Master PhilNITS IT acronyms with a fast flashcard quiz. Test your speed, track streaks, and climb the live leaderboard with 100+ terms.\" />\n\t<meta name=\"keywords\"\n\t\tcontent=\"PhilNITS, IT acronyms, acronym quiz, NITS exam, Philippines IT certification, flashcard quiz, networking acronyms, security acronyms\" />\n\t<meta name=\"author\" content=\"PhilNITS Acronym Blitz\" />\n\t<meta name=\"robots\" content=\"index, follow\" />\n\t<link rel=\"canonical\" href=\"https://acronymquiz.pages.dev/\" />\n\n\t<!-- Theme -->\n\t<meta name=\"theme-color\" content=\"#1a1a1a\" media=\"(prefers-color-scheme: dark)\" />\n\t<meta name=\"theme-color\" content=\"#f0ede8\" media=\"(prefers-color-scheme: light)\" />\n\t<meta name=\"color-scheme\" content=\"dark light\" />\n\n\t<!-- Open Graph -->\n\t<meta property=\"og:type\" content=\"website\" />\n\t<meta property=\"og:url\" content=\"https://acronymquiz.pages.dev/\" />\n\t<meta property=\"og:title\" content=\"PhilNITS Acronym Blitz\" />\n\t<meta property=\"og:description\"\n\t\tcontent=\"Master PhilNITS IT acronyms with a fast flashcard quiz. Test your speed, track streaks, and climb the live leaderboard with 100+ terms.\" />\n\t<meta property=\"og:image\" content=\"https://acronymquiz.pages.dev/og-preview.png\" />\n\t<meta property=\"og:image:width\" content=\"1200\" />\n\t<meta property=\"og:image:height\" content=\"630\" />\n\t<meta property=\"og:image:alt\"\n\t\tcontent=\"PhilNITS Acronym Blitz — Master 100+ IT Acronyms with streaks and leaderboard\" />\n\t<meta property=\"og:site_name\" content=\"PhilNITS Acronym Blitz\" />\n\t<meta property=\"og:locale\" content=\"en_PH\" />\n\n\t<!-- Twitter Card -->\n\t<meta name=\"twitter:card\" content=\"summary_large_image\" />\n\t<meta name=\"twitter:title\" content=\"philnits acronym blitz\" />\n\t<meta name=\"twitter:description\"\n\t\tcontent=\"Master PhilNITS IT acronyms with a fast flashcard quiz. Test your speed, track streaks, and climb the live leaderboard with 100+ terms.\" />\n\t<meta name=\"twitter:image\" content=\"https://acronymquiz.pages.dev/og-preview.png\" />\n\t<meta name=\"twitter:image:alt\" content=\"PhilNITS Acronym Blitz quiz preview\" />\n\n\t<!-- JSON-LD Structured Data -->\n\t<script type=\"application/ld+json\">\n\t\t{\n\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\"@type\": \"WebApplication\",\n\t\t\t\"name\": \"PhilNITS Acronym Blitz\",\n\t\t\t\"description\": \"A gamified flashcard quiz for mastering PhilNITS IT acronyms. Covers networking, security, hardware, software, and management.\",\n\t\t\t\"url\": \"https://acronymquiz.pages.dev/\",\n\t\t\t\"applicationCategory\": \"EducationalApplication\",\n\t\t\t\"operatingSystem\": \"Any\",\n\t\t\t\"browserRequirements\": \"Requires JavaScript\",\n\t\t\t\"inLanguage\": \"en\",\n\t\t\t\"audience\": {\n\t\t\t\t\"@type\": \"Audience\",\n\t\t\t\t\"audienceType\": \"IT students and professionals in the Philippines\"\n\t\t\t},\n\t\t\t\"offers\": {\n\t\t\t\t\"@type\": \"Offer\",\n\t\t\t\t\"price\": \"0\",\n\t\t\t\t\"priceCurrency\": \"PHP\"\n\t\t\t}\n\t\t}\n\t\t</script>\n\n\t<!-- Theme init (FOUC prevention) -->\n\t<script>\n\t\t(function () {\n\t\t\ttry {\n\t\t\t\tvar saved = localStorage.getItem('philnits_theme');\n\t\t\t\tvar prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;\n\t\t\t\tif (saved === 'light' || (!saved && prefersLight)) {\n\t\t\t\t\tdocument.documentElement.classList.add('light');\n\t\t\t\t} else {\n\t\t\t\t\tdocument.documentElement.classList.remove('light');\n\t\t\t\t}\n\t\t\t} catch (e) { }\n\t\t})();\n\t</script>\n\t<script>\n\t\tdocument.addEventListener('gesturestart', (e) => e.preventDefault(), { passive: false });\n\t\tdocument.addEventListener('gesturechange', (e) => e.preventDefault(), { passive: false });\n\t\tdocument.addEventListener('gestureend', (e) => e.preventDefault(), { passive: false });\n\t\tdocument.addEventListener('touchmove', (e) => {\n\t\t\tif (e.touches.length > 1) e.preventDefault();\n\t\t}, { passive: false });\n\t</script>\n\t<script src=\"/three.r134.min.js\" defer></script>\n\t<script src=\"/vanta.cells.min.js\" defer></script>\n\t" + head + "\n</head>\n\n<body data-sveltekit-preload-data=\"hover\">\n\t<div style=\"display: contents\">" + body + "</div>\n</body>\n\n</html>",
		error
	},
	version_hash: "1i5l1js"
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
