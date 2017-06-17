exports.config = {
  "tests": "./*_test.js",
  "timeout": 10000,
  "output": "./output",
  "helpers": {
    "WebDriverIO": {
      // load variables from the environment and provide defaults
      "user": "joel-grimberg",
      "key": "05bb5bca-6c41-4ca7-b1d8-0efecb1439c7",
      "url": "https://www.bol.com",
      "browser": "chrome",
      //  "browser" : process.profile || "phantomjs",
      "restart" : "false"
    },
    "iterator": {
      "require": "./iterator_helper.js"
    }
  },
  "include": {
    "I"                 : "./steps_file.js",
    "objects"           : "./objects.js"
  },
  "bootstrap": false,
  "mocha": {},
  "name": "production"
}
