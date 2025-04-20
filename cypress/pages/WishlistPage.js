// cypress/pages/WishlistPage.js

import locators from '../Locators/LocatorsPage';

class WishlistPage {
  static addProductToWishlistFromList(productName, size, color) {
    cy.contains(locators.wishlistPage.productItem, productName)
      .scrollIntoView()
      .trigger('mouseover')
      .within(() => {
        cy.get(locators.wishlistPage.sizeOptions)
          .contains(size)
          .click({ force: true });

        cy.get(locators.wishlistPage.colorOptions).each(($el) => {
          const colorLabel = $el.attr('option-label')?.trim().toLowerCase();
          if (colorLabel === color.toLowerCase()) {
            cy.wrap($el).click({ force: true });
          }
        });

        cy.get(locators.wishlistPage.addToWishlistButton).click({ force: true });
      });
  }

  static verifyProductInWishlist(productName) {
    cy.get(locators.wishlistPage.successMessage)
      .should('be.visible')
      .and('contain', `${productName} has been added to your Wish List`);
  }
}

export default WishlistPage;
