'use strict';

const WebDriverIO = {};
WebDriverIO.url = 'https://www.bol.com';
WebDriverIO.browser = 'chrome';


if (process.env.TRAVIS) {
  const caps = {};
  caps.url = 'https://www.bol.com';
  caps.browserName = 'chrome';
  caps.version = '59.0';
  caps.platform = "macOS 10.12";
  caps['screenResolution'] = '1920x1440';
  caps['tunnel-identifier'] = process.env.TRAVIS_JOB_NUMBER;
  caps.name = 'acceptance';
  caps.build = process.env.TRAVIS_BUILD_NUMBER;

  WebDriverIO.host = 'ondemand.saucelabs.com';
  WebDriverIO.port = 80;
  WebDriverIO.user = process.env.SAUCE_USERNAME;
  WebDriverIO.key = process.env.SAUCE_ACCESS_KEY;
  WebDriverIO.desiredCapabilities = caps;
}

exports.config = {
  tests: './*_test.js',
  timeout: 10000,
  output: './output',
  helpers: {
    WebDriverIO,
  },
  include: {
    I : './steps_file.js',
    objects : './objects.js'
  },
  bootstrap: false,
  mocha: {},
  name: 'production'
}