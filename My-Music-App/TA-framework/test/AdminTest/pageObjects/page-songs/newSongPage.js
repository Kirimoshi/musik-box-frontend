/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import {
    BasePage
} from "../basePage";

export class NewSong extends BasePage {
  constructor() {
    super();
    this.url = 'new';
    this.buttonsBar = `fieldset.actions`
    this.userContent = `div#main_content`;
  }
  get inputSongTitle   () {
    return $(`${this.userContent} input#song_title`);
  }

  get selectSongAlbum() {
    return $(`select#song_album_id`);
  }

  get selectArtistId() {
    return $(`select#song_artist_ids`);
  }

  get selectSongGenre() {
    return $(`select#song_genre_id`);
  }

  get createSongButton() {
    return $(`${this.buttonsBar} #song_submit_action`);
  }
}