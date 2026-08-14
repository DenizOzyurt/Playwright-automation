import {test,expect} from '@playwright/test'


test('Keybord actions',async({page})=>{
    await page.goto('https://gotranscript.com/text-compare');

    const text1 = await page.locator('//textarea[@name="text1"]');
    const text2 = await page.locator('//textarea[@name="text2"]');    
    
    await text1.fill('Welcome to automation')
    
    //Cntr A -Select the text
    await page.keyboard.press('Control+A');
    //Cntrl C - Copy the text
    await page.keyboard.press('Control+C');
    //Tab - for changer the focus 
    //await page.keyboard.down('Tab');
    //await page.keyboard.up('Tab');
    // or focus
    await text2.focus()    
    //Cntrl V - Paste the texte
    await page.keyboard.press('Control+V');    
    
    await page.waitForTimeout(4000)

})