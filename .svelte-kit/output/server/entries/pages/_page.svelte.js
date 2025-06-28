import { c as create_ssr_component, b as subscribe, d as add_attribute, e as escape } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { data } = $$props;
  let name = data.name || "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1vy99sv_START -->${$$result.title = `<title>Age Predictor - Discover Your Name&#39;s Age</title>`, ""}<meta name="description" content="Enter your name and discover the predicted age using advanced AI algorithms."><!-- HEAD_svelte-1vy99sv_END -->`, ""} <div class="container"><h1 data-svelte-h="svelte-6xy5rf">Age Predictor</h1> <p class="subtitle" data-svelte-h="svelte-n069cd">Discover the predicted age for any name using AI. 
		<a href="https://agify.io" target="_blank" rel="noopener noreferrer">Powered by Agify</a></p> <div class="input-section"><div class="input-group"><label for="name-input" class="input-label" data-svelte-h="svelte-1v4xoxl">Enter a name to predict age</label> <input id="name-input" class="name-input" type="text" placeholder="Type a name here..." autocomplete="given-name" spellcheck="false"${add_attribute("value", name, 0)}></div></div> ${`${name && true ? `<div class="results"><p class="greeting">Hello, ${escape(name)}!</p> ${data.error ? `<div class="error-message">${escape(data.error)}</div>` : `${data.age !== null ? `<div class="age-result">The predicted age for <strong>${escape(data.name)}</strong> is <strong>${escape(data.age)}</strong> years old.</div>` : `${data.name ? `<div class="age-result">No age prediction available for <strong>${escape(data.name)}</strong>.</div>` : ``}`}`}</div>` : ``}`}</div>`;
});
export {
  Page as default
};
