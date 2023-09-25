/* eslint-disable no-undef */
import { Given, When, Then } from "@wdio/cucumber-framework";
import Pages from "../pageObjects/pages";
const {
  camelize,
  pageNumber,
  withoutEndpointPage
} = require("../../utils/helpers");
const { assert } = require("chai");

const pagesUrl = {
  admin: Pages['admin'].url,
  admin_users: Pages['admin_users'].url,
  playlist_comments: Pages['playlist_comments'].url,
  login: Pages['login'].url,
  new_admin: Pages['new_admin'].url,
  edit: Pages['edit'].url
};

Then(/the user is on the ("([^"]*)"\s)?"([^"]*)" page/, async function (currentPageNumber, page) {
  const currentUrl = await browser.getUrl();
  let expectedUrl;
  let actualUrl;

  if (currentPageNumber) {
    currentPageNumber = await pageNumber();
    actualUrl = await withoutEndpointPage(await currentUrl) + currentPageNumber;
  } else {
    actualUrl = await withoutEndpointPage(await currentUrl) + pagesUrl[page];
  }

  await browser.waitUntil(async function () {
    expectedUrl = await browser.getUrl();
    return expectedUrl === actualUrl;
  }, {
    timeout: 5000,
    timeoutMsg: 'expected link to be changed after 5s'
  });

  assert.equal(expectedUrl, actualUrl, `Expected url: ${actualUrl} is not found`);
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
  let currentElementText;
  await browser.waitUntil(async function () {
    currentElementText = await Pages[page][camelize(`${element}${type}`)].getText()
    return currentElementText
  }, {
    timeout: 5000,
    timeoutMsg: 'expected text to be changed after 5s'
  })
  if (currentElementText.includes('\n')) {
    currentElementText = await currentElementText.split('\n').join(' ');
  }
  assert.equal(await currentElementText, expectedText, `${page} doesn't match ${expectedText} value`)
});

Then(/the "([^"]*)" user "([^"]*)" "([^"]*)"/, async function (page, element, type) {
  const currentElement = await Pages[page][camelize(`${element}${type}`)].getText();
  const currentElementDate = currentElement.replace(/\s\d{2}:\d{2}$/, '');
  const date = new Date()
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  const currentDate = date.toLocaleDateString('en-US', options);
  assert.equal(await currentElementDate, currentDate, `${page} doesn't match ${currentDate} value`)
});