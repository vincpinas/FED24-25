import html from "../selectors.js";
import { create_el, get_storage } from "../helpers.js";
import { tab_data } from "./static.js";

class TabManager {
	constructor(container) {
		this.container = container;
		this.tabs = tab_data;
		this.state = get_storage("settings");
	}

	init() {
		
	}

	// Functions
	// ------------------------------------------------------------------
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
				for: element.for
			});

			if (element.state) {
				el[element.state.property] = this.state[element.state.id];
			}

			element.event ? element.event.callback(el, true) : null;
		});
	}

	clear() {
		this.container.innerHTML = "";
	}

	close() {
		html.menu.classList.remove("open");
		this.clear();
	}
}

export default TabManager;
