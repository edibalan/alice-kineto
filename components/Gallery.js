"use strict";
export default class Gallery {
  constructor(data) {
    this.renderGallery = () => {
      let gallery = "";

      for (let i = 0; i < data.gallery.images.length; i++) {
        gallery += `<img alt="Kinetotherapy clinic photo" class="gallery__content__img" src="https://edibalan.github.io/alice-kineto/assets/${data.gallery.images[i]}">`;
      }

      return gallery;
    };

    this.renderNavigation = () => {
      let navigation = "";

      for (let i = 0; i < 2; i++) {
        navigation += `
          <button class="gallery__nav__button" id="${data.gallery.buttons.id[i]}">
            ${data.gallery.buttons.name[i]}
          </button>
        `;
      }

      return navigation;
    };
  }

  render() {
    return `
      <article class="gallery" id="gallery">
        <section class="gallery__container | container">
          <h2 class="gallery__title">Galerie</h2>

          <div class="gallery__content | grid-element">
            ${this.renderGallery()}
          </div>

          <div class="gallery__nav | grid-element">
            ${this.renderNavigation()}
          </div>
        </section>
      </article>
    `;
  }
}
