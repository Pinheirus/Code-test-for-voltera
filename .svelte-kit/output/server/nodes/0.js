

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.D1cM8Bvu.js","_app/immutable/chunks/y7vOTFwO.js","_app/immutable/chunks/IHki7fMi.js"];
export const stylesheets = ["_app/immutable/assets/0.BVqmmfaq.css"];
export const fonts = [];
