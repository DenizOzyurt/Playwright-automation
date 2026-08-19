export class CartPage {

    constructor(page) {
        this.page = page;
        this.noOfProcts = '//tbody[@id="tbodyid"]/tr/td[2]'
        
    }
    async checkProductInCarte(productName){
        const produsctInCarte = await this.page.locator(this.noOfProcts);
    // Attendre que le premier produit soit visible
        await produsctInCarte.first().waitFor({ state: 'visible' });        

        const nbProductsCrt = await produsctInCarte.count();
        console.log("Number of products :" ,nbProductsCrt )

        for(let i=0; i < nbProductsCrt; i++){
            const product = await produsctInCarte.nth(i)
            const productText = await product.textContent();
            console.log(await product.textContent());

            if(productName.trim() === productText.trim()){
                return true;
                break;
            }
        }
        return false;
    }

}