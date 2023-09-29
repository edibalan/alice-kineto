"use strict";
import { QS, QSAll } from "https://edibalan.github.io/alice-kineto/app.js";
import Gallery from "https://edibalan.github.io/alice-kineto/components/Gallery.js";
export default class GalleryHandler extends Gallery {
  constructor() {
    super();
    this.galleryContent = QS(".gallery-content");
    this.galleryImages = QSAll(".gallery-image");
    this.galleryNavigation = QSAll("#backward-button, #forward-button");

    this.toNextImage = () => this.galleryContent.scrollLeft += this.galleryContent.clientWidth;
    this.toPreviousImage = () => this.galleryContent.scrollLeft -= this.galleryContent.clientWidth;

    this.zoomIn = event => {
      const elem = event.target;
      
      elem.classList.add("zoom");
      elem.style.height = `${this.galleryContent.clientHeight + 1}px`;
      elem.style.width = `${this.galleryContent.clientWidth + 1}px`;

      this.galleryContent.style.overflowX = "hidden";

      elem.removeEventListener("click", this.zoomIn);
      elem.addEventListener("click", this.zoomOut);
    };

    this.zoomOut = event => {
      const elem = event.target;
      
      elem.classList.remove("zoom");
      elem.style.height = "auto";
      elem.style.width = "auto";

      this.scrollbarHandler();

      elem.removeEventListener("click", this.zoomOut);
      elem.addEventListener("click", this.zoomIn);
    };

    this.navigationHandler = () => {
      if (window.innerWidth < 460) {
        this.galleryNavigation[0].addEventListener("click", this.toPreviousImage);
        this.galleryNavigation[1].addEventListener("click", this.toNextImage);
        this.galleryImages.forEach(image => image.removeEventListener("click", this.zoomIn));
      } else {
        this.galleryNavigation[0].removeEventListener("click", this.toPreviousImage);
        this.galleryNavigation[1].removeEventListener("click", this.toNextImage);
        this.galleryImages.forEach(image => image.addEventListener("click", this.zoomIn));
      };
    };

    this.scrollbarHandler = () => {
      window.innerWidth >= 460 && window.innerWidth < 800
        ? this.galleryContent.style.overflowX = "scroll"
        : this.galleryContent.style.overflowX = "hidden";
    };
  }

  initiate() {
    window.addEventListener("resize", this.navigationHandler);
    window.addEventListener("resize", this.scrollbarHandler);
    
    this.navigationHandler();
    this.scrollbarHandler();
  }
}
