export class Header{
  constructor() {
    this.headerSelector = `#header`;
    this.titleBar = `//div[@id="title_bar"]`;
  }
  get currentTitle() {
    return $(`${this.titleBar} //h2[@id="page_title"]`);
  }

  get playlistCommentsButton() {
    return $(`${this.headerSelector} #playlist_comments`);
  }

  get albumsButton() {
    return $(`${this.headerSelector} #albums`);
  }

  get adminUsersButton() {
    return $(`${this.headerSelector} #admin_users`);
  }

  get artistsButton() {
    return $(`${this.headerSelector} #artists`);
  }

  get songsButton() {
    return $(`${this.headerSelector} #songs`);
  }

  get playlistsButton() {
    return $(`${this.headerSelector} #playlists`);
  }

  get genresButton() {
    return $(`${this.headerSelector} #genres`);
  }

  get successfullyMessage() {
    return $(`div.flashes .flash.flash_notice`);
  }
}