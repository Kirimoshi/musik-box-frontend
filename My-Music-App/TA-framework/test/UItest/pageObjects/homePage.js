/* eslint-disable no-undef */
import { BasePage } from "./basePage";

export class HomePage extends BasePage {
  get btnLogout() {
    return $("span=Log out");
  }

  get logoutMessage() {
    return $("class*=Toastify__toast-container");
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
}
