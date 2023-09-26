/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { BasePage } from "../basePage";

export class NewAdminUser extends BasePage {
  constructor() {
    super();
    this.url = 'new';
    this.inputsForm = `form#new_admin_user .inputs`;
    this.buttonsBar = `//div/span[@class="action_item"]/`;
    this.userContent = `//div[@id="main_content"]`;
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

  get editAdminUserButton() {
    return $(`${this.buttonsBar} a[text()="Edit Admin User"]`);
  }

  get deleteAdminUserButton() {
    return $(`${this.buttonsBar} a[text()="Delete Admin User"]`);
  }

  get successfullyMessage() {
    return $(`div.flashes .flash.flash_notice`);
  }

  get adminUserNickName() {
    return $(`${this.userContent} //tr[@class="row row-nickname"]/td/span`);
  }

  get createdAtDate() {
    return $(`${this.userContent} //tr[@class="row row-created_at"]/td`);
  }

  get updatedAtDate() {
    return $(`${this.userContent} //tr[@class="row row-updated_at"]/td`);
  }
  
  get adminUserEmail() {
    return $(`${this.userContent} //tr[@class="row row-email"]/td`);
  }
}