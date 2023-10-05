import { BasePage } from "./basePage";

export class PlaylistPage extends BasePage{
    constructor() {
        super();
        this.url = `details/`;
        this.songsForm = `div.songsContainer`;
    }
    get songMenu() {
        return $$(`${this.songsForm} .songlist-vertical-menu svg`);
    }

    get songsList() {
        return $$(`${this.songsForm} .songs`);
    }

    get removeSongFromPlaylistButton() {
        return $$(`${this.songsForm} .delete-modal`);
    }

    get dialogWindowTitle () {
        return $(`${this.songsForm} dialog h3`)
    }

    get removeSongButton () {
        return $(`//div[@class="songsContainer"]/dialog/button[text()="Remove Song"]`)
    }

    get cancelDeletionSongButton () {
        return $(`//div[@class="songsContainer"]/dialog/button[text()="Cancel"]`)
    }
}