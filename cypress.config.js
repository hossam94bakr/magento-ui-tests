const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

module.exports = {
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com', // The URL of the site we are testing
    supportFile: 'cypress/support/e2e.js', 
    specPattern: 'cypress/e2e/**/*.cy.js', 
    video: false, // Disable video recording if not needed
    reporter: 'mochawesome', // Setup Mochawesome for test reports
    reporterOptions: {
      reportDir: 'test-reports', // Store reports in the test-reports folder
      overwrite: false, // Don't overwrite previous reports
      html: true, // Generate HTML reports
      json: true, // Generate JSON reports for further analysis
    },
  },
};

