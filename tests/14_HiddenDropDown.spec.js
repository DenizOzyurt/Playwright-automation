import {test, expect} from '@playwright/test'


test('HiddenDropdown', async ({page})=>{
// Admin ,admin123
await page.goto('https://opensource-demo.orangehrmlive.com/');
await page.locator('//input[@placeholder="Username"]').fill('Admin');
await page.locator('//input[@placeholder="Password"]').fill('admin123');
await page.locator('//button[@type="submit"]').click();

await page.waitForTimeout(3000);

//await page.locator("//a[@class='oxd-main-menu-item active']").click();

//span[text()="PIM"]
await page.locator('//span[normalize-space()="PIM"]').click();
await page.locator('(//div[@class="oxd-select-text--after"])[3]').click();

//wating for options
await page.waitForTimeout(3000); 
const options = await page.$$('//div[@role="listbox"]//span');

for(const option of options){
    const jopTitle = await option.textContent();
    //console.log(jopTitle);

    if(jopTitle.includes('QA Engineer'))
    {
        await option.click();
        break;
    }
}
await page.waitForTimeout(3000); 

})