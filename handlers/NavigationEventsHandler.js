"use strict";
import { QS, QSAll } from "https://edibalan.github.io/alice-kineto/app.js";
import Navigation from "https://edibalan.github.io/alice-kineto/components/Navigation.js";

export default class NavigationEventsHandler extends Navigation {
  constructor(data) {
    super();
    
    this.closeSideMenuBtn = QS("#close-nav-button");
    this.homeButton = QS("#home-button");
    this.homeSection = QS(".home-section");
    this.navMenu = QS(".nav-container");
    this.navLinks = QSAll(".navigation-link");
    this.openSideMenuBtn = QS("#open-nav-button");
    this.previousPosition = window.scrollY;
    this.sideMenu = QS(".side-menu-container");
    this.sideMenuAside = QS(".side-menu-aside");

    this.closeSideMenu = () => {
      let currentPosition = window.scrollY;

      this.sideMenuAside.classList.remove("opacity");
      
      setTimeout(() => this.sideMenu.classList.remove("open-side-menu"), 200);
      setTimeout(() => {
        currentPosition >= this.homeSection.clientHeight + 100
          ? this.homeButton.classList.add("display-home-button")
          : this.homeButton.classList.remove("display-home-button");

        this.navMenu.classList.remove("hide-nav-menu");
      }, 500);
    };

    this.navLocationHandler = () => {
      for(let i = 0; i < data["navigation-locations"].length; i++) {
         this.navLinks[i].addEventListener("click", () => window.scrollTo(0, data["navigation-locations"][i]));
      }
    };
    
    this.openSideMenu = () => {
      this.navMenu.classList.add("hide-nav-menu");

      setTimeout(() => {
        this.homeButton.classList.remove("display-home-button");
        
        setTimeout(() => this.sideMenu.classList.add("open-side-menu"), 50);
        setTimeout(() => this.sideMenuAside.classList.add("opacity"), 500);
      }, 300);
    };

    this.scrollEvent = () => {
      let currentPosition = window.scrollY;

      this.sideMenuAside.classList.remove("opacity");
      setTimeout(() => this.sideMenu.classList.remove("open-side-menu"), 150);

      this.previousPosition > currentPosition
        ? setTimeout(() => this.navMenu.classList.remove("hide-nav-menu"), 400)
        : this.navMenu.classList.add("hide-nav-menu");
      this.previousPosition = currentPosition;
      
      this.previousPosition > 0
        ? this.navMenu.classList.add("box-shadow")
        : this.navMenu.classList.remove("box-shadow");

      currentPosition >= this.homeSection.clientHeight + 100
        ? this.homeButton.classList.add("display-home-button")
        : this.homeButton.classList.remove("display-home-button");
    };
  }

  initiateHandler() {
    window.addEventListener("scroll", this.scrollEvent);
    this.navLocationHandler();
    
    if (screen.width < 912) {
      this.openSideMenuBtn.addEventListener("click", this.openSideMenu);
      this.closeSideMenuBtn.addEventListener("click", this.closeSideMenu);
    }
  }
}
