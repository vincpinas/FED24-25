import html from "../selectors.js";

class TabManager {
	constructor(container) {
		this.container = container;
		this.current_tab = null;

		this.tabs = {
			home: {  },
			missions: {  },
			humans_in_space: {  },
			news_and_events: {  },
			multimedia: {  },
		};
	}

	// Functions
	// ------------------------------------------------------------------
	add(key, value) {
		this.tabs[key] = value;
	}

	create() {}

	open(target) {
		html.menu.classList.add("open");

		const data = this.tabs[target.dataset.key]

		console.log(data)
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
