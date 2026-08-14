import {test, expect} from '@playwright/test'

test('Mouse double click' ,async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const buttonDoubleClick = await page.locator('//button[normalize-space()="Copy Text"]');

    // Double click action
    await buttonDoubleClick.dblclick();

    const btnText = await page.locator('#field2')

    await page.waitForTimeout(4000)
    console.log('Double click text : ', await btnText.textContent())
    await expect(btnText).toHaveValue('Hello World!')


})