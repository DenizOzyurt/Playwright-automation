import {test,expect} from '@playwright/test'
/*
HARD ASSERTIONS : When one assertion fail , script end and finish execute
_________________________________________________________________________
1) expect(page).toHaveURL()   Page has URL
    expect(page).not.toHaveURL()   Page has URL
2) expect(page).toHaveTitle()   Page has title
3) expect(locator).toBeVisible()  Element is visible
4) expect(locator).toBeEnabled()  Control is enabled
5) expect(locator).toBeChecked()  Radio/Checkbox is checked
6) expect(locator).toHaveAttribute() Element has attribute
7) expect(locator).toHaveText()  Element matches text
8) expect(locator).toContainText()  Element contains text
    expect(locator).not.toContainText()  Element contains text
9) expect(locator).toHaveValue(value) Input has a value
10) expect(locator).toHaveCount()  List of elements has given length
-------------------------------------------------------------------------
SOFT ASSERTIONS : The codes not terminate and go on until end
_________________________________________________________________________

*/
test.skip('Assertions',async ({page})=>{
  // raison : site externe non compatible / instable en automatisation


    await page.goto("https://demo.nopcommerce.com/register")

    // Page has a URL  expect(page).toHaveURL() page has url
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register")
    page.waitForTimeout(10000)
    await page.waitForSelector('//inbux[@type="checkbox"]')

    page.waitForTimeout(10000)
    //await page.click('//inbux[@type="checkbox"]')
    // expect(Page).toHaveTitle()  page had a title
    //await expect(page).toHaveTitle("nopCommerce demo store. Register");
})