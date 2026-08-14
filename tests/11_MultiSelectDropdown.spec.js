const{test, expect} = require('@playwright/test')

test('Haddle multiseleck options', async ({page})=>{
     await page.goto('https://testautomationpractice.blogspot.com/');
    //Select multible options from multi select dropdown
    //await page.locator('#colors option').selectOption(['Red','Blue','White']);
    //await page.selectOption('#colors',['Red','Blue','White']);
    
    //0Assertions
    // 1) Check number of options in dropdown
    //const options = await page.locator('#colors option');
    //await expect(options).toHaveCount(7);

    //2) Check number of options in the dropdown 
    const options = await page.$$('#colors option');
    console.log("Number of options : ", options.length);
    await expect(options.length).toBe(7);

    // 3) Check presence of value in the dropdown
    const content = await page.locator('#colors').textContent();
    await expect(content.includes('Blue')).toBeTruthy();
    await expect(content.includes('Noir')).toBeFalsy();    




    
    await page.waitForTimeout(5000);

})