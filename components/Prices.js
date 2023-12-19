"use strict";
export default class Prices {
  constructor(data) {
    this.renderTableBody = length => {
      const width = screen.width;
      let pricesTable = "";

      for (let i = 0; i < length; i++) {
        pricesTable += `
          <tr>
            <td class="prices__services">
              ${width >= 460 ? i + 1 + ". " + data.prices.services[i] : data.prices.services[i]}
            </td>
            <td class="prices__times">
              ${width >= 460 ? data.prices.times[i] + " minute" : data.prices.times[i]}
            </td>
            <td class="prices__costs">
              ${width >= 460 ? data.prices.costs[i] + " ron" : data.prices.costs[i]}
            </td>
          </tr>
        `;
      }

      return pricesTable;
    };
  }

  render() {
    return `
      <article class="prices | container" id="prices">
        <h2 class="prices__title">Preturi</h2>

        <table class="prices__table" border="1">
          <colgroup>
            <col>
          </colgroup>
          
          <thead>
            <tr>
              <th class="prices__table__header">Serviciu</th>
              <th id="time">Timp</th>
              <th id="price">Pret</th>
            </tr>
          </thead>
          
          <tbody class="prices__table__body">
            ${this.renderTableBody(3)}
          </tbody>
        </table>

        <button class="prices__button">Mai mult</button>
      </article>
    `;
  }
}
