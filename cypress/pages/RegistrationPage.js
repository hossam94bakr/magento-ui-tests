// cypress/pages/RegistrationPage.js

import locators from '../Locators/LocatorsPage';

class RegisterPage {
  openHomePage() {
    cy.visit('/');
  }

  clickCreateAccount() {
    cy.xpath(locators.registerPage.createAccountLinkXPath, { timeout: 10000 }).click();
  }

  fillForm(user) {
    cy.get(locators.registerPage.firstNameInput).type(user.firstName);
    cy.get(locators.registerPage.lastNameInput).type(user.lastName);
    cy.get(locators.registerPage.emailInput).type(user.email);
    cy.get(locators.registerPage.passwordInput).type(user.password);
    cy.get(locators.registerPage.confirmPasswordInput).type(user.password);
  }

  submit() {
    cy.get(locators.registerPage.createAccountButton).click();
  }
}

export default new RegisterPage();
