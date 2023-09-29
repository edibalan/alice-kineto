"use strict";
import { QS } from "https://edibalan.github.io/alice-kineto/app.js";
import Prices from "https://edibalan.github.io/alice-kineto/components/Prices.js";
export default class PricesHandler extends Prices {
  constructor(data) {
    super(data);
    this.price = QS("#price");
    this.pricesButton = QS(".prices-button");
    this.pricesList = QS(".prices-services-list");
    this.time = QS("#time");

    this.extendPricesList = event => {
      const button = event.target;
      button.innerText = "Mai putin";
     
      this.pricesList.innerHTML = this.renderPricesList(data["prices-services"].length);

      button.removeEventListener("click", this.extendPricesList);
      button.addEventListener("click", this.shrinkPricesList);
    };

    this.shrinkPricesList = event => {
      const button = event.target;
      button.innerText = "Mai mult";

      this.pricesListLengthHandler();

      button.removeEventListener("click", this.shrinkPricesList);
      button.addEventListener("click", this.extendPricesList);
    };

    this.pricesListLengthHandler = () => {
      const width = window.innerWidth;

      if (width < 460) this.pricesList.innerHTML = this.renderPricesList(4);
      else if (width >= 460 && width < 600) this.pricesList.innerHTML = this.renderPricesList(5);
      else if (width >= 600 && width < 712) this.pricesList.innerHTML = this.renderPricesList(6);
      else if (width >= 712 && width < 912) this.pricesList.innerHTML = this.renderPricesList(7);
      else if (width >= 912 && width < 1440) this.pricesList.innerHTML = this.renderPricesList(8);
      else if (width >= 1440 && width < 1600) this.pricesList.innerHTML = this.renderPricesList(9);
      else this.pricesList.innerHTML = this.renderPricesList(10);
    };

    this.pricesListTitlesHandler = () => {
      window.innerWidth < 460 ? this.time.innerHTML = "TIMP<br>MIN" : this.time.innerHTML = "TIMP";
      window.innerWidth < 460 ? this.price.innerHTML = "PRET<br>RON" : this.price.innerHTML = "PRET";
    };
  }

  initiate() {
    window.addEventListener("resize", this.pricesListLengthHandler);
    window.addEventListener("resize", this.pricesListTitlesHandler);
    this.pricesButton.addEventListener("click", this.extendPricesList);
    this.pricesListLengthHandler();
    this.pricesListTitlesHandler();
  }
}
