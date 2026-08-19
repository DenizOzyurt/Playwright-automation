import {test, expect} from '@playwright/test';

// !!!! playwright.config.js used for taking Trace viewer, look at config !!!!
// npx playwright show-trace path/to/trace.zip
test('Trace viewer test',async ({page})=>{
await page.goto('https://demoblaze.com/');
//Login
    await page.waitForSelector('#login2')
    await page.click('#login2');
    await page.fill('#loginusername','pavanol' );
    await page.fill('#loginpassword','test@123')

console.log('Pages avant login:', page.context().pages().length);    
    await page.click('//button[normalize-space()="Log in"]');
console.log('Pages après login:', page.context().pages().length);
  
//Home page
    await page.waitForTimeout(5000)
    await page.waitForSelector('#tbodyid>div');
    const Products  = await page.locator('#tbodyid>div');
    const nbProducts = await Products.count();
    console.log('Number of products : ' , nbProducts);

    await expect(nbProducts).toBe(9);
    await page.waitForTimeout(2000)

//Add to cart
    await page.click('//a[normalize-space()="Samsung galaxy s6"]');
    await page.waitForSelector('//a[@onclick="addToCart(1)"]');
   
    // For alert
    await page.on('dialog', async dialog=> {
        //expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('Product added.');
        await dialog.accept()
    })
    await page.click('//a[@onclick="addToCart(1)"]');
    await page.waitForTimeout(2000)
//Logout
    // for failure the scenario 
    //console.log('test failure');  
    //await page.click('#logout');  
    await page.click('#logout2');
    await page.waitForTimeout(4000)

    await page.close();
})