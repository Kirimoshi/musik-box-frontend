/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { BasePage } from "../basePage";

export class CurrentPlaylist extends BasePage {
  constructor() {
    super();
      this.url = '';
      this.playlistContent = `div#main_content`;
  }

  get featureLabel() {
    return $(`${this.playlistContent} span.status_tag`);
  }
}