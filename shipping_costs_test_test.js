/* jshint esversion: 6 */

// Scenario's
// | bedrag | verzendkosten |
// |  25,98 |  gratis       |
// |  12,99 |  1,99         |
//

Feature('Shipping costs_test');

Scenario('TG1 - shipping costs > 20,--', (I, objects) => {
  I.resizeWindow(1220, 1024);

  // Page
  I.amOnPage('/');

  // Set Cookie to avoid popping up modal
  I.setCookie({name: 'se-popup', value: '1'});

  // Search for 'baardolie'
  I.waitForElement(objects.search_input_field, 30);
  I.click(objects.search_input_field);
  I.fillField(objects.search_input_field, 'baardolie');
  I.pressKey('Enter');

  // Inside Search Results
  I.waitForElement(objects.search_result_first_row, 60);
  I.click(objects.search_result_first_row);

  // Modal order has been added to shopping cart
  I.waitForElement(objects.button_continue_shopping, 60);
  I.click(objects.button_continue_shopping);

  // Back on Resultpage
  // alleen dit blok wijkt af van TG2
  I.wait(1); // <-- niet netjes. zonder deze 'wait' van 1 sec knalt de volgende regel er vaak uit.
  I.waitForElement(objects.search_result_second_row, 50);
  I.click(objects.search_result_second_row);

  // To the shopping cart
  I.waitForElement(objects.order_link, 30);
  I.click(objects.order_link);

  // Last step: checking outcome testcase
  I.waitForElement('#tst_shipping_costs', 20);
  I.see('Gratis');
});
Scenario('TG2_shipping costs < 20,--', (I, objects) => {
  I.resizeWindow(1220, 1024);

  // Page
  I.amOnPage('/');

  // Set Cookie
  I.setCookie({name: 'se-popup', value: '1'});

  // Search for 'baardolie'
  I.waitForElement(objects.search_input_field, 60);
  I.click(objects.search_input_field);
  I.fillField(objects.search_input_field, 'baardolie');
  I.pressKey('Enter');

  // Inside Search Results
  I.waitForElement(objects.search_result_first_row, 60);
  I.click(objects.search_result_first_row);

  // To the shopping cart
  I.waitForElement(objects.order_link, 60);
  I.click(objects.order_link);

  // Last step: checking outcome testcase
  I.waitForElement('#tst_shipping_costs', 60);
  I.see('1,99');
});
