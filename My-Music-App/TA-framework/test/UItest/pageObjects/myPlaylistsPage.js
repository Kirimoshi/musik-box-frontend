import { BasePage } from "./basePage";

export class MyPlaylistsPage extends BasePage{
    constructor() {
        super();
        this.url = `my-playlists`;
        this.playlistsContainer = `section.my-playlists__list`;
    }

    get myPlaylistsList() {
        return $$(`${this.playlistsContainer} .my-playlists__card`);
    }

    get myPlaylistName() {
        return $$(`${this.playlistsContainer} .playlist-card__title`);
    }

    get myPlaylistLogo() {
        return $$(`${this.playlistsContainer} .playlist-card__image`);
    }

    get myPlaylistSongsList() {
        return $$(`${this.playlistsContainer} .playlist-card__songs`);
    }

    get playlistsItem() {
        return $$(`${this.playlistsContainer} .my-playlists__card`);
    }

    get playlistMenu() {
        return $$(`${this.playlistsContainer} .playlist-card__menu-icon`);
    }

    get deletePlaylistButton() {
        return $$(`//p[text()="Delete Playlist"]`);
    }

    get dialogWindowPlaylistTitle() {
        return $(`dialog h3`)
    }

    get dialogDeletePlaylistButton() {
        return $(`//dialog/button[text()="Delete playlist"]`)
    }

    get cancelDeletionPlaylistButton() {
        return $(`//dialog/button[text()="Cancel"]`)
    }
}