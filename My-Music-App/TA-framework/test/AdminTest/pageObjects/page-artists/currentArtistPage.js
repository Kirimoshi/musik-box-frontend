/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { BasePage } from "../basePage";

export class CurrentArtist extends BasePage {
  constructor() {
    super();
    this.url = '';
    this.artistContent = `div#main_content`;
    this.buttonsBar = `//div[@id="title_bar"]//div[@id="titlebar_right"]`;
  }

  get artistName() {
    return $(`${this.artistContent} tr.row.row-name td`);
  }

  get createdAtDate() {
    return $(`${this.artistContent} tr.row.row-created_at td`);
  }

  get updatedAtDate() {
    return $(`${this.artistContent} tr.row.row-updated_at td`);
  }

  get editArtistButton() {
    return $(`${this.buttonsBar} //a[text()="Edit Artist"]`);
  }

  get deleteArtistButton() {
    return $(`${this.buttonsBar} //a[text()="Delete Artist"]`);
  }
}