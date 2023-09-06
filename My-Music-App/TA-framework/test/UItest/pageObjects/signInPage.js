import { BasePage } from "./basePage";

export class SignInPage extends BasePage {
  get inputEmail() {
    return $("[data-testid=emailtest]");
  }

  get inputPassword() {
    return $("[data-testid=passwordtest]");
  }

  get btnSignIn() {
    return $("button[class='signin-button ']");
  }

  get checkboxRememberMe() {
    return $("#checkbox");
  }

  async singIn(email, password) {
    await this.inputEmail.setValue(email);
    await this.inputPassword.setValue(password);
    await this.checkboxRememberMe.click();
    await this.btnSignIn.click();
  }

  open() {
    return super.open("SignIn");
  }
}