/* eslint-disable no-undef */
import { BasePage } from "./basePage";

export class SignUpPage extends BasePage{
  constructor() {
      super();
      this.url = `SignUp`
      this.form = `form.signup-form`
  }

  get inputNickname() {
      return $(`${this.form} input[data-testid=nickname]`);
  }

    get inputEmail() {
        return $(`${this.form} input[data-testid=email]`);
    }

    get inputPassword() {
        return $(`${this.form} input[data-testid=password]`);
    }

    get inputPasswordConfirmation() {
        return $(`${this.form} input[data-testid=confirmPassword]`);
    }

    get btnSignUp() {
        return $(`${this.form} button[type="submit"]`);
    }

    get nickNameError () {
        return $(`${this.form} [data-testid=nicknameError]`);
    }

    get emailError () {
        return $(`${this.form} [data-testid=emailError]`);
    }

    get passwordError () {
        return $(`${this.form} [data-testid=passwordError]`);
    }

    get confirmPasswordError () {
        return $(`${this.form} [data-testid=confirmPasswordError]`);
    }

    async singUpToTheApplication(nickname, email, password, confirmPassword) {
        await this.inputNickname.setValue(nickname);
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.inputPasswordConfirmation.setValue(confirmPassword)
        await this.btnSignUp.click();
    }
}