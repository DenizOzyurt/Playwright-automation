export class LoginPage {
    constructor(page){
        this.page = page;
        this.loginlik = "#login2"
        this.userName = "#loginusername"
        this.password = "#loginpassword"
        this.loginButton = '//button[normalize-space()="Log in"]'
    }

    async gotoLoginPage(){
        await this.page.goto('https://demoblaze.com/');
    }

    async login(username, password){
        await this.page.locator(this.loginlik).click();
        await this.page.locator(this.userName).fill(username);
        await this.page.locator(this.password).fill(password);
        await this.page.locator(this.loginButton).click()
    }
}