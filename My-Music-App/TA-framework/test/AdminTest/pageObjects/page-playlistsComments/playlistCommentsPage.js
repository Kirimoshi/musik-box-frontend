import { BasePage } from "../basePage";

export class PlaylistComments extends BasePage {
  constructor() {
    super();
    this.url = 'playlist_comments';
    this.playlistComments = '//table[@id="index_table_playlist_comments"]'
  }

  get commentId() {
    return $(`${this.playlistComments}//a[text()="Id"]`);
  }

  get userEmail() {
    return $(`${this.playlistComments}//th[text()="User Email"]`);
  }

  get commentsContent() {
    return $(`${this.playlistComments}//a[text()="Content"]`);
  }

  get playlistName() {
    return $(`${this.playlistComments}//th[text()="Playlist Name"]`);
  }

  get createdCommentDate() {
    return $(`${this.playlistComments}//a[text()="Created At"]`);
  }

  get playlistComment() {
    return $$(`${this.playlistComments}//tbody//tr//td`);
  }

  get deleteButton() {
    return $$(`${this.playlistComments}//a[@data-method="delete"]`);
  }

  get successDeleteMessage() {
    return $(`.flashes .flash.flash_notice`);
  }
}