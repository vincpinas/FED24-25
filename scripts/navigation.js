class Navigation {
    constructor() {
        this.switch = document.querySelector("#explore-button");
        this.submenu = document.querySelector("nav[aria-label^='sub']")

        this.init()
    }

    init() {
        this.activate_menu();

        console.log(this.submenu)
    }

    activate_menu() {
        this.switch.addEventListener("click", (e) => {
            e.target.parentElement.classList.toggle("active");
        })
    }
}

export default Navigation;