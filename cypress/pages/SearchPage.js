// cypress/pages/SearchPage.js

import locators from '../Locators/LocatorsPage';

class SearchPage {
  searchForProduct(productName) {
    cy.get(locators.searchPage.searchInput).type(`${productName}{enter}`);
  }

  verifySearchResults(productName) {
    cy.get(locators.searchPage.productItemLinks)
      .should('exist')
      .then(($items) => {
        const matched = [...$items].some((el) =>
          el.innerText.trim().includes(productName)
        );
        expect(matched, `Search results should include "${productName}"`).to.be.true;
      });
  }
}

export default new SearchPage();
