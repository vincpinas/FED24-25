import Navigation from "./Navigation/Navigation.js";
import html from "./selectors.js"

const nav = new Navigation();

nav.init();

// Uncomment lines to automatically open the settings submenu (for dev)
// html.switch.click();
// nav.tabs.open(html.menu_buttons[html.menu_buttons.length-1])