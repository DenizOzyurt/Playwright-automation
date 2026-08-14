import {test, expect} from '@playwright/test'


test('Handdle dropdown ', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Multible ways to select option from the dropdown
    //await page.locator('#country').selectOption({label:'India'}) // label/ visible text
    //await page.locator('#country').selectOption('India') // visible text
    //await page.locator('#country').selectOption({value:'uk'})  // attirubut : value
    //wait page.locator('#country').selectOption({index:1})  // index   
    await page.selectOption('#country',{index:3}) // select directly with index 

    // ASSERTION FOR DROPDOWN
    // 1) Check number of options -approach 1
    // const optionsCountry  = await page.locator('#country option');
    //await expect(optionsCountry).toHaveCount(10);

    // 2) check number of options in dropdown - Approach 2
    //const optionsCount = await page.$$('#country option'); //$$ return in the array form
    //console.log("Number of options :", optionsCount.length);
    //await expect(optionsCount.length).toBe(10);

    // 3) Check presence of value in the dropdown - Approach 1
    //const content = await page.locator('#country').textContent();
    //await expect(content.includes('India')).toBeTruthy;
    
    // 4)Check presence of value in the dropdown - Approanh 2 - using loop
    /*const optionsCount = await page.$$('#country option')
    let status = false;

    for(const country of optionsCount){
        //console.log(await country.textContent());
        let value = await country.textContent();
        if(value.includes('France')) {
            status = true;
            break;
        }
    }
    expect(status).toBeTruthy();
    */

    // 5) Select options from dropdown using loop
    const optionsCount = await page.$$('#country option')
    for(const country of optionsCount){
        //console.log(await country.textContent());
        let value = await country.textContent();
        if(value.includes('France')) {
            await page.selectOption('#country',value);
            break;
        }
    }
    await page.waitForTimeout(5000);
})