const {test, expect} = require('@playwright/test')

test('inner Iframe',async ({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/');
    
    const frame_3 = await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_3'})
    await frame_3.locator("input[name='mytext3']").fill('Welcome');

    // Nested frame
    const chilFrame = await frame_3.childFrames()
    chilFrame[0].locator('//*[@id="i9"]/div[3]/div').check();
    await page.waitForTimeout(4000);
    chilFrame[0].locator('//*[@id="i24"]/div[2]').click();

    await page.waitForTimeout(4000);


})