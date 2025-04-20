// cypress/locators/locatorsPage.js

const locators = {
    loginPage: {
      emailInput: 'input[name="login[username]"]',
      passwordInput: 'input[name="login[password]"]',
      loginButton: 'button.action.login.primary',
    },
    productPage: {
      searchInput: 'input[name="q"]',
      productItemContainer: '.product-item-info',
      sizeOption: '.swatch-attribute.size .swatch-option',
      colorOption: '.swatch-attribute.color .swatch-option',
      addToCartButton: 'button[title="Add to Cart"]',
      successMessage: '.message-success',
    },
    cartPage: {
      miniCartIcon: '.showcart',
      viewEditCartLink: 'View and Edit Cart',
      grandTotalPrice: '.grand.total .price',
      proceedToCheckoutBtn: '.checkout.methods-items button',
    },
    header: {
      registrationSuccessMsg: 'div[data-bind*="prepareMessageForHtml"]',
      headerLinks: '.header.links',
      userMenuToggle: 'div.panel.header button[type="button"]',
      signOutLink: '.header.links .authorization-link a',
    },
    registerPage: {
      createAccountLinkXPath: "//div[@class='panel header']//a[normalize-space()='Create an Account']",
      firstNameInput: '#firstname',
      lastNameInput: '#lastname',
      emailInput: '#email_address',
      passwordInput: '#password',
      confirmPasswordInput: '#password-confirmation',
      createAccountButton: 'button[title="Create an Account"]',
    },
    searchPage: {
        searchInput: '#search',
        productItemLinks: '.product-item-link',
      },
      wishlistPage: {
        productItem: '.product-item-info',
        sizeOptions: '.swatch-attribute.size .swatch-option',
        colorOptions: '.swatch-attribute.color .swatch-option',
        addToWishlistButton: 'a.action.towishlist',
        successMessage: 'div[data-bind*="html: $parent.prepareMessageForHtml"]',
      },    

      checkOutPage: {
        // Checkout Page Locators
        emailInput: 'input[name="username"]',
        shippingFirstName: '[name="firstname"]',
        shippingLastName: '[name="lastname"]',
        shippingStreet: '[name="street[0]"]',
        shippingCity: '[name="city"]',
        shippingRegion: '[name="region_id"]',
        shippingPostcode: '[name="postcode"]',
        shippingCountry: '[name="country_id"]',
        shippingPhone: '[name="telephone"]',
        nextButton: 'button.continue',
        placeOrderButton: 'button[title="Place Order"]',
        orderSuccessMessage: '.checkout-success',
      },
      
  };
  
  export default locators;
  