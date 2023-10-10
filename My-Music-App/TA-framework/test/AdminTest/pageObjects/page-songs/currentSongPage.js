/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { BasePage } from "../basePage";

export class CurrentSong extends BasePage {
  constructor() {
    super();
    this.url = '';
    this.userContent = `  `;
    this.buttonsBar = `//div[@id="title_bar"]//div[@id="titlebar_right"]`;
  }

  get songTitle() {
    return $(`${this.userContent} tr.row.row-title td`);
  }

  get albumName() {
    return $(`${this.userContent} tr.row.row-album a`);
  }

  get createdAtDate() {
    return $(`${this.userContent} tr.row.row-created_at td`);
  }

  get updatedAtDate() {
    return $(`${this.userContent} tr.row.row-updated_at td`);
  }

  get editSongButton() {
    return $(`${this.buttonsBar} //a[text()="Edit Song"]`);
  }

  get deleteSongButton() {
    return $(`${this.buttonsBar} //a[text()="Delete Song"]`);
  }
}