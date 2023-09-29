"use strict";
export default class Services {
  constructor(data) {
    this.data = data;

    this.renderDescriptions = index => {
      let paragraphs = ["", "", "", ""];

      for (let i = 0; i < data["services-descriptions"][index].length; i++) {
        data["services-descriptions"][index][i] !== " " && data["services-descriptions"][index][i + 1] !== " "
          ? paragraphs[index] += data["services-descriptions"][index][i].concat("&shy")
          : paragraphs[index] += data["services-descriptions"][index][i];
      };
      
      return paragraphs[index];
    };

    this.renderElements = () => {
      let elements = "";

      for(let i = 0; i < data["services-descriptions"].length; i++) {
        elements += `
          <div class="service-element | grid-element">
            <img alt="Kinetotherapy illustration" class="service-image" id="image-${i + 1}" src="https://edibalan.github.io/alice-kineto/assets/${data["services-images"][i]}"/>
            <div class="service-element-content">
              <h2 class="service-title | fs-sm-large fw-bold">${data["services-titles"][i]}</h2>
              <p class="service-description" id="description-${i + 1}">${this.renderDescriptions(i)}</p>
              <button class="service-button | button fs-small fw-sm-bold" data-type="service-button">Mai mult</button>
            </div>
          </div>
        `;
      };

      return elements;
    };
  }

  render() {
    return `
      <section class="services-section" id="services">
        <div class="container">
          <div class="section-title">
            <h1 class="fs-large fw-bold">Servicii</h1>
            <div class="title-underline"></div>
          </div>
          <div class="services-content | grid-element">${this.renderElements()}</div>
        </div>
        <a aria-label="Home" onclick="window.scrollTo(0, 0)">
          <button class="button | fs-sm-large" data-type="home-button" id="home-button">
            <i class="fa-sharp fa-solid fa-house"></i>
          </button>
        </a>
      </section>
    `;
  }
}
