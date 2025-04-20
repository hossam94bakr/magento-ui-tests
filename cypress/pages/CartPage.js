// cypress/pages/CartPage.js

import locators from '../Locators/LocatorsPage';

class CartPage {

  gotoCart() {
    cy.get(locators.cartPage.miniCartIcon).click();
    cy.contains(locators.cartPage.viewEditCartLink).click();
  }

  verifyTotal(expectedTotal) {
    cy.get(locators.cartPage.grandTotalPrice)
      .invoke('text')
      .then((text) => {
        const total = parseFloat(text.replace('$', ''));
        expect(total).to.be.closeTo(expectedTotal, 1);
      });
  }

  proceedToCheckout() {
    cy.get(locators.cartPage.proceedToCheckoutBtn).click();
  }
}

export default new CartPage();
