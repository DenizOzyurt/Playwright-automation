const {test, expect} = require('@playwright/test');

test('Handdle frames and iframes', async ({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/');

    //Total frames
     const allFrames= await page.frames();
     console.log("Number of frames : ",allFrames.length);

     // Approach1 : Using name the url of the frame
     // const frame1 = await page.frame('page') if name is present
    //const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1'});
    //await frame1.fill("//input[@name='mytext1']", 'Hello from playwright');

    // Approach 2 - using frame locater
    await page.frameLocator("frame[src='frame_1.html']").locator("//input[@name='mytext1']").fill('Playwright hello');
    await page.waitForTimeout(4000)


})