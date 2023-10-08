/* eslint-disable no-undef */
import { Given, When, Then } from "@wdio/cucumber-framework";
import Pages from "../pageObjects/pages";
const { camelize, sendRequest } = require("../../utils-user/helpers");
const { userData } = require("../../utils-user/data");
const { assert, expect } = require("chai");


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

When(/the user sing-ins with "([^"]*)" and "([^"]*)"/, async (email, password) => {
  await Pages.signIn.singIn(email, password);
});

Then(/the user clicks on the "([^"]*)" page (\d+)? ?"([^"]*)" "([^"]*)"/,
  async function (page, numeral, element, type) {
    let currentElement = await Pages[page][camelize(`${element}${type}`)];
    let elementToClick
    if (currentElement.length === 0) {
      throw new Error(`Element wasn't found`);
    } else if (numeral) {
      elementToClick = await currentElement[numeral - 1];
    } else {
      elementToClick = await currentElement;
    }
    await elementToClick.click();
    await browser.pause(3000);
  });

When(/^The user logging out$/, async () => {
  await Pages.home.logout();
});

When(/^the Internet connection is interrupted$/, async () => {
  await browser.throttle("offline");
});

Then("the user tries to log in and delete account if it exists", async () => {
  const responseLogin = await sendRequest("api/v1/login", userData, "post", null, {
    "accept": "*/*",
    "Content-Type": "application/json"
  });
  if (responseLogin.status === 200 && responseLogin.data.access) {
    const accessToken = responseLogin.data.access;
    const responseDelete = await sendRequest("/api/v1/my/account", null, "delete", accessToken);
    expect(responseDelete.status).to.equal(200, `Account deletion failed with status: ${responseDelete.status}`);
  } else return;
});