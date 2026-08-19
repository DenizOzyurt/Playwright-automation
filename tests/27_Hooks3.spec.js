import {test,expect} from '@playwright/test'

/*
beforeEach : This hook is executed before each individual test.
afterEach : This hook is executed after each individual test.

beforeAll : This hook is executes once before any of the tests start runnig.
afterAll : This hook is executed once after all the tests hace been run.
*/
let page;

test.beforeEach(async ({browser})=>{
    page = await browser.newPage();
    await page.goto('https://demoblaze.com/');
//Login
    await page.waitForSelector('#login2')
    await page.click('#login2');
    await page.fill('#loginusername','pavanol' );
    await page.fill('#loginpassword','test@123')

console.log('Pages avant login:', page.context().pages().length);    
    await page.click('//button[normalize-space()="Log in"]');
console.log('Pages après login:', page.context().pages().length);

    await expect(await page.locator('#logout2')).toBeVisible();

});

test.afterEach(async ()=>{
    //Logout
    await page.click('#logout2');
    await page.waitForTimeout(3000)
    await page.close();
});


test('Home page test',async ()=>{

//Home page
    await page.waitForSelector('#tbodyid>div');
    //await page.waitForTimeout(10000);
    const Products  = await page.locator('#tbodyid>div');
    const nbProducts = await Products.count();
    console.log('Number of products : ' , nbProducts);

    await expect(nbProducts).toBe(9);
    await page.waitForTimeout(2000)
});

test('Add product to cart test',async ()=>{
await page.goto('https://demoblaze.com/');    
//Add to cart
    await page.click('//a[normalize-space()="Samsung galaxy s6"]');
    await page.waitForSelector('//a[@onclick="addToCart(1)"]');
   
    // For alert
    await page.on('dialog', async dialog=> {
        //expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('Product added');
        await dialog.accept()
    })
    await page.click('//a[@onclick="addToCart(1)"]');    
    
    await page.waitForTimeout(2000)
})