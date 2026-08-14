import {test, expect} from '@playwright/test'


test('Handdle web table', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = await page.locator('#productTable');
    
    //Total number of raows and colomns
    const colomns = await table.locator('thead tr th');
        console.log('Number of colomns : ', await colomns.count());

    const rows = await table.locator('tbody tr');
        console.log('Number of rows : ', await rows.count());

    expect.soft(await colomns.count()).toBe(4);
    expect.soft(await rows.count()).toBe(5);

    //2) Select checkbox for Tablet with filter fonction
    /*const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: 'Tablet'
    })
    matchedRow.locator('input').check();
    */

    //3) Select multible checkbox by re-usable fonction
    //await selectProduct(page,rows,'Smartphone');
    //await selectProduct(page,rows,'Smartwatch');
    //await selectProduct(page,rows,'	Wireless Earbuds');
    
    // 4) Print all product details using loop
    /* for(let i=0; i<await rows.count(); i++)
    {
        const row = rows.nth(i);
        const tds = row.locator('td');
        for(let j=0; j<await tds.count()-1; j++)
        {
           console.log(await tds.nth(j).textContent());
        }
    }
    */

    // 5) Read data all the pages
    const pages = await page.locator('#pagination li a');
    console.log('Number of pages in the pagination : ',await pages.count());
    //console.log(await pages.allTextContents());

    /*    const pages2 = await page.$$('#pagination li a');
            console.log(await pages2.length);
                        console.log(await pages2);

    */
    for(let p=0; p<await pages.count(); p++)
        {
        console.log('Datas of the : ', p+1)
        if(p>0) {await pages.nth(p).click()}
        for(let i=0; i<await rows.count();i++)
            {
                const row =await rows.nth(i);
                const tds = await row.locator('td');

                for(let j=0; j< await tds.count()-1; j++)
                    {
                        const data = await tds.nth(j).textContent();
                        console.log(data);
                    }
            }
        await page.waitForTimeout(3000);            
        }


    //await page.waitForTimeout(4000);

})

async function selectProduct(page, rows, namePro) 
{
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: namePro
    })
    await matchedRow.locator('input').check();
}