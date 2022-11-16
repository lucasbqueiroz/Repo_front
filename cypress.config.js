const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'm3q12v',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
})