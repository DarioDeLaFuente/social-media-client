const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    TEST_EMAIL: "Da@noroff.no",
    TEST_PASSWORD: "testPass",
  },
});
