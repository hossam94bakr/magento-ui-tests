// cypress/pages/LoginPage.js

import locators from '../Locators/LocatorsPage';

class LoginPage {
  static navigate() {
    cy.visit('/customer/account/login');
  }

  static login(email, password) {
    cy.get(locators.loginPage.emailInput).type(email);
    cy.get(locators.loginPage.passwordInput).type(password);
    cy.get(locators.loginPage.loginButton).click();
  }
}

export default LoginPage;
