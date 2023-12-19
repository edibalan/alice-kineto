"use strict";
import { QS, QSAll } from "https://edibalan.github.io/alice-kineto/app.js";
import Navigation from "https://edibalan.github.io/alice-kineto/components/Navigation.js";
export default class NavigationHandler extends Navigation {
  constructor() {
    super();
    
    this.closeMenuBtn = QS("#close-menu-button");
    this.homeButton = QS("#home-button");
    this.homeSection = QS(".home");
    this.navigation = QS(".nav");
    this.openMenuBtn = QS("#open-menu-button");
    this.previousPosition = window.scrollY;
    this.menu = QS(".menu");
    this.menuAside = QS(".menu__aside");

    this.closeMenu = () => {
      let currentPosition = window.scrollY;

      this.menuAside.classList.remove("opacity");
      setTimeout(() => this.menu.classList.remove("opened"), 200);
      setTimeout(() => {
        this.navigation.classList.remove("hidden");
        
        currentPosition >= this.homeSection.clientHeight + 100
          ? this.homeButton.classList.add("displayed")
          : this.homeButton.classList.remove("displayed");
        
      }, 500);
    };

    this.openMenu = () => {
      this.navigation.classList.add("hidden");
      
      setTimeout(() => {
        this.homeButton.classList.remove("displayed");
        setTimeout(() => this.menu.classList.add("opened"), 50);
        setTimeout(() => this.menuAside.classList.add("opacity"), 500);
      }, 300);
    };

    this.scrollEvent = () => {
      let currentPosition = window.scrollY;

      this.menuAside.classList.remove("opacity");
      setTimeout(() => this.menu.classList.remove("opened"), 150);

      this.previousPosition > currentPosition
        ? setTimeout(() => this.navigation.classList.remove("hidden"), 400)
        : this.navigation.classList.add("hidden");
      this.previousPosition = currentPosition;

      this.previousPosition > 0
        ? this.navigation.classList.add("box-shadow")
        : this.navigation.classList.remove("box-shadow");

      currentPosition >= this.homeSection.clientHeight + 100
        ? this.homeButton.classList.add("displayed")
        : this.homeButton.classList.remove("displayed");
    };

    this.navigationHandlerInitiator = () => {
      if (window.innerWidth < 768) {
        this.openMenuBtn.addEventListener("click", this.openMenu);
        this.closeMenuBtn.addEventListener("click", this.closeMenu);
      }
       else {
        this.openMenuBtn.removeEventListener("click", this.openMenu);
        this.closeMenuBtn.removeEventListener("click", this.closeMenu);
      }
    };
  }

  initiate() {
    this.navigationHandlerInitiator();

    window.addEventListener("resize", this.navigationHandlerInitiator);
    window.addEventListener("scroll", this.scrollEvent);
  }
}
