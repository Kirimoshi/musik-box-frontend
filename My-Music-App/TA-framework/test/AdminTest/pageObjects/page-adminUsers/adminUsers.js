/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { BasePage } from "../basePage";

export class AdminUsers extends BasePage {
  constructor() {
    super();
    this.url = 'admin_users';
    this.usersForm = `table#index_table_admin_users`;
    this.buttonsBar = `//div/span[@class="action_item"]`;
  }

  get newAdminUserButton() {
    return $(`${this.buttonsBar} /a[text()="New Admin User"]`);
  }
  
  get viewAdminUserButton() {
    return $(`${this.usersForm} tr.odd .table_actions a[title="View"]`);
  }
}