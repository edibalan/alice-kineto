"use strict";
import { QS } from "https://edibalan.github.io/alice-kineto/app.js";
import Prices from "https://edibalan.github.io/alice-kineto/components/Prices.js";
export default class PricesHandler extends Prices {
  constructor(data) {
    super(data);
    this.breakpoints = [359, 425, 539, 599, 710, 799, 1439, 9999];

    this.button = QS(".prices__button");
    this.table = QS(".prices__table");
    this.tableBody = QS(".prices__table__body");
    this.tableHeader = QS(".prices__table__header");
    
    this.time = QS("#time");
    this.price = QS("#price");

    this.extendTable = event => {
      const button = event.target;
      const tableRows = QS(".prices__table__body").children;

      button.innerText = "Mai putin";
      this.tableBody.innerHTML = this.renderTableBody(data.prices.services.length);

      setTimeout(() => {
        for (let i = 0; i < tableRows.length; i++) {
          tableRows[i].style.height = `${this.tableHeader.clientHeight}px`;
        };
      }, 10);
   
      button.removeEventListener("click", this.extendTable);
      button.addEventListener("click", this.shrinkTable);
    };

    this.shrinkTable = event => {
      const button = event.target;
      
      button.innerText = "Mai mult";
      this.tableBodyHandler();

      button.removeEventListener("click", this.shrinkTable);
      button.addEventListener("click", this.extendTable);
    };

    this.tableBodyHandler = () => {
      for (let i = 0; i <= this.breakpoints.length; i++) {
        if (window.innerWidth <= this.breakpoints[i]) {
          return this.tableBody.innerHTML = this.renderTableBody(i + 3);
        };
      }
    };

    this.tableHeaderHandler = () => {
      if (window.innerWidth < 460) {
        this.time.innerHTML = "TIMP<br>MIN";
        this.price.innerHTML = "PRET<br>RON"
      }
       else {
        this.time.innerHTML = "TIMP";
        this.price.innerHTML = "PRET";
      };
    };
  }

  initiate() {
    this.tableBodyHandler();
    this.tableHeaderHandler();

    this.button.addEventListener("click", this.extendTable);
    window.addEventListener("resize", this.tableBodyHandler);
    window.addEventListener("resize", this.tableHeaderHandler);
  }
}

