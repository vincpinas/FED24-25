export default {
	header: document.querySelector("header:has(#explore-button)"),
	switch: document.querySelector("#explore-button"),
	menu: document.querySelector(
		"header:has(#explore-button) nav[aria-label^='sub']"
	),
	menu_buttons: document.querySelectorAll(
		"header:has(#explore-button) nav[aria-label^='sub'] button"
	),
	tab_container: document.querySelector(
		"header:has(#explore-button) nav[aria-label^='sub'] section:nth-of-type(2)"
	),
	skip_content: document.querySelector("#skip-to-content"),
	pause: document.querySelector("button[title='pause background video']"),
	video: document.querySelector("video"),
};
