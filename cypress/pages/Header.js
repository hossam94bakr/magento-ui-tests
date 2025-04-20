// cypress/pages/Header.js

import locators from '../Locators/LocatorsPage';

class Header {
  static verifyAccountCreated() {
    cy.get(locators.header.registrationSuccessMsg).should(
      'contain.text',
      'Thank you for registering with Main Website Store.'
    );
  }

  static verifyLogin() {}

  static clickLogout() {
    cy.get(locators.header.headerLinks).then($menu => {
      if ($menu.is(':hidden')) {
        cy.get(locators.header.userMenuToggle).click();
      }
    });

    cy.get(locators.header.headerLinks).should('be.visible');
    cy.get(locators.header.signOutLink).contains('Sign Out').click();
  }
}

export default Header;
