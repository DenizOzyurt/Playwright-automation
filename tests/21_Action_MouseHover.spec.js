import {test, expect} from '@playwright/test'

test.skip('Mouse hover', async ({page})=>{
    await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2Fregister');
    const computers = await page.locator('//a[normalize-space()="Computers"]');

    const noteboks = await page.locator('//a[normalize-space()="Notebooks"]');

    // mouse hover

    await computers.hover();
    await page.waitForTimeout(3000);
    await noteboks.hover();
    await page.waitForTimeout(3000);    

})

test('Mouse hover 2', async ({page})=>{
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo/trigger-hover.html');
    const hoverButton = await page.locator('//span[normalize-space()="hover over me"]');
    // mouse hover

    await hoverButton.hover();
    await page.waitForTimeout(3000);
 

})