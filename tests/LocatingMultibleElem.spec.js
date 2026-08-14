
import {test, expect} from '@playwright/test'
import { link } from 'node:fs';

test('Locate multible elements', async({page})=>{

    await page.goto('https://demoblaze.com/');

    const Links = await page.$$('a');

    for (const link of Links) 
    {   
       const linkText = await link.textContent(); 
       //console.log(linkText);  
    }
    // for wait elements to charge
    page.waitForSelector('//div[@id="tbodyid"]/div//h4/a');
    const productLinks = await page.$$('//div[@id="tbodyid"]/div//h4/a')
    for(const prLink of productLinks)
    {
        const prLinkContexte = await prLink.textContent();
        console.log(prLinkContexte)
    }
    
    page.close();
})
