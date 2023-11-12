/* eslint-disable no-undef */
import { Given, When, Then } from "@wdio/cucumber-framework";
import Pages from "../pageObjects/pages";
import BaseElements from "../pageObjects/elements/baseElements";
const { camelize, sendRequest } = require("../../utils-user/helpers");
const { userData, newUserData } = require("../../utils-user/data");
const { assert } = require("chai");
const { mockData } = require("../../utils-user/mock_utils");


Given(/the user is open "([^"]*)" page/, async function (page) {
  await Pages[page].open();
});

When(/the user sing-ups with "([^"]*)", "([^"]*)", "([^"]*)", and "([^"]*)"/,
  async function (nickname, email, password, confirmPassword) {
  await Pages["signUp"].singUpToTheApplication(nickname, email, password, confirmPassword)
});

Then(/the user "([^"]*)" to the application/, async function (page) {
  const currentPage = await Pages[page]
  await currentPage.open();
  async function logInToTheSystem() {
    const emailField = await currentPage.inputEmail;
    const passwordField = await currentPage.inputPassword;
    const rememberCheckbox = await currentPage.checkboxRememberMe;
    const confirmButton = await currentPage.signInButton;
    await emailField.setValue(userData.email);
    await passwordField.setValue(userData.password);
    await rememberCheckbox.click();
    await confirmButton.click();
  }
  await logInToTheSystem()
});

When(/the user sing-ins with "([^"]*)" and "([^"]*)"/, async (email, password) => {
  await Pages.signIn.signIn(email, password);
});

When(/the user sing-ins without remembering with "([^"]*)" and "([^"]*)"/, async (email, password) => {
  await Pages.signIn.signInWithoutRemembering(email, password);
});

Then(/the user clicks on the "([^"]*)" (page )?"([^"]*)" "([^"]*)" (\d+)? ?element/,
  async function (place, ifPage, element, type, numeral) {
  let elementToClick;
  if (numeral) {
  await browser.waitUntil(async function () {
    elementToClick = await Pages[place][camelize(`${element}${type}`)][numeral - 1];
    return elementToClick;
    }, {
    timeout: 10000,
    timeoutMsg: 'expected element to be defined after 10s'
    });
  } else if (ifPage) {
    elementToClick = await Pages[place][camelize(`${element}${type}`)];
  } else if (place === "sidebar" || place === "pagination") {
    await browser.pause(500);
    elementToClick = await BaseElements[place][camelize(`${element}${type}`)];
  } else {
    throw new Error("Element is not found")
  }
    expect(elementToClick).toBeDisplayed();
    await elementToClick.click();
    await browser.pause(500);
  });

When(/^the user logging out$/, async () => {
  await Pages.home.logout();
});

When(/^the Internet connection is interrupted$/, async () => {
  await browser.throttle("offline");
});

Then("the user tries to log in and delete account if it exists", async () => {
  const responseLogin = await sendRequest("api/v1/login", newUserData, "post", null, {
    "accept": "*/*",
    "Content-Type": "application/json"
  });
  if (responseLogin.status === 200 && responseLogin.data.access) {
    const accessToken = responseLogin.data.access;
    const responseDelete = await sendRequest("/api/v1/my/account", null, "delete", accessToken);
    expect(responseDelete.status).to.equal(200, `Account deletion failed with status: ${responseDelete.status}`);
  } else return;
});

Then(/the user fills in the "([^"]*)" page "([^"]*)" "([^"]*)" with "([^"]*)"/, async function (page, element, type, text) {
  await Pages[page][camelize(`${element}${type}`)].setValue(text);
});

Then('I run mocking data', async function () {
  const mockTest = await browser.mock(`http://127.0.0.1:3000/api/v1/playlists?page=1&sort_by=&sort_order=&include=songs`, {
    method: "get"
  });

  await mockTest.respond(async () => {
    await browser.waitUntil(async () => {
      return mockData !== undefined;
    }, {
      timeout: 15000,
      timeoutMsg: 'mockData didn`t resolve in 15 seconds'
    });
    return mockData;
  });
});

Then(/the user "([^"]*)" (not )?existing "([^"]*)" "([^"]*)" into add songs search field in the "([^"]*)" page/,
  async function (input, ifNot, song, name, page) {
    const songNameArray = await Pages[page][camelize(`${song}${name}`)];
    const songInput = await Pages[page][camelize(`${song}${input}`)];
    const allSongsResponse = await sendRequest("/api/v1/songs", "get");
    const allSongsArray = await allSongsResponse.data;
    const allSongsNames = await allSongsArray.songs.data.map(song => song.attributes.title);
    this.songToAdd;
    let existingSongs = [];
    await songNameArray.map(async (el) => {
      existingSongs.push(await el.getText());
    });
    if (ifNot) {
      await browser.pause(1000)
      this.songToAdd = allSongsNames.filter(item => !existingSongs.includes(item));
    } else {
      await browser.pause(1000)
      this.songToAdd = allSongsNames.filter(item => existingSongs.includes(item));
    }
    await songInput.setValue(String(this.songToAdd[0]));
});

Then(/the user "([^"]*)" "([^"]*)" in the "([^"]*)" page as: "([^"]*)"/,
  async function (element, type, page, value) {
    await Pages[page][camelize(`${type}${element}`)].setValue(value);
});