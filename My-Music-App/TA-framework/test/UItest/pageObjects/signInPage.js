/* eslint-disable no-undef */
import { BasePage } from "./basePage";

export class SignInPage extends BasePage {
  constructor() {
      super();
      this.url = `sign-in`;
  }

  get inputEmail() {
    return $("[data-testid=emailtest]");
  }

  get inputPassword() {
    return $("[data-testid=passwordtest]");
  }

  get signInButton() {
    return $("button.signIn__submitButton");
  }

  get checkboxRememberMe() {
    return $("#checkbox");
  }

  async signIn(email, password) {
    await this.inputEmail.setValue(email);
    await this.inputPassword.setValue(password);
    await this.checkboxRememberMe.click();
    await this.signInButton.click();
  }

  async signInWithoutRemembering(email, password) {
    await this.inputEmail.setValue(email);
    await this.inputPassword.setValue(password);
    await this.signInButton.click();
  }
}
