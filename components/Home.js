"use strict";
export default class Home {
  constructor(data) {
    this.data = data;

    this.renderDescriptions = () => {
      let paragraphs = ["", ""];

      for (let i = 0; i < data["home-descriptions"].length; i++) {
        for (let j = 0; j < data["home-descriptions"][i].length; j++) {
          if (data["home-descriptions"][i][j] !== " " && data["home-descriptions"][i][j + 1] !== " ") {
            paragraphs[i] += data["home-descriptions"][i][j].concat("&shy");
          } else {
            paragraphs[i] += data["home-descriptions"][i][j];
          };
        };
      };

      return `
        <p>${paragraphs[0]}</p>
        <p>${paragraphs[1]}</p>
      `;
    };
  }

  render() {
    return `
      <section class="home-section | grid-element full-screen">
        <div class="home-container | container grid-element">  <!--  | grid-element -->
          <div class="home-content">
            <h1 class="home-title | fs-large fw-bold">Bun venit !</h1>
            <div class="home-description">${this.renderDescriptions()}</div>
            <a href="${this.data["contact-links"][1]}">
              <button class="button | fs-x-small fw-sm-bold" data-type="contact-button">Programare consultatie</button>
            </a>
          </div>
          <div>
            <img alt="Kinetotherapy illustration" class="home-image" src="/media/${this.data["services-images"][1]}" />
          </div>
        </div>
      </section>
    `;
  }
}