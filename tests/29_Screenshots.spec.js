const {test,expect} = require('@playwright/test');

// a part from screenshot fonction 
// we can use playwright.config.js  
// uses => screenshot: 'on' with this option screenshot will a parte of the report and see under the test-results
test('Page screenshoot', async({page})=>{
    await page.goto('https://demoblaze.com/index.html');
    await page.screenshot({path: 'tests/screenshots/'+'Homepage'+timeActuel()+'.png'})
});

test('Full page screenshoot', async({page})=>{
    await page.goto('https://demoblaze.com/index.html');
    await page.screenshot({path: 'tests/screenshots/'+'HomeFullPage'+timeActuel()+'.png',fullPage:true})
});

test.only('Element screenshoot', async({page})=>{
    await page.goto('https://demoblaze.com/index.html');
    await page.locator('#contcar').screenshot({path: 'tests/screenshots/'+'HomeElement'+Date.now()+'.png'})
    
});

// for reconvertir time in the form of the time actual
function timeActuel(){
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2,'0');
    const day = date.getDate().toString().padStart(2,'0');

    const hour = date.getHours().toString().padStart(2,'0');
    const minute = date.getMinutes().toString().padStart(2,'0');
    const second = date.getSeconds().toString().padStart(2,'0');

    const timeAc = year + month + day +'_' + hour + minute + second

    return timeAc;
}