const {test, expect} = require('@playwright/test')

test('Handling data picker', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    // fill with the value
    // await page.locator('#datepicker').fill('15/08/2026');

    // date picker
    const year = "2027";
    const month = "April"
    const day = "18"
    await page.locator('#datepicker').click(); // opens calendar
    while(true)
        {
            const currentYear = await page.locator('.ui-datepicker-year').textContent();
            const currentMonth = await page.locator('.ui-datepicker-month').textContent(); 
            
            if(currentYear == year && currentMonth == month)
                {break;}

            await page.locator('[title="Next"]').click(); //Nexy
        }
    
    // 1) day selection using loop
    /*const dates = await page.$$(".ui-state-default");

    for(let dt of dates){
        if(await dt.textContent() == day){
            await dt.click();
            break;
        }
    }
        */
    //2) to write soft code 7 + Alt gr, `` this signes use for variable 
    await page.locator(`//a[@class="ui-state-default"][text()="${day}"]`).click();
    await page.waitForTimeout(5000)

}) 