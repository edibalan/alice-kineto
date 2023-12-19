"use strict";
import { QS, QSAll } from "https://edibalan.github.io/alice-kineto/app.js";
import Gallery from "https://edibalan.github.io/alice-kineto/components/Gallery.js";
export default class GalleryHandler extends Gallery {
  constructor() {
    super();

    this.backwardButton = QS("#backward-button");
    this.forwardButton = QS("#forward-button");
    this.content = QS(".gallery__content");
    this.images = QSAll(".gallery__content__img");

    this.toNextImage = () => this.content.scrollLeft += this.content.clientWidth;
    this.toPreviousImage = () => this.content.scrollLeft -= this.content.clientWidth;

    this.zoomIn = event => {
      const elem = event.target;

      elem.classList.add("zoomed");
      elem.style.height = `${this.content.clientHeight + 1}px`;
      elem.style.width = `${this.content.clientWidth + 1}px`;

      this.content.style.overflowX = "hidden";

      elem.removeEventListener("click", this.zoomIn);
      elem.addEventListener("click", this.zoomOut);
    };

    this.zoomOut = event => {
      const elem = event.target;

      elem.classList.remove("zoomed");
      elem.style.height = "auto";
      elem.style.width = "auto";

      this.scrollbarHandler();

      elem.removeEventListener("click", this.zoomOut);
      elem.addEventListener("click", this.zoomIn);
    };

    this.navigationHandler = () => {
      if (window.innerWidth < 460) {
        this.backwardButton.addEventListener("click", this.toPreviousImage);
        this.forwardButton.addEventListener("click", this.toNextImage);
        this.images.forEach(image => image.removeEventListener("click", this.zoomIn));
      }
       else {
        this.backwardButton.removeEventListener("click", this.toPreviousImage);
        this.forwardButton.removeEventListener("click", this.toNextImage);
        this.images.forEach(image => image.addEventListener("click", this.zoomIn));
      };
    };

    this.scrollbarHandler = () => {
      window.innerWidth < 460
        ? this.content.style.overflowX = "hidden"
        : this.content.style.overflowX = "scroll";
    }
  }

  initiate() {
    this.navigationHandler();
    this.scrollbarHandler();

    window.addEventListener("resize", this.navigationHandler);
    window.addEventListener("resize", this.scrollbarHandler);
  }
}
