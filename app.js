"use strict";
import Navigation from "https://edibalan.github.io/alice-kineto/components/Navigation.js";
import Home from "https://edibalan.github.io/alice-kineto/components/Home.js";
import Services from "https://edibalan.github.io/alice-kineto/components/Services.js";
import Gallery from "https://edibalan.github.io/alice-kineto/components/Gallery.js";
import Prices from "https://edibalan.github.io/alice-kineto/components/Prices.js";
import Contact from "https://edibalan.github.io/alice-kineto/components/Footer.js";

import NavigationHandler from "https://edibalan.github.io/alice-kineto/handlers/NavigationHandler.js";
import ServicesHandler from "https://edibalan.github.io/alice-kineto/handlers/ServicesHandler.js";
import GalleryHandler from "https://edibalan.github.io/alice-kineto/handlers/GalleryHandler.js";
import PricesHandler from "https://edibalan.github.io/alice-kineto/handlers/PricesHandler.js";

export const QS = (elem) => document.querySelector(elem), QSAll = (elem) => document.querySelectorAll(elem);
class App {
  constructor() {
    this.body = QS("body");
    this.header = document.createElement("header");
    this.main = document.createElement("main");
    this.footer = document.createElement("footer");
  }

  async render() {
    const request = await fetch("https://edibalan.github.io/alice-kineto/data/data.json", { method: "GET" }),
      data = await request.json();

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
        this.footer.setAttribute("class", "footer");

        this.body.insertAdjacentElement("afterbegin", this.footer);
        this.body.insertAdjacentElement("afterbegin", this.main);
        this.body.insertAdjacentElement("afterbegin", this.header);

        setTimeout(() => {
          new NavigationHandler().initiate();
          new ServicesHandler().initiate();
          new GalleryHandler().initiate();
          new PricesHandler(data).initiate();
        }, 100);
      } else console.log(`Something went wrong. Status code: ${request.status}`);
    } catch (error) {
      console.log(error);
    }
  }
}

new App().render();

