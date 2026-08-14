import {test, expect} from '@playwright/test'

test.skip('Handdle dialogs with OK',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //await page.locator('#alertBtn');
    // Enabling dialog window handler
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept()

    })

    await page.click('#alertBtn');
    await page.waitForTimeout(4000);
})

test.skip('Confirmatin dialogs with OKL and Cancel',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //await page.locator('#alertBtn');
    // Enabling dialog window handler
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button');
        await dialog.accept() //Close by using OK button
        //await dialog.dismiss() // Close by using cancel

    })

    await page.click('#confirmBtn');
    await page.waitForTimeout(4000);

    // verification the message OK
    const textVerification = await page.locator('#demo').textContent();
    console.log(textVerification);
    await expect(page.locator('#demo')).toContainText('You pressed OK')
    await expect(textVerification.includes('You pressed OK!'))
})

test('Prompt dialogs with OKL and Cancel',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //await page.locator('#alertBtn');
    // Enabling dialog window handler
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter')


        await dialog.accept('John Cash') //Close by using OK button
        //await dialog.dismiss() // Close by using cancel

    })

    await page.click('#promptBtn');
    await page.waitForTimeout(4000);

    // verification the message OK
    const textVerification = await page.locator('#demo').textContent();
    console.log(textVerification);
    await expect(page.locator('#demo')).toContainText('Hello John Cash! How are you today?')

})