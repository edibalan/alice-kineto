"use strict";
export default class Home {
  constructor(data) {
    this.data = data;

    this.renderDescriptions = () => {
      const descriptions = data["home-descriptions"];
      let paragraphs = ["", ""];

      for (let i = 0; i < descriptions.length; i++) {
        for (let j = 0; j < descriptions[i].length; j++) {
          descriptions[i][j] !== " " && descriptions[i][j + 1] !== " "
            ? paragraphs[i] += descriptions[i][j].concat("&shy")
            : paragraphs[i] += descriptions[i][j];
        }
      }

      return `${paragraphs[0]}<br><br>${paragraphs[1]}`;
    };
  }

  render() {
    return `
      <article class="home">
        <div class="home__container | container grid-element">
          <img alt="Kinetotherapy picture" class="home__image" src="https://edibalan.github.io/alice-kineto/assets/${this.data.services.images[1]}">

          <section class="home__content">
            <h1 class="home__title">
              Bun venit !
            </h1>

            <p class="home__description">
              ${this.renderDescriptions()}
            </p>
            
            <a href="${this.data.menu.contact.links[1]}">
              <button class="home__button">Programare consultatie</button>
            </a>
          </section>
        </div>
      </article>
    `;
  }
}
