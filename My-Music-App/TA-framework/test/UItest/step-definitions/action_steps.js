/* eslint-disable no-undef */
import { Given, When, Then } from "@wdio/cucumber-framework";
import Pages from "../pageObjects/pages";
import BaseElements from "../pageObjects/elements/baseElements";
const { camelize, sendRequest } = require("../../utils-user/helpers");
const { userData, newUserData } = require("../../utils-user/data");
const { assert } = require("chai");


Given(/the user is open "([^"]*)" page/, async function (page) {
  await Pages[page].open();
});

When(/the user sing-ups with "([^"]*)", "([^"]*)", "([^"]*)", and "([^"]*)"/,
  async function (nickname, email, password, confirmPassword) {
    await Pages["signUp"].singUpToTheApplication(
      nickname,
      email,
      password,
      confirmPassword
    );
  }
);

Then(/the user "([^"]*)" to the application/, async function (page) {
  const currentPage = await Pages[page]
  await currentPage.open();
  async function logInToTheSystem() {
    const emailField = await currentPage.inputEmail;
    const passwordField = await currentPage.inputPassword;
    const rememberCheckbox = await currentPage.checkboxRememberMe;
    const confirmButton = await currentPage.signInButton;
    await emailField.setValue(userData.email);
    await passwordField.setValue(userData.password);
    await rememberCheckbox.click();
    await confirmButton.click();
  }
  await logInToTheSystem()
});

When(/the user sing-ins with "([^"]*)" and "([^"]*)"/, async (email, password) => {
  await Pages.signIn.signIn(email, password);
});

When(/the user sing-ins without remembering with "([^"]*)" and "([^"]*)"/, async (email, password) => {
  await Pages.signIn.signInWithoutRemembering(email, password);
});

Then(/the user clicks on the "([^"]*)" (page )?(\d+)? ?"([^"]*)" "([^"]*)"/,
  async function (place, ifPage, numeral, element, type) {
  let elementToClick;
  if (numeral) {
  let numeralElement = await Pages[place][camelize(`${element}${type}`)][numeral - 1];
    if (!numeralElement) {
    await browser.pause(2000);
    elementToClick = await Pages[place][camelize(`${element}${type}`)][numeral - 1];
  } else {
    elementToClick = await Pages[place][camelize(`${element}${type}`)][numeral - 1];
    }
  } else if (place === "sidebar") {
    elementToClick = await BaseElements[place][camelize(`${element}${type}`)];
  } else if (ifPage) {
    elementToClick = await Pages[place][camelize(`${element}${type}`)];
  } else {
    throw new Error("Element is not found")
  }
    expect(elementToClick).toBeDisplayed();
    await elementToClick.click();
    await browser.pause(1000);
});


When(/^The user logging out$/, async () => {
  await Pages.home.logout();
});

When(/^the Internet connection is interrupted$/, async () => {
  await browser.throttle("offline");
});

Then("the user tries to log in and delete account if it exists", async () => {
  const responseLogin = await sendRequest("api/v1/login", newUserData, "post", null, {
    "accept": "*/*",
    "Content-Type": "application/json"
  });
  if (responseLogin.status === 200 && responseLogin.data.access) {
    const accessToken = responseLogin.data.access;
    const responseDelete = await sendRequest("/api/v1/my/account", null, "delete", accessToken);
    expect(responseDelete.status).to.equal(200, `Account deletion failed with status: ${responseDelete.status}`);
  } else return;
});

When(/the user fills in the "([^"]*)" page "([^"]*)" "([^"]*)" with "([^"]*)"/, async function (page, element, type, text) {
  await Pages[page][camelize(`${element}${type}`)].setValue(text);
});