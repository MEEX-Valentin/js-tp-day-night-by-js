import {settings} from "./settings";

const dayNight = {
    init() {
        document.documentElement.classList.add(settings.jsEnabledClass);
        this.btn = document.querySelector(settings.btnSelector);
        this.tumblerElement = document.querySelector(settings.tumblerSelector);
        this.postElements = document.querySelectorAll(settings.postSelector);
        // this.btn.addEventListener('click', () => {
        //     console.log(this);
        // });     ---y'a pas de binding fait donc le this vaut l'objet courant qui est dayNight---
        this.btn.addEventListener('click', function () {
            console.log(this);
        }); // ---il y'a un binding avec le function donc le this vaut le bouton dans ce cas---
        this.btn.addEventListener('click', this.changeClasses.bind(this)); // avec le .bind on permet
    },
    changeClasses() {
            document.body.classList.toggle(settings.bodyClass);
        this.tumblerElement.classList.toggle(settings.tumblerClass);
        this.postElements.forEach((postElement) => {
            postElement.classList.toggle(settings.postClass);
        });
    },
};

dayNight.init();