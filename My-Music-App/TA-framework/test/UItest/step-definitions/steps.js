/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { Given, When, Then } from "@wdio/cucumber-framework";
import Pages from "../pageObjects/pages";
const { camelize, sendRequest } = require("../utils/helpers");
const { assert, expect } = require("chai");
const browserOption = browser.options;
const {signUpData} = require("../utils/data")

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
      actualUrl = await baseurl;
    }
    else if (numeral) {
      let url = await browser.getUrl();
      let lastUrlChar = await url.split('').at(-1)
      numeral = await lastUrlChar
      actualUrl = playlistsUrl + pagesUrl[page] + numeral;
    }
    else {
       actualUrl = await baseurl + pagesUrl[page];
  }
    await browser.waitUntil(async function() {
      expectedUrl = await browser.getUrl();
      return expectedUrl === actualUrl;
      
    }, {
        timeout: 5000,
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

Then(/"([^"]*)" page "([^"]*)" "([^"]*)" text is: "([^"]*)"/,async function (page, element, type, expectedText) {
  let currentElemText;
    await browser.waitUntil(async function () {
        currentElemText = await Pages[page][camelize(`${element}${type}`)].getText()
        return currentElemText
    },{
        timeout: 5000,
        timeoutMsg: 'expected text to be changed after 5s'
    })
  if (currentElemText.includes('\n')) {
        currentElemText = await currentElemText.split('\n').join(' ');
      }
    assert.equal(await currentElemText, expectedText, `${page} doesn't match ${expectedText} value`)
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

Then(/the "([^"]*)" page "([^"]*)" has the initial length/, async function (page, element) {
  let currentElement = await Pages[page][camelize(`${element}`)];
  this.initialLength = await currentElement.length
});

Then(/the "([^"]*)" song is (not )?deleted from "([^"]*)"/, async function (page, ifNotDeleted, element) {
  let currentElement = await Pages[page][camelize(`${element}`)];
  if (ifNotDeleted) {
    let ifCanceled = await currentElement.length;
    assert.equal(await ifCanceled, this.initialLength,`Expected the length to be ${this.initialLength}`)
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

Then("the user tries to log in and delete account if it exists", async () => {
  const responseLogin = await sendRequest("api/v1/login", signUpData, "post", null, {
    "accept": "*/*",
    "Content-Type": "application/json"
  });
    if (responseLogin.status === 200 && responseLogin.data.access) {
      const accessToken = responseLogin.data.access;
      const responseDelete = await sendRequest("/api/v1/my/account", null, "delete", accessToken);
      expect(responseDelete.status).to.equal(200, `Account deletion failed with status: ${responseDelete.status}`);
    } else return;
});
