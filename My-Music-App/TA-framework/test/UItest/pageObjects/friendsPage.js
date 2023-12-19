import { BasePage } from "./basePage";

export class FriendsPage extends BasePage {
  constructor() {
    super();
    this.url = `request`;
  }

  get addNewFriendButton() {
    return $(`button.friends__title-btn`);
  }

  get addFriendFormEmailInput() {
    return $(`input[placeholder="Enter email"]`);
  }

  get addNewFriendButton() {
    return $(`button.friends__title-btn`);
  }

  get dialogWindowAddFriendButton() {
    return $(`button.add-friend-modal__btn--submit`);
  }

  get sendByMeButton() {
    return $(`a[href="/friends/sent"]`);
  }
}
