import {test,expect} from '@playwright/test'
/*
SOFT ASSERTIONS : The codes not terminate and go on until end
_________________________________________________________________________
1) expect.soft(page).toHaveURL()   Page has URL
    expect(page).not.toHaveURL()   Page has URL
2) expect.soft(page).toHaveTitle()   Page has title
3) expect.soft(locator).toBeVisible()  Element is visible
4) expect.soft(locator).toBeEnabled()  Control is enabled
5) expect.soft(locator).toBeChecked()  Radio/Checkbox is checked
6) expect.soft(locator).toHaveAttribute() Element has attribute
7) expect.soft(locator).toHaveText()  Element matches text
8) expect(locator).toContainText()  Element contains text
    expect(locator).not.toContainText()  Element contains text
9) expect(locator).toHaveValue(value) Input has a value
10) expect(locator).toHaveCount()  List of elements has given length
-------------------------------------------------------------------------
*/
test ('Soft ssertions',async ({page})=>{
    // open url 
    await page.goto("https://demoblaze.com/");

    // Page has a URL  expect(page).toHaveURL() page has url
    await expect.soft(page).toHaveURL("https://demoblaze.com/")

    // expect(Page).toHaveTitle()  page had a title
    await expect.soft(page).toHaveTitle("STORE");
    const logo = page.locator('//a[normalize-space()="PRODUCT STORE"]')
    await expect.soft(logo).toBeVisible();
    await expect.soft(logo).toContainText("PRODUCT");

})