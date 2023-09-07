/* eslint-disable no-undef */
import { Given, When, Then } from "@wdio/cucumber-framework";
import Pages from "../pageObjects/pages";
const { camelize } = require("../utils/helpers");
const { assert, expect } = require("chai");
const browserOption = browser.options;

const pagesUrl = {
    home: Pages['home'].url,
    signUp: Pages['signUp'].url,
    signIn: Pages['signIn'].url,
    base: Pages['base'].url,
    playlists: Pages['playlists'].url,
    playlist: Pages['playlist'].url
};

Given(/the user is open "([^"]*)" page/, async function (page) {
  await Pages[page].open();
});

Then(/the user is on the (\d+)? ?"([^"]*)" page/, async function (numeral, page) {
    let expectedUrl;
    let actualUrl;
    const baseurl = browserOption.baseUrl;
    const playlistsUrl = baseurl + pagesUrl["playlists"] + "/";
    if (pagesUrl[page] === "base" || pagesUrl[page] === 'home') {
        actualUrl = baseurl;
    }
    else if (numeral) {
        actualUrl = playlistsUrl + pagesUrl[page] + numeral;
    }
    else {
        actualUrl = baseurl + pagesUrl[page]
    }
    await browser.waitUntil(async function() {
        expectedUrl = await browser.getUrl();
        return expectedUrl === actualUrl
    }, {
        timeout: 10000,
        timeoutMsg: 'expected link to be changed after 5s'
    });
    assert.equal(expectedUrl, actualUrl, `Expected url: ${actualUrl} is not found`);
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
    let currentElement = await Pages[page][camelize(`${element}${type}`)]
    if (numeral) {
        const elementToClick = await currentElement[numeral - 1];
        await elementToClick.click();
        await browser.pause(2000);
    }else {
        await currentElement.click();
        await browser.pause(2000);
    }
    });

Then(/"([^"]*)" page "([^"]*)" "([^"]*)" text is: "([^"]*)"/,async function (page, element, type, expectedText) {
    let currentText
    await browser.waitUntil(async function () {
        currentText = await Pages[page][camelize(`${element}${type}`)].getText()
        return currentText
    },{
        timeout: 10000,
        timeoutMsg: 'expected text to be changed after 5s'
    })
    assert.equal(currentText, expectedText, `${page} doesn't match ${expectedText} value`)
});

When(/^The user logging out$/, async () => {
  await Pages.home.logout();
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

When(/^the Internet connection is interrupted$/, async () => {
  await browser.throttle("offline");
});

Then(/the "([^"]*)" song is (not )?deleted from "([^"]*)"/, async function (page, ifNot, element) {
    let currentElement = await Pages[page][camelize(`${element}`)];
    let initialLength = await currentElement.length;
    if (ifNot) {
        this.length = await currentElement.length;
        assert.equal(await this.length, initialLength, `Expected the length to be ${initialLength}`)
    } else {
        let currentLength = await currentElement.length;
        assert.equal(await currentLength, this.length - 1, `Expected the length to be one less than the ${initialLength} length`);
    }
});