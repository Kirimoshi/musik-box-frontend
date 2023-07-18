import {BasePage} from "./basePage";

export class SignUpPage extends BasePage {
    get inputNickname() {
        return $("[data-testid=nickname]");
    }

    get inputEmail() {
        return $('[data-testid=email]');
    }

    get inputPassword() {
        return $('[data-testid=password]');
    }

    get inputPasswordConfirmation() {
        return $('[data-testid=confirmPassword]');
    }

    get btnSignUp() {
        return $('button[type="submit"]');
    }

    get nicknameError () {
        return $('[data-testid=nicknameError]');
    }

    get emailError () {
        return $('[data-testid=emailError]');
    }

    get passwordError () {
        return $('[data-testid=passwordError]');
    }

    get confirmPasswordError () {
        return $('[data-testid=confirmPasswordError]');
    }

    async singUp(nickname, email, password, confirmPassword) {
        await this.inputNickname.setValue(nickname);
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.inputPasswordConfirmation.setValue(confirmPassword)
        await this.btnSignUp.click();
    }

     async checkErrorMessage(element, message){
        if (!this[element]) {
            throw new Error(`Element type "${this[element]}" not found.`);
        }
        await expect(this[element]).toBeExisting();
        await expect(this[element]).toHaveTextContaining(message);
    }

    open () {
        return super.open('SignUp');
    }
}
