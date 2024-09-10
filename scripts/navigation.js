class Navigation {
    constructor() {
        this.switch = document.querySelector("nav:nth-of-type(1) > button");

        this.init()
    }

    init() {
        this.activate_menu();
    }

    activate_menu() {
        this.switch.addEventListener("click", (e) => {
            e.target.parentElement.classList.toggle("active");
        })
    }
}

export default Navigation;