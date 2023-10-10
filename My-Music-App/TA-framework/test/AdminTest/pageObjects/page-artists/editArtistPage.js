/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { BasePage } from "../basePage";

export class EditArtist extends BasePage {
    constructor() {
        super();
        this.url = 'edit';
        this.inputsForm = `#artist_name_input`
    }

    get inputEditedName() {
        return $(`${this.inputsForm} #artist_name`);
    }

    get updateArtistButton() {
        return $(`fieldset.actions input[value="Update Artist"]`);
    }
}