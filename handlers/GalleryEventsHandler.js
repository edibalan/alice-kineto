"use strict";
import { QS, QSAll } from "../app.js";
import Gallery from "../components/Gallery.js";

export default class GalleryEventsHandler extends Gallery {
  constructor() {
    super();

    this.galleryContent = QS(".gallery-content");
    this.galleryImages = QSAll(".gallery-image");
    this.galleryNavigation = QSAll("#backward-button, #forward-button");
    this.screenWidth = screen.width;

    this.jumpToNextImage = () => this.galleryContent.scrollLeft += this.galleryContent.clientWidth;
    this.jumpToPreviousImage = () => this.galleryContent.scrollLeft -= this.galleryContent.clientWidth;

    this.zoomIn = event => {
      const elem = event.target;

      this.galleryContent.style.overflowX = "hidden";
      
      elem.classList.add("zoom");
      elem.style.height = `${this.galleryContent.clientHeight}px`;
      elem.style.width = `${this.galleryContent.clientWidth}px`;

      elem.removeEventListener("click", this.zoomIn);
      elem.addEventListener("click", this.zoomOut);
    };

    this.zoomOut = event => {
      const elem = event.target;

      this.screenWidth < 912
        ? this.galleryContent.style.overflowX = "scroll"
        : this.galleryContent.style.overflowX = "hidden";
      
      elem.classList.remove("zoom");
      elem.style.height = "auto";
      elem.style.width = "auto";

      elem.removeEventListener("click", this.zoomOut);
      elem.addEventListener("click", this.zoomIn);
    };
  }

  initiateHandler() {
    if (this.screenWidth < 460) {
      this.galleryNavigation[0].addEventListener("click", this.jumpToPreviousImage);
      this.galleryNavigation[1].addEventListener("click", this.jumpToNextImage);
    } else {
      this.galleryImages.forEach(image => image.addEventListener("click", this.zoomIn));
    }
  }
}