/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { BasePage } from "../basePage";

export class NewAdminUser extends BasePage {
  constructor() {
    super();
    this.url = 'new';
    this.inputsForm = `form#new_admin_user .inputs`;
  }

  get inputEmail() {
    return $(`${this.inputsForm} input#admin_user_email`);
  }
  
  get inputPassword() {
    return $(`${this.inputsForm} input#admin_user_password`);
  }

  get inputPasswordConfirmation() {
    return $(`${this.inputsForm} input#admin_user_password_confirmation`);
  }

  get createAdminUserButton() {
    return $(`fieldset.actions input[value="Create Admin user"]`);
  }
}