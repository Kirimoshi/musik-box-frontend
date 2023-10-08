/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { BasePage } from "../basePage";

export class NewArtist extends BasePage {
  constructor() {
    super();
    this.url = 'new';
    this.buttonsBar = `fieldset.actions`
    this.userContent = `div#main_content`;
  }
  get inputArtistName() {
    return $(`${this.userContent} input#artist_name`);
  }
  
  get createArtistButton() {
    return $(`${this.buttonsBar} #artist_submit_action`);
  }
}