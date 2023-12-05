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

  get commentList() {
    return $$(`section .comments__list`)
  }

  get commentInput() {
    return $(`textarea#new-comment`)
  }

  get leaveCommentButton() {
    return $(`button.comment-form__submit-btn`)
  }

  get commentorName() {
    return $$(`span.comment__author-name`)
  }

  get commentEmail() {
    return $$(`p.comment__author-email`)
  }

  get commentContent() {
    return $$(`p.comment__content`)
  }

  get commentDate() {
    return $$(`span.comment__age`)
  }
  
  get commentErrorMessage() {
    return $(`p.comment-form__error-msg`)
  }
}
