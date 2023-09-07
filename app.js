"use strict";
import Navigation from "https://edibalan.github.io/alice-kineto/components/Navigation.js";
import Home from "https://edibalan.github.io/alice-kineto/components/Home.js";
import Services from "https://edibalan.github.io/alice-kineto/components/Services.js";
import Gallery from "https://edibalan.github.io/alice-kineto/components/Gallery.js";
import Prices from "https://edibalan.github.io/alice-kineto/components/Prices.js";
import Contact from "https://edibalan.github.io/alice-kineto/components/Contact.js";

import NavigationEventsHandler from "https://edibalan.github.io/alice-kineto/handlers/NavigationEventsHandler.js";
import ServicesEventsHandler from "https://edibalan.github.io/alice-kineto/handlers/ServicesEventsHandler.js";
import GalleryEventsHandler from "https://edibalan.github.io/alice-kineto/handlers/GalleryEventsHandler.js";
import PricesEventsHandler from "https://edibalan.github.io/alice-kineto/handlers/PricesEventsHandler.js";

export const QS = element => document.querySelector(element), QSAll = element => document.querySelectorAll(element);
class App {
  constructor() {
    this.body = document.querySelector("body");
    this.header = document.createElement("header");
    this.main = document.createElement("main");
    this.footer = document.createElement("footer");
  }

  async render() {
    const request = await fetch("/data/data.json", {"method": "GET"}), data = await request.json();

    try {
      if (request.status === 200) {
        this.header.innerHTML = new Navigation(data).render();
    
        this.main.innerHTML = `
          ${new Home(data).render()}
          ${new Services(data).render()}
          ${new Gallery(data).render()}
          ${new Prices(data).render()}
        `;

        this.footer.innerHTML = new Contact().render();
        this.footer.setAttribute("class", "contact-section | blue-bg");
        
        this.body.insertAdjacentElement("afterbegin", this.footer);
        this.body.insertAdjacentElement("afterbegin", this.main);
        this.body.insertAdjacentElement("afterbegin", this.header);

        setTimeout(() => {
          new NavigationEventsHandler().initiateHandler();
          new ServicesEventsHandler().initiateHandler();
          new GalleryEventsHandler().initiateHandler();
          new PricesEventsHandler(data).initiateHandler();
        }, 100);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
new App().render();
