/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { BasePage } from "../basePage";

export class EditAdminUser extends BasePage {
  constructor() {
   super();
   this.url = 'edit';
   this.inputsForm = `form#edit_admin_user .inputs`
  }

  get inputEditedEmail() {
     return $(`${this.inputsForm} input#admin_user_email`);
  }

  get inputEditedPassword() {
     return $(`${this.inputsForm} input#admin_user_password`);
  }

  get inputEditedPasswordConfirmation() {
     return $(`${this.inputsForm} input#admin_user_password_confirmation`);
  }

  get updateAdminUserButton() {
     return $(`fieldset.actions input[value="Update Admin user"]`);
  }

}