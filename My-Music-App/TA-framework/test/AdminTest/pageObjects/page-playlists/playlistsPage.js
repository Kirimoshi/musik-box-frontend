/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { BasePage } from "../basePage";

export class Playlists extends BasePage {
  constructor() {
    super();
    this.url = 'playlists';
    this.playlists = `tbody tr`
    this.playlist = `tr.odd`
    this.filterForm = `form.filter_form`
  }

  get playlistsElements() {
    return $$(this.playlists);
  }

  get playlistId() {
    return $$(`${this.playlist} .col.col-id`);
  }

  get playlistName() {
    return $$(`${this.playlist} .col.col-name`);
  }

  get playlistDescription() {
    return $$(`${this.playlist} .col.col-description`);
  }

  get playlistType() {
    return $$(`${this.playlist} .col.col-playlist_type`);
  }

  get playlistLogo() {
    return $$(`${this.playlist} .col.col-logo`);
  }

  get playlistCreatedDate() {
    return $$(`${this.playlist} .col.col-created_at`);
  }

  get playlistUpdatedDate() {
    return $$(`${this.playlist} .col.col-updated_at`);
    }
    
  get playlistFeatured() {
    return $$(`${this.playlist} .col.col-featured`);
    }
    
  get playlistViewButton() {
    return $$(`${this.playlist} a.view_link`);
  }
  get playlistEditButton() {
    return $$(`${this.playlist} a.edit_link`);
  }

  get selectPlaylistType() {
    return $(`${this.filterForm} #q_playlist_type_input #q_playlist_type`);
  }

  get playlistsFilterButton() {
    return $(`${this.filterForm} input[value="Filter"]`);
  }
}