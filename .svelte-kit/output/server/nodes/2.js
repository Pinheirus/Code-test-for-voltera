import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.XHj69ViW.js","_app/immutable/chunks/y7vOTFwO.js","_app/immutable/chunks/IHki7fMi.js","_app/immutable/chunks/DUPnAXtg.js","_app/immutable/chunks/CM3XwS61.js"];
export const stylesheets = [];
export const fonts = [];
