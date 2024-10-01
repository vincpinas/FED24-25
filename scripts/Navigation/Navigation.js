import TabManager from "./TabManager.js";
import html from "../selectors.js";

class Navigation {
	constructor() {
		this.tabs = new TabManager(html.tab_container);
	}

	init() {
		this.set_open_event();
		this.register_menu_buttons();
	}

	// Events
	// ------------------------------------------------------------------
	// Voegt een event listener toe aan de knop in de header om het menu te openen
	set_open_event() {
		html.switch.addEventListener("click", (e) => {
			if (html.header.classList.contains("active")) {
				this.tabs.close();
			}

			html.header.classList.toggle("active");
		});
	}

	// Voegt een event listener toe aan elke button in het menu om het juiste submenu te openen als je er op een klikt.
	register_menu_buttons() {
		html.menu_buttons.forEach((button, i) => {
			if(i === 0) return;
			button.addEventListener("click", (e) => this.tabs.open(e.target));
		});
	}
}

export default Navigation;
