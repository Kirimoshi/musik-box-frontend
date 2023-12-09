/* eslint-disable no-undef */
import { Given, When, Then } from "@wdio/cucumber-framework";
import Pages from "../pageObjects/pages";
import BaseElements from "../pageObjects/elements/baseElements";
const {
  camelize,
  sendRequest,
  withoutEndpointPage,
  pageNumber
} = require("../../utils-user/helpers");
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

Then(/the user clicks on the "([^"]*)" (page )?"([^"]*)" (form )?"([^"]*)" (\d+)? ?element/,
  async function (place, ifPage, element, form, type, numeral) {
  let elementToClick;
  await browser.waitUntil(async function () {
  if (numeral) {
    elementToClick = await Pages[place][camelize(`${element}${type}`)][numeral - 1];
  } else if (ifPage || form) {
    elementToClick = await Pages[place][camelize(`${element}${type}`)];
  } else if (place === "sidebar" || place === "pagination") {
    elementToClick = await BaseElements[place][camelize(`${element}${type}`)];
  } else {
    throw new Error(`${elementToClick} wasn't found`)
  }
    return elementToClick.isClickable();
  }, {
    timeout: 10000,
    timeoutMsg: 'expected element to be defined after 10s'
  });
    await elementToClick.click();
    await browser.pause(500);
});

When(/^the user logging out$/, async () => {
  await Pages.home.logout();
});

When(/^the Internet connection is interrupted$/, async () => {
  await browser.throttle("offline");
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
    const allSongsResponse = await sendRequest("api/v1/songs?per_page=100&page=1", "get");
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

Then(/the user "([^"]*)" "([^"]*)" in the "([^"]*)" "([^"]*)" as: "([^"]*)"/,
  async function (element, type, page, place, value) {
    if (place === "New Playlist" || place === "Search Box" || place === "Edit Playlist") {
      await Pages[page][camelize(`${place}${type}${element}`)].clearValue();
      await Pages[page][camelize(`${place}${type}${element}`)].setValue(value);
    } else {
      await Pages[page][camelize(`${type}${element}`)].clearValue();
      await Pages[page][camelize(`${type}${element}`)].setValue(value);
    };
});

Then("the user deletes personal account", async () => {
  const responseLogin = await sendRequest("api/v1/login", newUserData, "post", null, {
    "accept": "*/*",
    "Content-Type": "application/json"
  });
    const accessToken = await responseLogin.data.access;
    await sendRequest("/api/v1/my/account", null, "delete", accessToken);
});

Then(/the user is open "([^"]*)" "([^"]*)" in the "([^"]*)" page/,
  async function (itemName, currentItem, place) {
    await BaseElements['sidebar'][camelize(`${place}Button`)].click();
    const valueInput = await Pages[place].searchBoxValueInput;
    const searchButton = await Pages[place].searchIcon;
    const currentElement = await Pages[place][camelize(`${place}Item`)];
    await valueInput.setValue(itemName);
    await searchButton.click();
    await currentElement.click();
    const currentUrl = await browser.getUrl();
    currentItem = await pageNumber();
    const currentPlaylist = await withoutEndpointPage(await currentUrl) + currentItem;
    assert.equal(await currentUrl, currentPlaylist);
});
