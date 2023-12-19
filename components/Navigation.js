"use strict";
import { QS } from "https://edibalan.github.io/alice-kineto/app.js";
export default class Navigation {
  constructor(data) {
    this.data = data;
    this.navigationComponents = ["", "", ""];

    this.renderNavigationComponents = () => {
      for (let i = 0; i < data.menu.program.days.length; i++) {
        this.navigationComponents[0] += `
          <li class="grid-element">
            <span>${data.menu.program.days[i]}</span>
            <span>${data.menu.program.hours[i]}</span>
          </li>
        `;

        this.navigationComponents[2] += `
          <li>
            <a href="${data.menu.navigation.links[i]}" target="_self">
              ${data.menu.navigation.labels[i]}
            </a>
          </li>
        `;
      }

      for (let i = 0; i < data.menu.contact.links.length; i++) {
        this.navigationComponents[1] += `
          <li>
            <a class="contact__link" href="${data.menu.contact.links[i]}" target="_blank">
              ${data.menu.contact.labels[i]}
            </a>
          </li>
        `;
      }

      return this.navigationComponents[2];
    };

    this.renderMenuComponents = () => {
      for (let i = 0; i < data.menu.classes.length; i++) {
        menuComponents += `
          <li class="${data.menu.classes[i]}">
            <p class="${data.menu.classes[i]}__title">
              ${data.menu.titles[i]}
            </p>

            <ul aria-label="${data.menu.labels[i]}" class="${data.menu.classes[i]}__content" role="list">
              ${this.navigationComponents[i]}
            </ul>
          </li>
        `;
      }

      return menuComponents;
    };

    this.renderMenu = () => {
      setTimeout(() => {
        QS(".program").insertAdjacentHTML("afterbegin", this.data.menu.program["secondary-logo"]);
      }, 10);

      return `
        <div class="menu">
          <div class="menu__aside"></div>
          <nav class="menu__nav" id="menu">
            <button aria-label="Close menu" aria-controls="menu" aria-expanded="true"
              class="menu__button | grid-element" id="close-menu-button">✕</button>

            <ul aria-label="Menu" class="menu__links | grid-element" role="list">
              ${this.renderMenuComponents()}
            </ul>
          </nav>
        </div>
      `;
    };
  }

  render() {
    return `
      <nav class="nav">
        <div class="nav__content | grid-element">
          <img alt="Alice Kineto Logo" class="nav__logo" src="https://edibalan.github.io/alice-kineto/assets/logo.webp">

          <ul aria-label="Navigation Menu" class="nav__menu | grid-element" role="list">
            ${this.renderNavigationComponents()}
          </ul>

          <button aria-label="Open navigation menu" aria-controls="menu" aria-expanded="false"
            class="nav__button" id="open-menu-button">III</button>
        </div>
      </nav>
      ${this.renderMenu()}
    `;
  }
}

export let menuComponents = "";
