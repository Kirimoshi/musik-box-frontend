/* eslint-disable no-undef */
import { BasePage } from "./basePage";

export class SignUpPage extends BasePage{
//   constructor() {
//       super();
//       this.url = `SignUp`
//       this.form = `form.signup-form`
//   }

  get inputNickname() {
      return $("input[data-testid='nickname']");
  }

    get inputEmail() {
        return $("input[data-testid='email']");
    }

    get inputPassword() {
        return $("input[data-testid='password']");
    }

    get inputPasswordConfirmation() {
        return $("input[data-testid='confirmPassword']");
    }

    get btnSignUp() {
        return $("button[type='submit']");
    }

    get nickNameError () {
        return $("[data-testid=nicknameError]");
    }

    get emailError () {
        return $("[data-testid=emailError]");
    }

    get passwordError () {
        return $("[data-testid=passwordError]");
    }

    get confirmPasswordError () {
        return $("[data-testid=confirmPasswordError]");
    }

    async singUpToTheApplication(nickname, email, password, confirmPassword) {
        await this.inputNickname.setValue(nickname);
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.inputPasswordConfirmation.setValue(confirmPassword)
        await this.btnSignUp.click();
    }
    open() {
        return super.open("SignUp");
      }
}