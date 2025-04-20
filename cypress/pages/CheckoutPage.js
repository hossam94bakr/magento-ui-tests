import locators from '../Locators/LocatorsPage';

class CheckoutPage {
  static fillShippingDetails(shippingData) {
    cy.get(locators.emailInput).type(shippingData.email);
    cy.get(locators.shippingFirstName).type(shippingData.firstName);
    cy.get(locators.shippingLastName).type(shippingData.lastName);
    cy.get(locators.shippingStreet).type(shippingData.street);
    cy.get(locators.shippingCity).type(shippingData.city);
    cy.get(locators.shippingPostcode).type(shippingData.postcode);
    cy.get(locators.shippingPhone).type(shippingData.phone);
    cy.get(locators.shippingCountryDropdown).select(shippingData.country);
    cy.get(locators.shippingRegionDropdown).select(shippingData.region);
  }

  static selectShippingMethod() {
    // Adjust the selector to your actual shipping method element
    cy.get('input[name="ko_unique_1"]').check({ force: true });
  }

  static placeOrder() {
    cy.get(locators.placeOrderButton).click();
  }

}

export default CheckoutPage;

