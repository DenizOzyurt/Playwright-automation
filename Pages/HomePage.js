export class HomePage {
    constructor(page){
        this.page =page
        this.productListe = '//*[@id="tbodyid"]/div/div/div/h4/a'
        this.addToCartBtn = '//a[contains(text(),"Add to cart")]'
        this.cart = '#cartur'
    }

    async addProductToCart(productName){

        const productList = this.page.locator(this.productListe);
        const count = await productList.count();

        for (let i = 0; i < count; i++) {
            const product = productList.nth(i);

            if ((await product.textContent())?.trim() === productName) {
                await product.click();
                break;
            }
        }

        // For alert
        // await this.page.on('dialog', async dialog=> {
        // if(dialog.message().includes('added')){await dialog.accept()

        // }
        // })
        // await this.page.locator(this.addToCartBtn).click
        const dialogPromise = this.page.waitForEvent('dialog');

        await this.page.locator(this.addToCartBtn).click();
        const dialog = await dialogPromise;
        console.log(dialog.message());
        await dialog.accept();
    }

    async gotoCard() {
        await this.page.locator(this.cart).click()
    }
}
