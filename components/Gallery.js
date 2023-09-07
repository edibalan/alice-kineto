"use strict";
export default class Gallery {
  constructor(data) {
    this.renderGallery = () => {
      let gallery = "";

      for(let i = 0; i < data["gallery-images"].length; i++) {
        gallery += `<img alt="Kinetotherapy clinic photo" class="gallery-image" src="https://edibalan.github.io/alice-kineto/assets/${data["gallery-images"][i]}" />`;
      };

      return gallery;
    };

    this.renderNavigation = () => {
      let navigation = "";
      
      for(let i = 0; i < 2; i++) {
        navigation += `
          <button class="button | fs-x-small fw-sm-bold" data-type="gallery-button"
            id="${data["gallery-nav-buttons"].id[i]}">${data["gallery-nav-buttons"].name[i]}</button>
        `;
      };

      return navigation;
    };
  }

  render() {
    return `
      <section class="gallery-section">
        <div class="container" id="gallery">
          <div class="section-title">
            <h1 class="fs-large fw-bold">Galerie</h1>
            <div class="title-underline"></div>
          </div>
          <div class="gallery-content | grid-element">  <!--  | grid-element -->
            ${this.renderGallery()}
          </div>
          <div class="gallery-nav | grid-element">
            ${this.renderNavigation()}
          </div>
        </div>
      </section>
    `;
  }
}
