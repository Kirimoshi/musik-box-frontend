/* eslint-disable no-undef */
import { Then } from "@wdio/cucumber-framework";
import Pages from "../pageObjects/pages";
const {
  camelize,
  pageNumber,
  withoutEndpointPage
} = require("../../utils/helpers");
const { assert, expect } = require("chai");

const pagesUrl = {
  home: Pages['home'].url,
  signUp: Pages['signUp'].url,
  signIn: Pages['signIn'].url,
  base: Pages['base'].url,
  playlists: Pages['playlists'].url,
  playlist: Pages['playlist'].url
};

Then(/the user is on the ("([^"]*)"\s)?"([^"]*)" page/, async function (currentPageNumber, page) {
  const currentUrl = await browser.getUrl();
  let expectedUrl;
  let actualUrl;

  if (currentPageNumber) {
    currentPageNumber = await pageNumber();
    actualUrl = await withoutEndpointPage(await currentUrl) + currentPageNumber;
  }
  else {
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

Then(/^(.*) message should be displayed: (.*)$/,
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

Then(/the "([^"]*)" page "([^"]*)" has the initial length/, async function (page, element) {
  let currentElement = await Pages[page][camelize(`${element}`)];
  this.initialLength = await currentElement.length;
});

Then(/the "([^"]*)" song is (not )?deleted from "([^"]*)"/, async function (page, ifNotDeleted, element) {
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