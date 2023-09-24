/* eslint-disable no-undef */
import { BasePage } from "../basePage";

export class LoginPage extends BasePage {
  constructor() {
    super();
    this.url = 'admin/login';
    this.fieldset = 'fieldset'
  }

  get inputEmail() {
    return $(`${this.fieldset} #admin_user_email`);
  }

  get inputPassword() {
    return $(`${this.fieldset} #admin_user_password`);
  }

  get rememberCheckBox() {
    return $(`${this.fieldset} #admin_user_remember_me`)
  }
  
  get loginButton() {
    return $(`${this.fieldset} [type="submit"]`)
  }
}
