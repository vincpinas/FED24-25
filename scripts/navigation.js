class Navigation {
	constructor() {
		this.header = document.querySelector("header:has(#explore-button)")
		this.switch = document.querySelector("#explore-button");
		this.menu = document.querySelector("nav[aria-label^='sub']");

		this.current_tab = null;
	}

	init() {
		this.set_open_event();
	}

	// Functions
	// ------------------------------------------------------------------
  open_tab() {
    
  }


	// Events
	// ------------------------------------------------------------------
	set_open_event() {
		this.switch.addEventListener("click", (e) => {
			this.header.classList.toggle("active");
		});
	}
}

export default Navigation;
