import {test, expect} from '@playwright/test'

test.skip('Auto suggest dropdown', async({page}) =>{
  // test temporairement désactivé :
  // le site redbus.in bloque l'automatisation
    await page.goto('https://www.redbus.in/');

    const AutoDrop = await page.locator('#srcinput');
    await AutoDrop.fill('Delhi');

    //    AutoDrop.fill('Delhi');
    /*console.log(AutoDrop.textContent());

    console.log(await page.locator('(//div[@class="inputWrapper___57ce4e"])[1]').textContent());

    await page.waitForTimeout(2000);
    AutoDrop.click();
    console.log(AutoDrop.textContent());
    */



})