const{test, expect} = require('@playwright/test')

test("Handle input box", async ({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    await expect(await page.locator('//input[@id="name"]')).toBeVisible();
    await expect(await page.locator('//input[@id="name"]')).toBeEmpty(); 
    await expect(await page.locator('//input[@id="name"]')).toBeEditable();
    await expect(await page.locator('//input[@id="name"]')).toBeEnabled();
    //handle inputbox - firstname
    //await page.locator('//input[@id="name"]').fill("John");
    await page.fill('//input[@id="name"]',"John");   
    
    await page.waitForTimeout(3000)  //pausing
})