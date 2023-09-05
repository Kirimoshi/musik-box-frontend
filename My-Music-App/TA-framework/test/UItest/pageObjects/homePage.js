/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { BasePage } from "./basePage";

export class HomePage extends BasePage {
  get loginMessage() {
    return $("p=You have been successfully logged in")
  }

  get btnHomeSignIn() {
    return $("href=Sign in]");
  }

  get btnLogout() {
    return $("span=Log out");
  }

  get logoutSuccessMessage1() {
    return $('p=You have been successfully logged out');;
  }

  get logoutSuccessMessage2() {
    return $('p=Come back anytime!');;
  }

  get logoutUnsuccessMessage1() {
    return $('p=Something went wrong');;
  }

  get logoutUnsuccessMessage2() {
    return $('p=Please try again');;
  }

  async checkLogoutMessage(element, message) {
    if (!this[element]) {
      throw new Error(`Element type "${this[element]}" not found.`);
    }
    await expect(this[element]).toBeExisting();
    await expect(this[element]).toHaveTextContaining(message);
  }

  async logout() {
    await this.btnLogout.click();
  }

  open() {
    return super.open();
  }
}
