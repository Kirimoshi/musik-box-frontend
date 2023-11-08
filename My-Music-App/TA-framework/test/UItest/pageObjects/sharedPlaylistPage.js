import { BasePage } from "./basePage";

export class SharedPlaylistPage extends BasePage {
  constructor() {
    super();
    this.url = '';
    this.addSongsForm = `dialog.addSongsToPlaylistsModal__container`;
  }
  get addSongButton() {
    return $(`div.addsong svg`)
  }

  get songInput() {
    return $(`${this.addSongsForm} input[placeholder="Type something"]`)
  }

  get songName() {
    return $$(`//div[@class="artistInfo"]/p[text()]`)
  }

  get songSubmitButton() {
    return $(`${this.addSongsForm} button[type="submit"] svg`)
  }

  get addSongToPlaylistButton() {
    return $(`${this.addSongsForm} .addsong-item-icon`)
  }
}
