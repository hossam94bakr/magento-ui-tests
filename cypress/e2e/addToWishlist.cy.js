import ProductPage from '../Pages/ProductPage';
import WishlistPage from '../pages/WishlistPage';
import CartPage from '../pages/CartPage';
import LoginPage from '../pages/LoginPage';


describe('Test Case C: Add to Wishlist', () => {
    it('should add products to wishlist', () => {
        LoginPage.navigate();
        LoginPage.login('hossam@example.com', 'Test@1234');
        
        cy.visit('/');
        // Add the first product to the wishlist
        ProductPage.searchProduct('Radiant Tee');
        WishlistPage.addProductToWishlistFromList('Radiant Tee', 'M', 'Blue');
        
        // Verify the first product in the wishlist
        WishlistPage.verifyProductInWishlist('Radiant Tee');
        
        // Add the second product to the wishlist
        ProductPage.searchProduct('Breathe-Easy Tank');
        WishlistPage.addProductToWishlistFromList('Breathe-Easy Tank', 'L', 'White');
        
        // Verify the second product in the wishlist
        WishlistPage.verifyProductInWishlist('Breathe-Easy Tank');
      });
    });