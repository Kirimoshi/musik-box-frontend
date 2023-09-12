/* eslint-disable no-undef */
import { Given, When, Then } from "@wdio/cucumber-framework";
import Pages from "../pageObjects/pages";
const { camelize } = require("../utils/helpers");

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
    if (currentElement.length === 0) {
      throw new Error(`Element wasn't found`);
    } else if (numeral) {
      const elementToClick = await currentElement[numeral - 1];
      await elementToClick.click();
      await browser.pause(2000)
    }
    else {
      await currentElement.click();
      await browser.pause(2000)
    }
  });

When(/^The user logging out$/, async () => {
  await Pages.home.logout();
});

When(/^the Internet connection is interrupted$/, async () => {
  await browser.throttle("offline");
});
