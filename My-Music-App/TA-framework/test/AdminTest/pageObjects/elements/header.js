/* eslint-disable no-undef */
export class Header {
    constructor() {
      this.header = '#header'
  }
    get playlistCommentsButton() {
      return $(`${this.header} #playlist_comments`);
  }
  
    get adminUsersButton() {
      return $(`${this.header} #admin_users`);
  }
}