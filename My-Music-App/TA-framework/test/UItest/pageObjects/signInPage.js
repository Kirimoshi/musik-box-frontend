import {BasePage} from "./basePage";

export class SignInPage extends BasePage{
    constructor() {
        super();
        this.url = `SignIn`
        this.form = `form.login-form`
    }

    get inputEmail() {
        return $(`${this.form} input[name="email"]`);
    }

    get inputPassword() {
        return $(`${this.form} input[name="password"]`);
    }

    get rememberMeCheckbox() {
        return $(`${this.form} input#checkbox`);
    }


    get btnSignIn() {
        return $(`${this.form} button.signin-button`);
    }

   
    async singInToTheApplication(email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSignIn.click();
    }
}
