import { BasePage } from "./basePage";

export class PlaylistsPage extends BasePage{
    constructor() {
        super();
        this.url = `my-playlists`;
        this.playlistsSection = `section.my-playlists__list`;
    }

    get playlistsItem() {
        return $$(`${this.playlistsSection} .my-playlists__card`);
    }

    get playlistMenu() {
        return $$(`${this.playlistsSection} .playlist-card__menu-icon`);
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