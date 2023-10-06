const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      config.viewportWidth = 1280;
  config.viewportHeight = 720;
  

  return config;

  
    },
    "pageLoadTimeout": 120000
  },
});
