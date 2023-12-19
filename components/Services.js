"use strict";
export default class Services {
  constructor(data) {
    this.data = data;

    this.renderDescriptions = index => {
      const descriptions = data.services.descriptions[index];
      let paragraphs = ["", "", "", ""];

      for (let i = 0; i < descriptions.length; i++) {
        descriptions[i] !== " " && descriptions[i + 1] !== " "
          ? paragraphs[index] += descriptions[i].concat("&shy")
          : paragraphs[index] += descriptions[i];
      }

      return paragraphs[index];
    };

    this.renderElements = () => {
      let elements = "";

      for (let i = 0; i < data.services.descriptions.length; i++) {
        elements += `
          <div class="services__element | grid-element">
            <img alt="Kinetotherapy illustration" class="services__element__image" id="image-${i + 1}" src="https://edibalan.github.io/alice-kineto/assets/${data.services.images[i]}">

            <div class="services__element__content">
              <h3 class="services__element__title">
                ${data.services.titles[i]}
              </h3>
              
              <p class="services__element__description" id="description-${i + 1}">
                ${this.renderDescriptions(i)}
              </p>
              
              <button class="services__element__button">Mai mult</button>
            </div>
          </div>
        `;
      }

      return elements;
    };
  }

  render() {
    return `
      <article class="services" id="services">
        <h2 class="services__title">Servicii</h2>

        <section class="services__content | container grid-element">
          ${this.renderElements()}
        </section>
        
        <a href="${this.data.menu.navigation.links[0]}">
          <button class="services__button" id="home-button">
            <i class="fa-sharp fa-solid fa-house"></i>
          </button>
        </a>
      </article>
    `;
  }
}
