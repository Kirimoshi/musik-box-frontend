import { BasePage } from "./basePage";

export class PublicPlaylistPage extends BasePage {
  constructor() {
    super();
    this.url = '';
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

  get publicPlaylistLikeButton() {
    return $(`.profile__rating--like button.reaction-btn`);
  }

  get publicPlaylistDislikeButton() {
    return $(`.profile__rating--dislike button.reaction-btn`);
  }

  get publicPlaylistLikeCounter() {
    return $(`span.profile__rating--like`);
  }

  get publicPlaylistDislikeCounter() {
    return $(`span.profile__rating--dislike`);
  }
}
