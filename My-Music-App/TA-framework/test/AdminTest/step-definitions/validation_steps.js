/* eslint-disable no-undef */
import { Given, When, Then } from "@wdio/cucumber-framework";
import Pages from "../pageObjects/pages";
import BaseElements from "../pageObjects/elements/baseElements";
const {
  camelize,
  pageNumber,
  withoutEndpointPage
} = require("../../utils-admin/helpers");
const { PagesUrl } = require("../../utils-admin/data");
const { assert } = require("chai");


Then(/the admin is on the "([^"]*)" ("([^"]*)"\s)?page/, async function (page, currentPageNumber) {
  const currentUrl = await browser.getUrl();
  let expectedUrl;
  let actualUrl;
  if (currentPageNumber) {
    currentPageNumber = await pageNumber();
    actualUrl = await withoutEndpointPage(await currentUrl) + currentPageNumber;
  } else {
    actualUrl = await withoutEndpointPage(await currentUrl) + PagesUrl[page];
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

Then(/the "([^"]*)" page (\d+)? ?"([^"]*)" has "([^"]*)"/, async (page, numeral, type, element) => {
  let currentElement = await Pages[page][camelize(`${type}${element}`)][numeral - 1];
  let expectedResult;
  if (page === "playlists" && element === "Edit Button") {
    if (typeof currentElement === "undefined") {
      assert.isFalse(currentElement, `${currentElement} is displayed`)
    } else {
      expectedResult = await currentElement;
    }
  } else {
    expectedResult = await currentElement;
  }
  assert.isTrue(await expectedResult.isDisplayed(), `${numeral} ${currentElement} is not displayed`)
});

Then(/the "([^"]*)" page (\d+)? ?"([^"]*)" has the initial value/, async function (page, numeral, element) {
  this.initialValue = await Pages[page][camelize(`${element}`)][numeral].getText();
});

Then(/the (\d+)? ?"([^"]*)" is deleted from "([^"]*)" page/, async function (numeral, element, page) {
  let currentValue = await Pages[page][camelize(`${element}`)][numeral].getText();
  assert.equal(Number(currentValue), Number(this.initialValue) - 1,
    `Expected the current value to be one less than the ${this.initialValue}`)
});

Then(/the "([^"]*)" (page )?"([^"]*)" "([^"]*)" is: "([^"]*)"/, async function (place, page, element, type, expectedText) {
  let currentElementText;
  if (place === "header") {
    currentElementText = await BaseElements[place][camelize(`${element}${type}`)];
  } else if (!page || page) {
     currentElementText = await Pages[place][camelize(`${element}${type}`)];
  } else {
    throw new Error(`${expectedText} wasn't found`)
  }
  assert.equal(await currentElementText.getText(), expectedText, `${place} doesn't match ${expectedText} value`)
});

Then(/the "([^"]*)" is "([^"]*)" "([^"]*)"/, async function (page, element, type) {
  const currentElementDate = await Pages[page][camelize(`${element}${type}`)].getText();
  const formattedCurrentElementDate = await currentElementDate.replace(/\d(?=\D*$)/, '');
  const date = new Date()
  const options = {
    timeZone: 'UTC',
    timeZoneName: 'short',
    year: 'numeric',
    month: 'long',
     day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  };
  const currentDate = date.toLocaleDateString('en-US', options);
  const formattedCurrentDate = currentDate.replace(/ at|\sUTC|\d(?=\D*$)/g, '').trim();
  assert.equal(await formattedCurrentElementDate, formattedCurrentDate, `${page} doesn't match ${currentDate} value`)
});

Then(/the length of "([^"]*)" in the "([^"]*)" page is (\d+)? ?"([^"]*)"/,
  async function (type, page, expectedLength, element) {
    let elementsLength = await Pages[page][camelize(`${type}${element}`)];
    assert.equal(elementsLength.length, expectedLength, `${page} doesn't match ${expectedLength} value`);
});