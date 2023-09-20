/* eslint-disable no-undef */
import { Given, When, Then } from "@wdio/cucumber-framework";
import Pages from "../pageObjects/pages";
const { camelize } = require ("../../utils/helpers");
const { assert } = require("chai");
const { adminUserData } = require("../../utils/data");

Then(/the user "([^"]*)" to the system as the admin user/, async function (page) {
  const currentPage = await Pages[page]
  await currentPage.open();
  async function logInToTheSystem() {
    const emailField = await currentPage.inputEmail;
    const passwordField = await currentPage.inputPassword;
    const rememberCheckbox = await currentPage.rememberCheckBox;
    const confirmButton = await currentPage.loginButton;
    await emailField.setValue(adminUserData.email);
    await passwordField.setValue(adminUserData.password);
    await rememberCheckbox.click();
    await confirmButton.click();   
  }
  await logInToTheSystem()
});

Then(/the user clicks on the "([^"]*)" (page )?(\d+)? ?"([^"]*)" "([^"]*)"/,
  async function (page, place, numeral, element, type) {
    let currentElement = await Pages[page][[camelize(`${element}${type}`)]];
    let elementToClick;
      if (currentElement.length === 0) {
      throw new Error(`Element wasn't found`);
    } else if (numeral) {
      elementToClick = await currentElement[numeral - 1];
    } else if (place) {
      elementToClick = await Pages[place][camelize(`${element}${type}`)];
    } else {
      elementToClick = await currentElement;
    }
    await elementToClick.click();
    assert.isTrue(await elementToClick.isClickable(), `${elementToClick} is not clickable`)
});