/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import {
    BasePage
} from "../basePage";

export class Albums extends BasePage {
    constructor() {
      super();
      this.url = 'albums';
      this.buttonsBar = `//div/span[@class="action_item"]`;
      this.albums = `tbody tr`
      this.album = `tr.odd`
  }

  get newAlbumButton() {
    return $(`${this.buttonsBar} /a[text()="New Album"]`);
  }

  get albumsElements() {
    return $$(this.albums);
  }

  get albumId() {
    return $$(`${this.album} .col.col-id`);
  }

  get albumTitle() {
    return $$(`${this.album} .col.col-title`);
  }

  get albumCover() {
    return $$(`${this.album} .col.col-cover`);
  }

  get albumSongs() {
    return $$(`${this.album} .col.col-songs`);
  }

  get albumArtist() {
    return $$(`${this.album} .col.col-artist`);
  }
    
  get albumViewButton() {
    return $$(`${this.album} a.view_link.member_link`);
  }
    
  get albumEditButton() {
    return $$(`${this.album} a.edit_link.member_link`);
  }

  get albumDeleteButton() {
    return $$(`${this.album} a.delete_link.member_link`);
  }
}