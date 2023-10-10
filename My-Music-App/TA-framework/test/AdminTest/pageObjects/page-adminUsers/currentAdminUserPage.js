/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { BasePage } from "../basePage";

export class CurrentAdmin extends BasePage {
  constructor() {
    super();
    this.url = '';
    this.userContent = `div#main_content`;
    this.buttonsBar = `//div/span[@class="action_item"]/`;
  }

  get adminUserNickName() {
    return $(`${this.userContent} tr.row.row-nickname span`);
  }

  get createdAtDate() {
    return $(`${this.userContent} tr.row.row-created_at td`);
  }

  get updatedAtDate() {
    return $(`${this.userContent} tr.row.row-updated_at td`);
  }
  
  get adminUserEmail() {
    return $(`${this.userContent} tr.row.row-email td`);
  }

  get editAdminUserButton() {
    return $(`${this.buttonsBar} a[text()="Edit Admin User"]`);
  }

  get deleteAdminUserButton() {
    return $(`${this.buttonsBar} a[text()="Delete Admin User"]`);
  }
}