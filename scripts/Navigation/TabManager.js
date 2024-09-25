import html from "../selectors.js";
import { createEl } from "../helpers.js";

class TabManager {
	constructor(container) {
		this.container = container;

		this.tabs = {
			missions: {},
			humans_in_space: {},
			news_and_events: {},
			multimedia: {},
		};
	}

	// Functions
	// ------------------------------------------------------------------
	add(key, value) {}

	create() {}

	open(target) {
		html.menu.classList.add("open");

		const data = this.tabs[target.dataset.key];
		console.log(data);

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
