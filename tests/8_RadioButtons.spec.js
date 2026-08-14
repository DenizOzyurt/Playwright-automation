const{test,expect} = require('@playwright/test')

test('Handle check box', async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    // Radio button
    await page.locator('//input[@id="male"]').check(); // male selected
    await page.waitForTimeout(3000)    
    //await page.check('//input[@id="male"]');

    await expect( await page.locator('//input[@id="male"]')).toBeChecked();
    await expect( await page.locator('//input[@id="male"]').isChecked()).toBeTruthy();

    await expect( await page.locator('//input[@id="female"]').isChecked()).toBeFalsy();    
    //pausing code for 3 seconds
    await page.waitForTimeout(3000)


})