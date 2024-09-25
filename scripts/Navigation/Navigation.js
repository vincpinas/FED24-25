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

	// Functions
	// ------------------------------------------------------------------

	// Events
	// ------------------------------------------------------------------
	set_open_event() {
		html.switch.addEventListener("click", (e) => {
			if(html.header.classList.contains("active")) {
				this.tabs.close();
			}

			html.header.classList.toggle("active");
		});
	} 

	register_menu_buttons() {
		html.menu_buttons.forEach((button) => {
			button.addEventListener("click", (e) => this.tabs.open(e.target));
		});
	}
}

export default Navigation;
