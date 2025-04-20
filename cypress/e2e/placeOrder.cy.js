import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';
import LoginPage from '../pages/LoginPage';
import userData from '../fixtures/userData.json';

describe('Test Case (B): Place order with mul4ple products', () => {
    it('should add products to Cart', () => {
        LoginPage.navigate();
        LoginPage.login('hossam@example.com', 'Test@1234');
        
        cy.visit('/');
        // Add the first product to the cart
        ProductPage.searchProduct('Radiant Tee');
        ProductPage.addProductToCartFromList('Radiant Tee', 'M', 'Blue');
        
        // Verify the first product in the cart
        ProductPage.verifyAddToCartMessage('Radiant Tee');
        
        // Add the second product to the cart
        ProductPage.searchProduct('Breathe-Easy Tank');
        ProductPage.addProductToCartFromList('Breathe-Easy Tank', 'L', 'White');
        
        // Verify the second product in the cart
        ProductPage.verifyAddToCartMessage('Breathe-Easy Tank');

        cy.get('.showcart').click(); 
        cy.get('.action.viewcart', { timeout: 5000 })
          .should('be.visible')
          .click();
        
        // Verify the products are visible in the cart
        cy.contains('Radiant Tee').should('be.visible'); 
        cy.contains('Breathe-Easy Tank').should('be.visible'); 
        
        // Proceed to checkout
        cy.get('#top-cart-btn-checkout').click();
        
        // Step 1: Fill in the shipping details
        cy.get(checkOutPage.shippingFirstName).type('Hossam'); 
        cy.get(checkOutPage.shippingLastName).type('Bakr'); 
        cy.get(checkOutPage.shippingStreet).type('123 Test St'); 
        cy.get(checkOutPage.shippingCity).type('Test City'); 
        cy.get(checkOutPage.shippingRegion).select('California'); 
        cy.get(checkOutPage.shippingPostcode).type('12345'); 
        cy.get(checkOutPage.shippingCountry).select('US'); 
        cy.get(checkOutPage.shippingPhone).type('1234567890'); 
    
        // Click the next button to proceed
        cy.get(checkOutPage.nextButton).click();
    
        // Step 2: Fill in the email 
        cy.get(checkOutPage.emailInput).type('hossam@example.com'); 
        
        // Click the next button to proceed
        cy.get(checkOutPage.nextButton).click();
        
        // Step 3: Place the order
        cy.get(checkOutPage.placeOrderButton).click(); 
        
        // Step 4: Verify the order confirmation message
        cy.get(checkOutPage.orderSuccessMessage).should('be.visible'); 
      });
    });