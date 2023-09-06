/* eslint-disable no-undef */
import { Given, When, Then } from "@wdio/cucumber-framework";
import Pages from "../pageObjects/pages";
const { camelize } = require("../utils/helpers");
const { assert, expect } = require("chai");
const browserOption = browser.options;

Given(/the user is open "([^"]*)" page/, async function (page) {
  await Pages[page].open();
});

Then(/the user is on the "([^"]*)" page/, async function (page) {
  let expectedUrl;
  const actualUrl = browserOption.baseUrl + page;
  await browser.waitUntil(
    async function () {
      expectedUrl = await browser.getUrl();
      return expectedUrl === actualUrl;
    },
    {
      timeout: 5000,
      timeoutMsg: "expected link to be changed after 5s",
    }
  );
  assert.equal(
    expectedUrl,
    actualUrl,
    `Expected url: ${actualUrl} is not found`
  );
});

When(
  /the user sing-ups with "([^"]*)", "([^"]*)", "([^"]*)", and "([^"]*)"/,
  async function (nickname, email, password, confirmPassword) {
    await Pages["signUp"].singUpToTheApplication(
      nickname,
      email,
      password,
      confirmPassword
    );
  }
);

Then(
  /"([^"]*)" "([^"]*)" "([^"]*)" text is: "([^"]*)"/,
  async function (page, element, type, expectedText) {
    let currentText;
    await browser.waitUntil(
      async function () {
        currentText = await Pages[page][
          camelize(`${element}${type}`)
        ].getText();
        return currentText;
      },
      {
        timeout: 5000,
        timeoutMsg: "expected text to be changed after 5s",
      }
    );
    assert.equal(
      currentText,
      expectedText,
      `${page} doesn't match ${expectedText} value`
    );
  }
);

When(/^The user sing-ins with (.*) and (.*)$/, async (email, password) => {
  await Pages.signIn.singIn(email, password);
});

When(/^The user logging out$/, async () => {
  await Pages.home.logout();
});

Then(
  /^(.*) message should be displayed: (.*)$/,
  async (elementType, errorMessage) => {
    const currentPageUrl = await browser.getUrl();
    if (currentPageUrl.includes("SignUp")) {
      await Pages.signUp.checkErrorMessage(elementType, errorMessage);
    } else {
      await Pages.home.checkLogoutMessage(elementType, errorMessage);
    }
  }
);

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
});
