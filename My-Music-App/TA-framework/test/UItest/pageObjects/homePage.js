/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import {
  BasePage
} from "./basePage";

export class HomePage extends BasePage {
  constructor() {
    super();
    this.url = '';
    this.popularSection = `.popular-playlists__section`
    this.featuredSection = `section.featured-playlists`
    this.latestSection = `section.latest-playlists`
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
    return $('button.user-info__btn--logout');
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

  get popularPlaylists() {
    return $$(`${this.popularSection} .playlist-card`);
  }
  
  get popularPlaylistsName() {
    return $$(`${this.popularSection} .playlist-card h4`);
  }

  get popularPlaylistsAuthorName() {
    return $$(`${this.popularSection} .playlist-card p`);
  }

  get popularPlaylistLogo() {
    return $$(`${this.popularSection} .playlist-card__cover`);
  }

  get featuredPlaylists() {
    return $$(`${this.featuredSection} .featured-playlists__card`);
  }

  get featuredPlaylistsName() {
    return $$(`${this.featuredSection} .featured-playlists__card h4`);
  }

  get featuredPlaylistsAuthorName() {
    return $$(`${this.featuredSection} .featured-playlists__card p`);
  }

  get featuredPlaylistLogo() {
    return $$(`${this.featuredSection} .featured-playlists__card .playlist-card__cover`);
  }

  get latestPlaylists() {
    return $$(`${this.latestSection} .latest-playlists__card`);
  }

  get latestPlaylistsName() {
    return $$(`${this.latestSection} .latest-playlists__card h4`);
  }

  get latestPlaylistsAuthorName() {
    return $$(`${this.latestSection} .latest-playlists__card p`);
  }

  get latestPlaylistLogo() {
    return $$(`${this.latestSection} .latest-playlists__card .playlist-card__cover`);
  }
}
