import {BasePage} from "./basePage";

export class SignInPage extends BasePage {
    get inputEmail() {
        return $('[data-testid=email]');
    }

    get inputPassword() {
        return $('[data-testid=password]');
    }

    get btnSignIn() {
        return $('button[type="submit"]');
    }

    get checkboxRememberMe() {
        return $('#checkbox');
    }

    async singIn(email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSignIn.click();
    }

    open () {
        return super.open('SignUp');
    }
}
