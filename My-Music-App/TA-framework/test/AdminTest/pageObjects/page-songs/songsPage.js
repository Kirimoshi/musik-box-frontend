/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import {
    BasePage
} from "../basePage";

export class Songs extends BasePage {
    constructor() {
      super();
      this.url = 'songs';
      this.titleBar = `div#title_bar`
      this.songs = `tbody tr`
      this.song = `tbody tr.odd`
  }

  get newSongButton() {
    return $(`${this.titleBar} .action_item`);
  }

  get songsElements() {
    return $$(this.songs);
  }

  get songId() {
    return $$(`${this.song} .col.col-id`);
  }

  get songTitle() {
    return $$(`${this.song} .col.col-title`);
  }

  get songAlbum() {
    return $$(`${this.song} .col.col-album`);
  }

  get songArtists() {
    return $$(`${this.song} .col.col-artists`);
  }

  get songGenre() {
    return $$(`${this.song} .col.col-genre`);
  }
    
  get songViewButton() {
    return $$(`${this.song} a.view_link.member_link`);
  }
    
  get songEditButton() {
    return $$(`${this.song} a.edit_link.member_link`);
  }

  get songDeleteButton() {
    return $$(`${this.song} a.delete_link.member_link`);
  }
}