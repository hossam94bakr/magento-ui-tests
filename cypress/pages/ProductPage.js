// cypress/pages/ProductPage.js

import locators from '../Locators/LocatorsPage';

class ProductPage {
  static searchProduct(productName) {
    cy.get(locators.productPage.searchInput).clear().type(`${productName}{enter}`);
  }

  static addProductToCartFromList(productName, size, color) {
    cy.contains(locators.productPage.productItemContainer, productName)
      .scrollIntoView()
      .trigger('mouseover')
      .within(() => {
        cy.get(locators.productPage.sizeOption)
          .contains(size)
          .click({ force: true });

        cy.get(locators.productPage.colorOption).each(($el) => {
          const colorLabel = $el.attr('option-label')?.trim().toLowerCase();
          if (colorLabel === color.toLowerCase()) {
            cy.wrap($el).click({ force: true });
          }
        });

        cy.get(locators.productPage.addToCartButton).click({ force: true });
      });
  }

  static verifyAddToCartMessage(productName) {
    cy.get(locators.productPage.successMessage)
      .should('be.visible')
      .and('contain.text', `You added ${productName} to your shopping cart`);
  }
}

export default ProductPage;
