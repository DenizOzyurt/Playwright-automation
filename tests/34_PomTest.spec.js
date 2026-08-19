import {test,expect} from '@playwright/test'
import {LoginPage} from '../Pages/LoginPage'
import { HomePage} from '../Pages/HomePage';
import { CartPage } from '../Pages/CartPage';

/*
POM Test
*/
test('Home page test',async ({page})=>{
//Login
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login('pavanol','test@123');
//Home page
    const home = new HomePage(page);
    await home.addProductToCart("Nexus 6");
    await home.gotoCard();
  
// CartePage
    const carte = new CartPage(page);
    const statusPr = await carte.checkProductInCarte("Nexus 6");
    console.log("statusPr : ",statusPr)
    // verification the product added
    expect(await statusPr).toBeTruthy();
    await page.waitForTimeout(3000);    

    
})