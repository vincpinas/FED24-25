import Navigation from "./Navigation/Navigation.js";
import html from "./selectors.js"

const nav = new Navigation();

nav.init();

// Lelijk code omdat ik een fout gemaakt heb en geen tijd heb om het te fixen, de opgeslagen instellingen worden alleen toegepast nadat het settings menu geopend is dus daarom moet ik het hier snel openen en sluiten.
html.switch.click();
nav.tabs.open(html.menu_buttons[html.menu_buttons.length-1])
nav.tabs.close();
html.switch.click();

html.skip_content.addEventListener("click", () => {
    nav.tabs.close();
    html.header.classList.remove("active");
})

html.pause.addEventListener("click", () => {
    if(html.video.paused) {
        html.video.play();
        html.pause.className = ""
    } else {
        html.video.pause();
        html.pause.className = "paused"
    }
})
