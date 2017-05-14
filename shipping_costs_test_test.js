
Feature('Shipping costs_test');

/*
Presentatie:
aangeven dat het slimmer kan: duplicate code ontwijken (POM)
toch uitgewerkt in 2 testgevallen (dus duplicate code).
Ik had er ook 1 flow van kunnen maken:
- Kies 2 artikelen van samen > 20,-
- check $ verzendkosten (dus gratis)
- haal 1 artikel weg (totaal bedrag onder 20,-)
- check verzendkosten (1,99)

Aanpak:
Testsoort: Grenswaarde analyse
Grenswaarde analyse hoort niet bij de UI - test.
Deze userstory geeft bij de grenswaarde analyse 3 testgevallen:

| bedrag | Verzendkosten  |
|  19,99 |  1,99          |
|  20,00 |  gratis        |
|  20,01 |  gratis        |

-------------------------------------------------------------------
Testsoort: Functionele UI Test
Deze kan toegepast worden op de functione regressie test en
hierbij worden 2 functionele testgevallen onderkend:
1. Zijn voor een gebruiker, bij een bestelling van >= 20,00 , de verzendkosten gratis
2. Worden er voor een gebruiker, bij een bestelling van < 20,00 , de verzendkosten berekend

2 testgevallen:
| bedrag | Verzendkosten |
|  25,98 |  gratis       |
|  12,99 |  1,99         |

waar ik nog geen antwoord op heb:
een pop-up modal die zo nu en dan wordt geactiveerd.
In een testomgeving wil ik deze kunnen 'disabelen'.
*/

Scenario('TG1 - shipping costs > 20,--', (I) => {
  // Screensettings
  I.resizeWindow(1220,1024);

  // Page
  I.amOnPage('/');

  // Search for 'baadolie'
  I.waitForElement('#searchfor');
  I.click('#searchfor');
  I.fillField('#searchfor', 'baardolie');
  I.click('/html/body/div[1]/header/div[2]/div/div[3]/form/div/div[3]/input[1]'); //search_button

  // Inside Search Results
  I.waitForElement('//*[@id="js_items_content"]/li[1]/div[2]/div[2]/div[5]/div/div[1]/a'); //first item search_result
  I.saveScreenshot('TG1_search_result.png');
  I.click('//*[@id="js_items_content"]/li[1]/div[2]/div[2]/div[5]/div/div[1]/a'); //first item to shopping cart
  // Modal order has been added to shopping cart
  I.waitForElement('/html/body/div[3]/div[2]/div[3]/div[2]/div[1]/div/a',30); // knop 'verder winkelen'
  I.saveScreenshot('TG1_continue_shopping.png')
  I.click('/html/body/div[3]/div[2]/div[3]/div[2]/div[1]/div/a'); // knop 'continue shopping'

  // Back on Resultpage
  I.waitForElement('//*[@id="basket"]/div/div'); // knop winkelwagen
  I.saveScreenshot('TG1_button_shopping_cart.png');

  I.waitForElement('//*[@id="js_items_content"]/li[2]/div[2]/div[2]/div[5]/div/div[1]/a');
  //alleen deze regel wijkt af van TG1
  I.click('//*[@id="js_items_content"]/li[2]/div[2]/div[2]/div[5]/div/div[1]/a'); //first item to shopping cart

  I.waitForElement('//*[@id="basket"]/div/div',30); //knop winkelwagen
  pause();
  I.click('/html/body/div[3]/div[2]/div[3]/div[2]/div[2]/a'); //knop winkelwagen

  // Shopping_cart
  I.waitForElement('#tst_shipping_costs',20);
  I.saveScreenshot('TG1_shopping_cart_gratis.png');
  I.see('Gratis');
});



Scenario('TG2_shipping costs < 20,--', (I) => {
  // Screensettings
  I.resizeWindow(1220,1024);

  // Page
  I.amOnPage('/');

  // Search for 'baadolie'
  I.waitForElement('#searchfor');
  I.click('#searchfor');
  I.fillField('#searchfor', 'baardolie');
  I.click('/html/body/div[1]/header/div[2]/div/div[3]/form/div/div[3]/input[1]'); //search_button

  // Inside Search Results
  I.waitForElement('//*[@id="js_items_content"]/li[1]/div[2]/div[2]/div[5]/div/div[1]/a'); //first item search_result
  I.saveScreenshot('TG2_search_result.png');
  I.click('//*[@id="js_items_content"]/li[1]/div[2]/div[2]/div[5]/div/div[1]/a'); //first item to shopping cart

  // Modal order has been added to shopping cart
  I.waitForElement('/html/body/div[3]/div[2]/div[3]/div[2]/div[1]/div/a',30); // knop 'verder winkelen'
  I.saveScreenshot('TG2_continue_shopping.png')
  I.click('/html/body/div[3]/div[2]/div[3]/div[2]/div[1]/div/a'); // knop 'continue shopping'

  // Back on Resultpage
  I.waitForElement('//*[@id="basket"]/div/div'); // knop winkelwagen
  I.saveScreenshot('TG2_button_shopping_cart.png');
  I.click('//*[@id="basket"]/div/div'); //knop winkelwagen

  // Shopping_cart
  I.waitForElement('#tst_shipping_costs',20);
  I.saveScreenshot('TG2_shopping_cart_below_20.png');
  I.see('1,99');
});
