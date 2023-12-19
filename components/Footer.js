"use strict";
import { menuComponents } from "https://edibalan.github.io/alice-kineto/components/Navigation.js";
export default class Footer {
  render() {
    return `
      <nav class="footer__navigation | container">
        <ul aria-label="Footer Menu" class="footer__navigation__menu | grid-element" role="list">
          ${menuComponents}
        </ul>
      </nav>
      <section class="footer__copyright | grid-element">
        <p>Alice Professional Kineto</p>
        <p>Copyright ©${new Date().getFullYear()}</p>
      </section>
    `;
  }
}
