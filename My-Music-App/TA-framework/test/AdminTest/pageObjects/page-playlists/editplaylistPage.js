/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { BasePage } from "../basePage";

export class EditPlaylist extends BasePage {
    constructor() {
        super();
        this.url = 'edit';
    }

    get checkFeature() {
        return $(`input#playlist_featured`);
    }

    get updatePlaylistButton() {
        return $(`input[value="Update Playlist"]`);
    }
}