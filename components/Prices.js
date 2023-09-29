"use strict";
export default class Prices {
  constructor(data) {
    this.renderPricesList = length => {
      let pricesList = "";

      for(let i = 0; i < length; i++) {
        pricesList += `
          <tr>
            <td class="prices-services">
              ${window.innerWidth >= 460 ? [i + 1] + ". " + data["prices-services"][i] : data["prices-services"][i]}
            </td>
            <td class="prices-times">
              ${window.innerWidth >= 460 ? data["prices-times"][i] + " minute" : data["prices-times"][i]}
            </td>
            <td class="prices-costs">
              ${window.innerWidth >= 460 ? data["prices-costs"][i] + " ron" : data["prices-costs"][i]}
            </td>
          </tr>
        `;
      };
      
      return pricesList;
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
                <th id="time">Timp</th>
                <th id="price">Pret</th>
              </tr>
            </thead>
            
            <tbody class="prices-services-list">${this.renderPricesList(4)}</tbody>
          </table>
          <button class="prices-button | button fs-small fw-sm-bold" data-type="prices-button">Mai mult</button>
        </div>
      </section>
    `;
  }
}
