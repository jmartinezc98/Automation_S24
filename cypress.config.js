const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1366,
  viewportHeight: 768,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Reporter Super 24 Automation',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  retries: 1,
  defaultCommandTimeout: 10000, // Incrementa el tiempo de espera por comando
  pageLoadTimeout: 60000, // Incrementa el tiempo de espera de carga de página
  numTestsKeptInMemory: 0, // Reduce el número de pruebas mantenidas en memoria
  experimentalMemoryManagement: true, // Habilita el manejo experimental de memoria
  fixturesFolder: 'cypress/fixtures',
  supportFolder: 'cypress/support',

  e2e: {
      "baseUrl": "https://stg.super24.com.gt/on/demandware.store/Sites-super24-Site",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },
});
