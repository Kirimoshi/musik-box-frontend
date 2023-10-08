/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import {
    BasePage
} from "../basePage";

export class NewAlbum extends BasePage {
  constructor() {
    super();
    this.url = 'new';
    this.buttonsBar = `fieldset.actions`
    this.userContent = `div#main_content`;
  }
  get inputAlbumTitle   () {
    return $(`${this.userContent} input#album_title`);
  }

  get createAlbumButton() {
    return $(`${this.buttonsBar} #album_submit_action`);
  }
}