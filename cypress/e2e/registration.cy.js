import { generateDynamicEmail } from '../support/utils';
import RegistrationPage from '../pages/RegistrationPage';
import LoginPage from '../pages/LoginPage';
import Header from '../pages/Header';

describe('Test Case A: Registration Flow + Login Validation', () => {
  let userData;

  beforeEach(() => {
    cy.fixture('user').then((user) => {
      // Generate dynamic email and assign to user object
      const dynamicEmail = generateDynamicEmail();
      user.email = dynamicEmail;
      userData = user;
    });
  });

  it('should register a new user and validate login', () => {
    // Step 1: Open the home page and go to the registration page
    RegistrationPage.openHomePage();
    RegistrationPage.clickCreateAccount();

    // Step 2: Fill in the form with updated user data
    RegistrationPage.fillForm(userData);
    RegistrationPage.submit();

    cy.url().should('include', '/customer/account/');
    Header.verifyAccountCreated();

    // Step 3: Log out
    Header.clickLogout();
    cy.url().should('include', '/customer/account/logout');

    // Step 4: Login with same credentials
    LoginPage.navigate();
    LoginPage.login(userData.email, userData.password);

    // Step 5: Verify successful login
    cy.url().should('include', '/customer/account/');
    Header.verifyLogin();
  });
});
