import SearchPage from "../pages/SearchPage";

describe('Test Case D: Search Validation', () => {
    it('should search for a product and validate the results', () => {
        const searchTerm = 'Radiant Tee';

        // Step 1: search for a product
        cy.visit('/');
        SearchPage.searchForProduct(searchTerm);

        // Step 2: Validate that the search results contain the search term
        SearchPage.verifySearchResults(searchTerm);
    });
});