import html from "../selectors.js";
import { createEl, getStorage } from "../helpers.js";
import { tab_data } from "./static.js";

class TabManager {
	constructor(container) {
		this.container = container;
		this.tabs = tab_data;
		this.state = getStorage("settings");


	}

	// Functions
	// ------------------------------------------------------------------
	open(target) {
		this.state = getStorage("settings");

		html.menu.classList.add("open");

		const data = this.tabs[target.dataset.key];;

		createEl("h2", { parent: this.container, html: data.title})
		createEl("button", {
			parent: this.container,
			html: "Back",
		}).addEventListener("click", () => this.close());
		createEl("hr", { parent: this.container });

		data.elements.forEach(element => {
			const el = createEl(element.tag, { 
				html: element.html || "",
				parent: element.parent || this.container,
				type: element.type || null,
				event: element.event || null,
				value: this.state[element.id] || element.value || null,
				min: element.min || null,
				max: element.max || null,
				checked: this.state[element.id] || null,
			})

			element && element.event ? element.event.callback(el, true) : null;
		})
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
