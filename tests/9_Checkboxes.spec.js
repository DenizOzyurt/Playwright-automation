const{test, expect} = require('@playwright/test')

test('handle checkboxes', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    // single checkboxes 
    //await page.locator('//input[@type ="checkbox" and @ id="monday"]').check();
    await page.check('//input[@type ="checkbox" and @ id="monday"]');

    expect(await page.locator('//input[@type ="checkbox" and @ id="monday"]')).toBeChecked();
    expect(await page.locator('//input[@type ="checkbox" and @ id="monday"]').isChecked()).toBeTruthy();

    expect(await page.locator('//input[@type ="checkbox" and @ id="sunday"]').isChecked()).toBeFalsy();    
    
    //Multible checkboxes 
    const checkboxesLoc = ['//input[@type ="checkbox" and @ id="monday"]',
                        '//input[@type ="checkbox" and @ id="tuesday"]',
                        '//input[@type ="checkbox" and @ id="saturday"]'
    ];

    for(const locator of checkboxesLoc){
     await page.locator(locator).check()   
    }
    //pausing code for 3 seconds
    await page.waitForTimeout(3000)

    // multible unchec boxes
    for(const locator of checkboxesLoc){
        if(expect(await page.locator(locator)).toBeChecked()) 
           {await page.locator(locator).uncheck();}
    }
    
    //pausing code for 3 seconds
    await page.waitForTimeout(3000)

})