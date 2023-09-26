"use strict";
import { QS } from "https://edibalan.github.io/alice-kineto/app.js";
import Prices from "https://edibalan.github.io/alice-kineto/components/Prices.js";

export default class PricesHandler extends Prices {
  constructor(data) {
    super(data);

    this.pricesButton = QS(".prices-button");
    this.pricesList = QS(".prices-services-list");

    this.extendPricesList = event => {
      const button = event.target;

      button.innerText = "Mai putin";

      this.pricesList.innerHTML = this.renderPricesList(data["prices-services"].length);

      button.removeEventListener("click", this.extendPricesList);
      button.addEventListener("click", this.hidePricesList);
    };

    this.hidePricesList = event => {
      const button = event.target;

      button.innerText = "Mai mult";

      if (screen.width < 460) { this.pricesList.innerHTML = this.renderPricesList(4) }
      else if (screen.width >= 460 && screen.width < 600) { this.pricesList.innerHTML = this.renderPricesList(5) }
      else if (screen.width >= 600 && screen.width < 712) { this.pricesList.innerHTML = this.renderPricesList(6) }
      else if (screen.width >= 712 && screen.width < 912) { this.pricesList.innerHTML = this.renderPricesList(7) }
      else if (screen.width >= 912 && screen.width < 1440) { this.pricesList.innerHTML = this.renderPricesList(8) }
      else if (screen.width >= 1440 && screen.width < 1600) { this.pricesList.innerHTML = this.renderPricesList(9) }
      else { this.pricesList.innerHTML = this.renderPricesList(10) }

      button.removeEventListener("click", this.hidePricesList);
      button.addEventListener("click", this.extendPricesList);
    };
  }

  initiateHandler() { this.pricesButton.addEventListener("click", this.extendPricesList) }
}
