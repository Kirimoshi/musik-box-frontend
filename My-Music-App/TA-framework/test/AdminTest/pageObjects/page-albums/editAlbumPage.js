/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import {
    BasePage
} from "../basePage";

export class EditAlbum extends BasePage {
    constructor() {
        super();
        this.url = 'edit';
        this.inputForm = `#album_title_input`
    }

    get inputEditedTitle() {
        return $(`${this.inputForm} #album_title`);
    }

    get updateAlbumButton() {
        return $(`fieldset.actions input[value="Update Album"]`);
    }
}