/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { BasePage } from "../basePage";

export class CurrentAlbum extends BasePage {
  constructor() {
    super();
    this.url = '';
    this.albumContent = `div#main_content`;
    this.buttonsBar = `//div[@id="title_bar"]//div[@id="titlebar_right"]`;
  }

  get albumName() {
    return $(`${this.albumContent} tr.row.row-title td`);
  }

  get createdAtDate() {
    return $(`${this.albumContent} tr.row.row-created_at td`);
  }

  get updatedAtDate() {
    return $(`${this.albumContent} tr.row.row-updated_at td`);
  }

  get editAlbumButton() {
    return $(`${this.buttonsBar} //a[text()="Edit Album"]`);
  }

  get deleteAlbumButton() {
    return $(`${this.buttonsBar} //a[text()="Delete Album"]`);
  }
}