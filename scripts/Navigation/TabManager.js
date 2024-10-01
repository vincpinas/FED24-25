import html from "../selectors.js";
import { create_el, get_storage } from "../helpers.js";
import { tab_data } from "./static.js";

class TabManager {
	constructor(container) {
		this.container = container;
		this.tabs = tab_data;
		this.state = get_storage("settings");

		this.init();
	}

	// Laad de state uit localStorage in zonder het menu nog te openen
	init() {
		const settings_data = tab_data.settings;
		if (typeof settings_data === "undefined") return;

		settings_data.elements.forEach((element) => {
			const el = create_el(element.tag, {
				innerHTML: element.innerHTML,
				type: element.type,
				value: element.value,
				children: element.children,
				state: element.state,
				id: element.id,
			});

			if (element.state) {
				el[element.state.property] = this.state[element.state.id];
			}

			element.event ? element.event.callback(el, true) : null;
		});
	}

	// Functions
	// ------------------------------------------------------------------
	// Opent een tab, een popluate deze met elementen via een loop.
	open(target) {
		this.clear();

		this.state = get_storage("settings");

		html.menu.classList.add("open");

		const data = this.tabs[target.dataset.key];

		create_el("h2", { parent: this.container, innerHTML: data.title });
		create_el("button", {
			parent: this.container,
			innerHTML: "Back",
		}).addEventListener("click", () => this.close());
		create_el("hr", { parent: this.container });

		data.elements.forEach((element) => {
			const el = create_el(element.tag, {
				innerHTML: element.innerHTML,
				parent: element.parent || this.container,
				type: element.type,
				event: element.event,
				value: element.value,
				min: element.min,
				max: element.max,
				children: element.children,
				state: element.state,
				id: element.id,
				for: element.for,
			});

			if (element.state) {
				el[element.state.property] = this.state[element.state.id];
			}
		});
	}

	// Removed alle HTML in het tab.
	clear() {
		this.container.innerHTML = "";
	}

	// Sluit het tab en removed alle HTML in het tab.
	close() {
		html.menu.classList.remove("open");
		this.clear();
	}
}

export default TabManager;
