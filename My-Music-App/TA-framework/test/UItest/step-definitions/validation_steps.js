/* eslint-disable no-undef */
import { Then } from "@wdio/cucumber-framework";
import Pages from "../pageObjects/pages";
const {
  camelize,
  pageNumber,
  withoutEndpointPage
} = require("../../utils-user/helpers");
const { PagesUrl } = require("../../utils-user/data");
import BaseElements from "../pageObjects/elements/baseElements";
const { assert, expect } = require("chai");


Then(/the user is on the ("([^"]*)"\s)?"([^"]*)" page/, async function (currentPageNumber, page) {
  const currentUrl = await browser.getUrl();
  let expectedUrl;
  let actualUrl;
  if (currentPageNumber) {
    currentPageNumber = await pageNumber();
    actualUrl = await withoutEndpointPage(await currentUrl) + currentPageNumber;
  }
  else {
    actualUrl = await withoutEndpointPage(await currentUrl) + PagesUrl[page];
  }
  await browser.waitUntil(async function () {
    expectedUrl = await browser.getUrl();
    return expectedUrl === actualUrl;
  }, {
    timeout: 5000,
    timeoutMsg: 'expected link to be changed after 5s'
  });
  await browser.pause(500);
  assert.equal(expectedUrl, actualUrl, `Expected url: ${actualUrl} is not found`);
});

Then(/"([^"]*)" (page )?"([^"]*)" "([^"]*)" is: "([^"]*)"/, async function (place, page, element, type, expectedText) {
  let currentElementText;
  await browser.waitUntil(async function () {
  if (place === "alert" || place === "sidebar") {
    currentElementText = await BaseElements[place][camelize(`${element}${type}`)].getText();
  } else if (page) {
    currentElementText = await Pages[place][camelize(`${element}${type}`)].getText();
  }
    return currentElementText
  }, {
    timeout: 5000,
    timeoutMsg: 'expected text to be changed after 5s'
  })
  if (currentElementText.includes('\n')) {
    currentElementText = await currentElementText.split('\n').join(' ');
  }
  await browser.pause(500);
  assert.equal(currentElementText, expectedText, `${place} doesn't match ${expectedText} value`)
});

Then(/^(.*) message should be displayed: (.*)$/,
  async (elementType, errorMessage) => {
  const currentPageUrl = await browser.getUrl();
  if (currentPageUrl.includes("sign-up")) {
    await Pages.signUp.checkErrorMessage(elementType, errorMessage);
  } else {
  await Pages.home.checkLogoutMessage(elementType, errorMessage);
    }
  }
);

Then(/the "([^"]*)" page "([^"]*)" elements have the initial length/, async function (page, element) {
  let currentElement = await Pages[page][camelize(`${element}`)];
  this.initialLength = await currentElement.length;
});

Then(/the "([^"]*)" page "([^"]*)" elements length are (not )?less than the initial length for one item/, async function (page, element, ifNotDeleted) {
  let currentElement = await Pages[page][camelize(`${element}`)];
  if (ifNotDeleted) {
    let ifCanceled = await currentElement.length;
    assert.equal(await ifCanceled, this.initialLength, `Expected the length to be ${this.initialLength}`)
  } else {
    let ifDeleted = await currentElement.length;
    assert.equal(await ifDeleted, this.initialLength - 1,
      `Expected the length to be one less than the ${this.initialLength} length`)
  }
});

Then(/the user storage data is (not )?empty/, async function (IfNotEmpty) {
  let localStorageData;
  if (IfNotEmpty) {
    localStorageData = await browser.execute(() => {
      return localStorage.isRemembered === "true" && localStorage.length > 0;
    })
  } else {
    localStorageData = await browser.execute(() => {
      return localStorage.length === 0;
    })
  }
  assert.isTrue(await localStorageData, `Expected result isn't ${localStorageData}`);
});

Then(/"([^"]*)" page "([^"]*)" "([^"]*)" is displayed/, async function (page, element, type) {
  let currentElement = await Pages[page][camelize(`${element}${type}`)]
  assert.isTrue(await currentElement.isDisplayed())
})

Then(/"([^"]*)" "([^"]*)" has "([^"]*)" "([^"]*)"/, async function (page, element, el, type,) {
  let elementImg = await Pages[page][camelize(`${element}${type}`)][0].getAttribute('alt')
  assert.equal(await elementImg, el)
})
