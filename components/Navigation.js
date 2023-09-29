"use strict";
import { QS } from "https://edibalan.github.io/alice-kineto/app.js";
export default class Navigation {
  constructor(data) {
    this.data = data;
    this.navMenuComponents = ["", "", ""];
  
    this.renderNavMenuComponents = () => {
      for(let i = 0; i < 4; i++) {
        this.navMenuComponents[0] += `
          <li class="grid-element fs-small">
            <span>${data["program-days"][i]}</span>
            <span>${data["program-hours"][i]}</span>
          </li>
        `;
        
        this.navMenuComponents[2] += `
          <li class="fs-small">
            <a href="${data["navigation-links"][i]}">${data["navigation-labels"][i]}</a>
          </li>
        `;
      };
      
      for(let i = 0; i < data["contact-links"].length; i++) {
        this.navMenuComponents[1] += `
          <li class="fs-small">
            <a class="contact-link" href="${data["contact-links"][i]}" target="_blank">${data["contact-labels"][i]}</a>
          </li>
        `;
      };

      return this.navMenuComponents[2];
    };

    this.renderSideMenuComponents = () => {
      for(let i = 0; i < 3; i++) {
        sideMenuComponents += `
          <li class="${data["side-menu-classes"][i]}">
            <h2 class="${data["side-menu-classes"][i]}-title | fs-medium fw-bold">${data["side-menu-titles"][i]}</h2>
            <ul aria-label="${data["side-menu-Labels"][i]}" class="${data["side-menu-classes"][i]}-content" role="list">
              ${this.navMenuComponents[i]}
            </ul>
          </li>
        `;
      };

      return sideMenuComponents;
    };
  }

  render() {
    setTimeout(() => QS(".program").insertAdjacentHTML("afterbegin", this.data["secondary-logo"]), 10);

    return `
      <div class="nav-container">
        <div class="nav-content | grid-element">
          <a href="/"><img alt="Alice Kineto Logo" class="logo" data-type="primary-logo" src="/assets/logo.webp" /></a>

          <nav class="primary-nav">
            <ul aria-label="Navigation Menu" class="nav-menu | grid-element" role="list">${this.renderNavMenuComponents()}</ul>
            <button aria-label="Open navigation menu" aria-controls="secondary-nav" aria-expanded="false"
              class="button | grid-element fw-sm-bold" data-role="open-nav" id="open-nav-button">III</button>
          </nav>

          <div class="side-menu-container">
            <div class="side-menu-aside"></div>
            <nav class="secondary-nav" id="secondary-nav">
              <button aria-label="Close navigation menu" aria-controls="secondary-nav" aria-expanded="true"
                class="button | grid-element fw-sm-bold" data-role="close-nav" id="close-nav-button">✕</button>

              <ul aria-label="Side Menu" class="side-menu | grid-element" role="list">${this.renderSideMenuComponents()}</ul>
            </nav>
          </div>
        </div>
      </div>
    `;
  }
}

export let sideMenuComponents = "";
