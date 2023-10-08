/* eslint-disable no-undef */
import { Given, When, Then } from "@wdio/cucumber-framework";
import Pages from "../pageObjects/pages";
import BaseElements from "../pageObjects/elements/baseElements";
const { camelize, generateRandomWord } = require ("../../utils-admin/helpers");
const { assert } = require("chai");
const { adminUserData } = require("../../utils-admin/data");


Then(/the admin "([^"]*)" to the system as the admin user/, async function (page) {
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

Then(/the admin clicks on the "([^"]*)" (page )?(\d+)? ?"([^"]*)" "([^"]*)"/,
  async function (place, page, numeral, element, type) {
  let elementToClick
  if (place==="header") {
    elementToClick = await BaseElements[place][camelize(`${element}${type}`)];
  } else if (numeral) {
    elementToClick = await Pages[place][camelize(`${element}${type}`)][numeral - 1];
  } else if (page){
    elementToClick = await Pages[place][camelize(`${element}${type}`)];
  } else {
    throw new Error(`Element wasn't found`);
  }
    await expect(elementToClick).toBeDisplayed()
    await elementToClick.click();
});

Then(/the admin "([^"]*)" "([^"]*)" in the "([^"]*)" page as: "([^"]*)"/,
  async function (type, element, page, value) {
  let currentPage = await Pages[page][camelize(`${type}${element}`)];
  if (value.includes("Genre")) {
    const randomWord = generateRandomWord();
    value = await currentPage.setValue(randomWord);
  } else {
    await currentPage.setValue(value);
  }
});
  
Then(/the admin "(accepts|dismiss)" alert/, async function (action) {
  assert.isTrue(await browser.isAlertOpen(), "No opened alert windows detected");
  (action === 'accepts') ? await browser.acceptAlert() : await browser.dismissAlert();
});

Then(/the admin "([^"]*)" (\d+)? ?("([^"]*)"\s)?"([^"]*)" "([^"]*)" in the "([^"]*)" page/,
  async function (action, numeralSelectedElement, stringSelectedElement, element, type, page) {
  let currentElement = await Pages[page][camelize(`${action}${element}${type}`)];
  if (numeralSelectedElement) {
    await currentElement.selectByIndex(numeralSelectedElement);
  } else if (stringSelectedElement) {
    await currentElement.selectByVisibleText(stringSelectedElement);
  } else {
    throw new Error(`Selected element wasn't found`);
  }
});

Then(/the admin "([^"]*)" on the "([^"]*)" page "([^"]*)"/, async function (action, page, element) {
  let currentElement = await Pages[page][camelize(`${action}${element}`)];
  let elementAttribute = await currentElement.getAttribute('checked');
  if (!elementAttribute) {
    await expect(currentElement).toBeDisplayed()
    await currentElement.click();
  } else {
    return;
  }
});

