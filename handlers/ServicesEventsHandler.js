"use strict";
import { QSAll } from "https://edibalan.github.io/alice-kineto/app.js";
import Services from "https://edibalan.github.io/alice-kineto/components/Services.js";

export default class ServicesEventsHandler extends Services {
  constructor() {
    super();
    
    this.screenWidth = screen.width;
    this.servicesButtons = QSAll(".service-button");

    this.extendDescription = event => {
      const button = event.target, description = event.target.previousElementSibling;

      button.innerText = "Mai putin";
      description.classList.add("extend-description");

      button.removeEventListener("click", this.extendDescription);
      button.addEventListener("click", this.hideDescription);
    };
    
    this.hideDescription = event => {
      const button = event.target, description = event.target.previousElementSibling;

      button.innerText = "Mai mult";
      description.classList.remove("extend-description");

      button.removeEventListener("click", this.hideDescription);
      button.addEventListener("click", this.extendDescription);
    };
  }

  initiateHandler() {
    this.servicesButtons.forEach(button => button.addEventListener("click", this.extendDescription));
  }
}
