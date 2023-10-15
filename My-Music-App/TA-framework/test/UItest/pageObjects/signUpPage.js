/* eslint-disable no-undef */
import { BasePage } from "./basePage";

export class SignUpPage extends BasePage{
  constructor() {
        super();
        this.url = `sign-up`;
    }

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

    get nickNameErrorMessage () {
        return $("[data-testid=nicknameError]");
    }

    get emailErrorMessage() {
        return $("[data-testid=emailError]");
    }

    get passwordErrorMessage() {
        return $("[data-testid=passwordError]");
    }

    get confirmPasswordErrorMessage() {
        return $("[data-testid=confirmPasswordError]");
    }

    async singUpToTheApplication(nickname, email, password, confirmPassword) {
        await this.inputNickname.setValue(nickname);
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.inputPasswordConfirmation.setValue(confirmPassword)
        await this.btnSignUp.click();
    }

  async checkErrorMessage(element, message) {
    if (!this[element]) {
      throw new Error(`Element type "${this[element]}" not found.`);
    }
    await expect(this[element]).toBeExisting();
    await expect(this[element]).toHaveTextContaining(message);
  }
}