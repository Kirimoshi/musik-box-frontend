/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { BasePage } from "../basePage";

export class Genres extends BasePage {
  constructor() {
    super();
    this.url = 'genres';
    this.genre = `tr.odd`;
    this.buttonsBar = `//div/span[@class="action_item"]`;
  }

  get newGenreButton() {
    return $(`${this.buttonsBar} /a[text()="New Genre"]`);
  }

  get genreId() {
    return $$(`${this.genre} .col.col-id`);
  }

  get genreTitle() {
    return $$(`${this.genre} .col.col-title`);
  }

  get genreCreatedDate() {
    return $$(`${this.genre} .col.col-created_at`);
  }

  get genreUpdatedDate() {
    return $$(`${this.genre} .col.col-updated_at`);
  }
}