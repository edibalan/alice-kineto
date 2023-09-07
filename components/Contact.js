"use strict";
import { sideMenuComponents } from "https://edibalan.github.io/alice-kineto/components/Navigation.js";
export default class Contact {
  render() {
    return `
      <div class="contact-container | container" id="contact">
        <nav class="secondary-nav">
          <ul aria-label="Side Menu" class="side-menu | grid-element" data-type="contact-menu" role="list">
            ${sideMenuComponents}
          </ul>
        </nav>
      </div>
      <div class="copyright | grid-element fs-small fw-sm-bold">
        <p>Alice Professional Kineto <span class="version">v2.1</span></p>
        <p>Copyright ©${new Date().getFullYear()}</p>
      </div>
    `;
  }
}
