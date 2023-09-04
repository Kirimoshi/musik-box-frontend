/* eslint-disable no-undef */
import { Given, When, Then } from "@wdio/cucumber-framework";
import Pages from "../pageObjects/pages";
let expect = require("chai").expect;
const { camelize } = require("../utils/helpers");
const { assert } = require('chai');
const browserOption = browser.options;

Given(/the user is open "([^"]*)" page/, async function (page) {
  await Pages[page].open();
});

When(/^The user sing-ups with (.*), (.*), (.*), and (.*)$/, async (nickname, email, password, confirmPassword) => {
  await Pages.signUp.singUp(nickname, email, password, confirmPassword);
}
);

When(/^The user sing-ins with (.*) and (.*)$/, async (email, password) => {
  await Pages.signIn.singIn(email, password);
});

When(/^The user logging out$/, async () => {
  await Pages.home.logout();
});

Then(/^(.*) message should be displayed: (.*)$/, async (elementType, errorMessage) => {
  const currentPageUrl = await browser.getUrl();
  if (currentPageUrl.includes("SignUp")) {
    await Pages.signUp.checkErrorMessage(elementType, errorMessage);
  } else {
    await Pages.home.checkLogoutMessage(elementType, errorMessage);
  }
}
);

Then(/^the user should be redirected to the (\w+) page$/, async (page) => {
  await browser.waitUntil(
    async function () {
      return (await browser.getUrl()).includes(page);
    },
    {
      timeout: 5000,
      timeoutMsg: `Error: expected page was changed to ${page}`
    });
});

Then(/^the User should be redirected to the Home page$/, async () => {
  await browser.waitUntil(
    async () => {
      return await Pages.home.loginMessage.isDisplayed();
    },
    {
      timeout: 5000,
      timeoutMsg: `Error: expected page was redirected to the ${await browser.getUrl()} page`,
    }
  );
  const homePageUrl = await browser.getUrl();
  return expect(homePageUrl).to.equal("http://localhost:3001/");
});

When(/^the Internet connection is interrupted$/, async () => {
  await browser.throttle("offline");
})
