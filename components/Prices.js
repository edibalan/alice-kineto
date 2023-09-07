"use strict";
export default class Prices {
  constructor(data) {
    this.renderPricesList = length => {
      let pricesList = "";

      for(let i = 0; i < length; i++) {
        pricesList += `
          <tr>
            <td class="prices-services">
              ${screen.width >= 460 ? [i + 1] + ". " + data["prices-services"][i] : data["prices-services"][i]}
            </td>
            <td class="prices-times">
              ${screen.width >= 460 ? data["prices-times"][i] + " minute" : data["prices-times"][i]}
            </td>
            <td class="prices-costs">
              ${screen.width >= 460 ? data["prices-costs"][i] + " ron" : data["prices-costs"][i]}
            </td>
          </tr>
        `;
      };
      
      return pricesList;
    };

    this.renderPricesListHandler = () => {
      if (screen.width === 1024 || (screen.width >= 1440 && screen.width < 1600)) { return this.renderPricesList(9) }

      if (screen.width < 460) { return this.renderPricesList(4) } 
      else if (screen.width >= 460 && screen.width < 600) { return this.renderPricesList(5) }
      else if (screen.width >= 600 && screen.width < 712) { return this.renderPricesList(6) }
      else if (screen.width >= 712 && screen.width < 912) { return this.renderPricesList(7) }
      else if (screen.width >= 912 && screen.width < 1440) { return this.renderPricesList(8) }
      else if (screen.width >= 1440 && screen.width < 1600) { return this.renderPricesList(9) }
      else { return this.renderPricesList(10) }
    };
  }
  
  render() {
    return `
      <section class="prices-section">
        <div class="container | text-center" id="prices">
          <div class="section-title">
            <h1 class="fs-large fw-bold">Preturi</h1>
            <div class="title-underline"></div>
          </div>
          <table class="prices-list" border="1">
            <colgroup>
              <col>
            </colgroup>
            
            <thead>
              <tr class="fw-bold">
                <th class="prices-header">Serviciu</th>
                <th>Timp ${screen.width < 460 ? "(mnt.)" : ""}</th>
                <th>Pret ${screen.width < 460 ? "(RON)" : ""}</th>
              </tr>
            </thead>
            
            <tbody class="prices-services-list">${this.renderPricesListHandler()}</tbody>
          </table>
          <button class="prices-button | button fs-small fw-sm-bold" data-type="prices-button">Mai mult</button>
        </div>
      </section>
    `;
  }
}