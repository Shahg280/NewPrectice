const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
     require('cypress-mochawesome-reporter/plugin')(on)

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
    },
  },
  reporter:'cypress-mochawesome-reporter'
  // reporter: 'cypress-multi-reporters',
  // reporterOptions: {
  //   configFile: 'reporter-config.json'
  // }
});












/*const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});*/
