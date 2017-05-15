exports.config = {
  "tests": "./*_test.js",
  "timeout": 10000,
  "output": "./output",
  "helpers": {
    "WebDriverIO": {
      // load variables from the environment and provide defaults
      "url": "https://www.bol.com",
      "browser": "chrome",
      //"browser" : process.profile || "phantomjs",
      "restart" : "false"
    },
    "iterator": {
      "require": "./iterator_helper.js"
    }
  },
  "include": {
    "I": "./steps_file.js",
    "globals": "./globals.js"
  },
  "bootstrap": false,
  "mocha": {},
  "name": "production"
}
