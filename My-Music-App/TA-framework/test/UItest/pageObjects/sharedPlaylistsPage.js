import { BasePage } from "./basePage";

export class SharedPlaylistsPage extends BasePage {
  constructor() {
    super();
    this.url = `shared-playlists`;
    this.playlistsContainer = `.shared-playlists__list`;
  }

  get sharedPlaylistsList() {
      return $$(`${this.playlistsContainer} .shared-playlist-card__wrapper`);
  }

  get sharedPlaylistName() {
    return $$(`${this.playlistsContainer} .shared-playlist-card__name`);
  }

  get sharedPlaylistLogo() {
    return $$(`${this.playlistsContainer} img.shared-playlist-card__image`);
  }

  get sharedPlaylistLikeButton() {
    return $$(`${this.playlistsContainer} [data-likes-id] + div.reaction`);
  }

  get sharedPlaylistDislikeButton() {
    return $$(`${this.playlistsContainer} [data-dislikes-id] + div.reaction`);
  }

  get sharedPlaylistLikeCounter() {
    return $$(`${this.playlistsContainer} span[data-likes-id]`);
  }

  get sharedPlaylistDislikeCounter() {
    return $$(`${this.playlistsContainer} span[data-dislikes-id]`);
  }

  get sharedPlaylistNickName() {
    return $$(`${this.playlistsContainer} .shared-playlist-card__created-by`);
  }

  get sharedPlaylistSongsList() {
    return $$(`${this.playlistsContainer} p[data-songlist-id]`);
  }
}
