

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.3Kepw-Rv.js","_app/immutable/chunks/3YTWd9cS.js","_app/immutable/chunks/xihTtKlq.js"];
export const stylesheets = ["_app/immutable/assets/0.DTBiGbF2.css"];
export const fonts = [];
