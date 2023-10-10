/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { BasePage } from "../basePage";

export class NewGenre extends BasePage {
  constructor() {
    super();
    this.url = 'new';
  }

  get inputGenreTitle() {
    return $(`input#genre_title`);
  }

  get createGenreButton() {
    return $(`fieldset.actions input[value="Create Genre"]`);
  }
}