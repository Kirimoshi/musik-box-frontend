/* eslint-disable no-undef */
import { Given, When, Then } from "@wdio/cucumber-framework";
import Pages from "../pageObjects/pages";
const { camelize } = require("../../utils/helpers");
const { assert } = require("chai");
const browserOption = browser.options;

const pagesUrl = {
  admin: Pages['admin'].url,
  playlist_comments: Pages['playlist_comments'].url,
  login: Pages['login'].url
};

Then(/the user is on the "([^"]*)" page/, async function (page) {
  let expectedUrl = await browser.getUrl();
  let actualUrl;
  const baseurl = browserOption.baseUrl;
  const adminUrl = baseurl + pagesUrl["admin"] + "/";
  if (pagesUrl[page] === "base") {
    actualUrl = await baseurl;
  } else if (pagesUrl[page] === "admin") {
    actualUrl = await baseurl + pagesUrl[page];
  } else {
    actualUrl = adminUrl + pagesUrl[page];
  }
  assert.equal(await expectedUrl, actualUrl, `Expected url: ${actualUrl} is not found`);
});

Then(/the "([^"]*)" page has "([^"]*)"/, async (page, element) => {
  let currentElement = await Pages[page][camelize(`${element}`)].isDisplayed();
  assert.isTrue(await currentElement, `${currentElement} is not displayed`)
});

Then(/the "([^"]*)" page (\d+)? ?"([^"]*)" has the initial value/, async function (page, numeral, element) {
  this.initialValue = await Pages[page][camelize(`${element}`)][numeral].getText();
});

Then(/the (\d+)? ?"([^"]*)" is deleted from "([^"]*)" page/, async function (numeral, element, page) {
  let currentValue = await Pages[page][camelize(`${element}`)][numeral].getText();
  assert.equal(Number(currentValue), Number(this.initialValue) - 1,
    `Expected the current value to be one less than the ${this.initialValue}`)
});

Then(/"([^"]*)" page "([^"]*)" "([^"]*)" text is: "([^"]*)"/, async function (page, element, type, expectedText) {
  let currentElemText;
  await browser.waitUntil(async function () {
    currentElemText = await Pages[page][camelize(`${element}${type}`)].getText()
    return currentElemText
  }, {
    timeout: 5000,
    timeoutMsg: 'expected text to be changed after 5s'
  })
  if (currentElemText.includes('\n')) {
    currentElemText = await currentElemText.split('\n').join(' ');
  }
  assert.equal(await currentElemText, expectedText, `${page} doesn't match ${expectedText} value`)
});