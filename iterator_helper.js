'use strict';

class Iterator extends Helper {

  // before/after hooks
  _before() {
    // remove if not used
  }

  _after() {
    // remove if not used
  }

  logConsole() {
    console.log(this.helpers['WebDriverIO'].browser);
  }

}

module.exports = Iterator;
