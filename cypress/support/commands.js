import 'cypress-xpath';


Cypress.Commands.add('login', (email, password) => {
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
});
Cypress.Commands.add('addToCart', (productName) => {
    cy.get('.product-item-name').contains(productName).click();
    cy.get('#product-addtocart-button').click();
    cy.get('.message-success').should('contain', 'You added');
});
Cypress.Commands.add('checkout', () => {
    cy.get('.action.showcart').click();
    cy.get('.checkout').click();
    cy.get('#shipping-method-buttons-container .action.primary').click();
    cy.get('#payment-method-buttons-container .action.primary').click();
    cy.get('.checkout-shipping-method-load .action.primary').click();
});
Cypress.Commands.add('logout', () => {
    cy.get('.customer-welcome').click();
    cy.get('.action.logout').click();
});