/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import {
    BasePage
} from "../basePage";

export class EditSong extends BasePage {
  constructor() {
    super();
    this.url = 'edit';
    this.userContent = `div#main_content`;
  }

  get inputEditedTitle() {
    return $(`${this.userContent} input#song_title`);
  }

  get selectSongAlbum() {
    return $(`${this.userContent} select#song_album_id`);
  }

  get selectArtistId() {
    return $(`${this.userContent} select#song_artist_ids`);
  }

  get selectSongGenre() {
    return $(`${this.userContent} select#song_genre_id`);
  }
    
  get updateSongButton() {
    return $(`fieldset.actions input[value="Update Song"]`);
  }
}