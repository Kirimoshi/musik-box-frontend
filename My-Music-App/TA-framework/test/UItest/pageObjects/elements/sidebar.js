/* eslint-disable no-undef */
export class Sidebar {
  constructor() {}

  get myPlaylistsButton() {
    return $(`//a[@href="/my-playlists"]`);
  }

  get sharedPlaylistsButton() {
    return $(`//a[@href="/shared-playlists"]`);
  }

  get publicPlaylistsButton() {
    return $(`//a[@href="/public-playlists"]`);
  }

  get friendsButton() {
    return $(`//a[@href="/friends"]`);
  }
}
