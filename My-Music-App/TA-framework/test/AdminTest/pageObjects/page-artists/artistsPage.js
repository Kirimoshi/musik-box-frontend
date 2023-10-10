/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { BasePage } from "../basePage";

export class Artists extends BasePage {
  constructor() {
    super();
    this.url = 'artists';
    this.buttonsBar = `//div/span[@class="action_item"]`;
    this.artists = `tbody tr`
    this.artist = `tr.odd`
  }

  get newArtistButton() {
    return $(`${this.buttonsBar} /a[text()="New Artist"]`);
  }

  get artistsElements() {
    return $$(this.artists);
  }

  get artistId() {
    return $$(`${this.artist} .col.col-id`);
  }

  get artistName() {
    return $$(`${this.artist} .col.col-name`);
  }

  get artistSongs() {
    return $$(`${this.artist} .col.col-songs`);
  }

  get artistAlbums() {
    return $$(`${this.artist} .col.col-albums`);
  }

  get artistViewButton() {
    return $$(`${this.artist} a.view_link.member_link`);
  }

  get artistEditButton() {
    return $$(`${this.artist} a.edit_link.member_link`);
  }

  get artistDeleteButton() {
    return $$(`${this.artist} a.delete_link.member_link`);
  }
}