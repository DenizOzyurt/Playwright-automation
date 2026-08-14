const {test, expect} = require('@playwright/test');

test('Opload single file', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    //await page.getByLabel('Upload file').setInputFiles(path.join(__dirname, 'myfile.pdf'));
    await page.waitForSelector('#singleFileInput')

    await page.locator('#singleFileInput').setInputFiles('tests/uploads/upload1.txt')
    //await page.locator('(//button[@type="submit"])[1]').setInputFiles('tests/uploads/upload1.txt')
    await page.waitForTimeout(4000)
    await page.locator('(//button[@type="submit"])[1]').click();

    const textUpload = await page.locator('#singleFileStatus').textContent();
    await expect(textUpload.includes('upload1.txt')).toBeTruthy();

        await page.waitForTimeout(4000)
})


test.only('Opload multible files', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    //await page.getByLabel('Upload file').setInputFiles(path.join(__dirname, 'myfile.pdf'));
    await page.waitForSelector('#multipleFilesInput')

    await page.locator('#multipleFilesInput').setInputFiles(['tests/uploads/upload1.txt','tests/uploads/upload2.txt'])
    //await page.locator('(//button[@type="submit"])[1]').setInputFiles('tests/uploads/upload1.txt')
    await page.waitForTimeout(4000)
    await page.locator('(//button[@type="submit"])[2]').click();


    const textUpload = await page.locator('#multipleFilesStatus').textContent();
    console.log('The text of the upload files : ',textUpload);
    await expect(textUpload.includes('Multiple files selected: ')).toBeTruthy();
        await page.waitForTimeout(3000)

    //For remove files 
    await page.locator('#multipleFilesInput').setInputFiles([])
        await page.waitForTimeout(3000) 
    await page.locator('(//button[@type="submit"])[2]').click();           
        await page.waitForTimeout(3000) 
    await expect(await page.locator('#multipleFilesStatus')).toHaveText('No files selected.');
        await expect(await page.locator('#multipleFilesStatus')).toContainText('No files')
})