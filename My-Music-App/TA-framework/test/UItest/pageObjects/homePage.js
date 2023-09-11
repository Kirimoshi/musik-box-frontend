/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { BasePage } from "./basePage";

export class HomePage extends BasePage {
  constructor() {
    super();
    this.url = '';
  }
  
  get loginMessage() {
    return $('p=You have been successfully logged in.');
  }

  get alertLoginMessage() {
    return $('div .Toastify div.toast__login--success');
  }

  get btnHomeSignIn() {
    return $('href=Sign in]');
  }

  get btnLogout() {
    return $('span=Log out');
  }

  get logoutSuccessMessage1() {
    return $('p=You have been successfully logged out.');
  }

  get logoutSuccessMessage2() {
    return $('p=Come back anytime!');
  }

  get logoutUnsuccessMessage1() {
    return $('p=Sorry, we encountered an error while logging you out.');
  }

  get logoutUnsuccessMessage2() {
    return $('p=Please try again later.');
  }

  get myPlaylistsButton () {
    return $(`//a[@href="/ViewMyPlaylists"]//following-sibling::span[text()="My Playlists"]`)
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
