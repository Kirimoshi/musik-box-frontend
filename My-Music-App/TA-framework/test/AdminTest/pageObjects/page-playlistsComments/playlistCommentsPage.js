import { BasePage } from "../basePage";

export class PlaylistComments extends BasePage {
  constructor() {
    super();
    this.url = 'playlist_comments';
    this.playlistComments = `tr.odd`
  }

  get commentId() {
    return $$(`${this.playlistComments} .col.col-id`);
  }

  get commentUserEmail() {
    return $$(`${this.playlistComments} .col.col-user_email`);
  }

  get commentContent() {
    return $$(`${this.playlistComments} .col.col-content`);
  }

  get commentPlaylistName() {
    return $$(`${this.playlistComments} .col.col-playlist_name`);
  }

  get commentCreatedDate() {
    return $$(`${this.playlistComments} .col.col-created_at`);
  }

  get commentDeleteButton() {
    return $$(`${this.playlistComments} a.delete_link.member_link`);
  }

  get commentViewButton() {
    return $$(`${this.playlistComments} a.view_link.member_link`);
  }

  get playlistComment() {
    return $$(`table#index_table_playlist_comments td.col.col-id`);
  }
}