"use strict";
import { QSAll } from "https://edibalan.github.io/alice-kineto/app.js";
import Services from "https://edibalan.github.io/alice-kineto/components/Services.js";
export default class ServicesHandler extends Services {
  constructor() {
    super();
    this.servicesButtons = QSAll(".services__element__button");

    this.extendDescription = event => {
      const button = event.target, description = event.target.previousElementSibling;

      button.innerText = "Mai putin";
      description.classList.add("extended");

      button.removeEventListener("click", this.extendDescription);
      button.addEventListener("click", this.shrinkDescription);
    };

    this.shrinkDescription = event => {
      const button = event.target, description = event.target.previousElementSibling;

      button.innerText = "Mai mult";
      description.classList.remove("extended");

      button.removeEventListener("click", this.shrinkDescription);
      button.addEventListener("click", this.extendDescription);
    };
  }

  initiate() {
    this.servicesButtons.forEach((button) => button.addEventListener("click", this.extendDescription));
  }
}
