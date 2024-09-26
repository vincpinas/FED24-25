import html from "../selectors.js";
import { createEl } from "../helpers.js";
import { tab_data } from "./static.js";

class TabManager {
	constructor(container) {
		this.container = container;
		this.tabs = tab_data;
	}

	// Functions
	// ------------------------------------------------------------------
	open(target) {
		html.menu.classList.add("open");

		const data = this.tabs[target.dataset.key];
		console.log(data);

		createEl("h2", { parent: this.container, html: data.title})
		createEl("button", {
			parent: this.container,
			html: "Back",
		}).addEventListener("click", () => this.close());
		createEl("hr", { parent: this.container });
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
