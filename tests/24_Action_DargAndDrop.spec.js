const {test, expect} = require('@playwright/test')

test('Handle drag and drop ',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    
    // Drag and drop 
    const sourceEl = await page.locator('#draggable')
    const targetEl = await page.locator('#droppable')
    
    // Aproach 1
    /*await sourceEl.hover();
    await page.mouse.down();

    await targetEl.hover();
    await page.mouse.up();
    */

    // Approach 2
    
    await sourceEl.dragTo(targetEl);
    await page.waitForTimeout(4000)

    const textver = await page.locator('#droppable p').textContent();
    await expect(textver).toBe('Dropped!');

})