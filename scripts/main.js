import Navigation from "./Navigation/Navigation.js";
import html from "./selectors.js"

const nav = new Navigation();
nav.init();

// Sluit de navigatie af als je skip content button klikt terwijl het menu open is
html.skip_content.addEventListener("click", () => {
    nav.tabs.close();
    html.header.classList.remove("active");
})

// Pauseerd de background video boven aan de homescreen met een pauseer button en een event.
html.pause.addEventListener("click", () => {
    if(html.video.paused) {
        html.video.play();
        html.pause.className = ""
    } else {
        html.video.pause();
        html.pause.className = "paused"
    }
})
