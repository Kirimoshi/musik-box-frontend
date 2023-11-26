/* eslint-disable no-undef */
import { Then } from "@wdio/cucumber-framework";
import Pages from "../pageObjects/pages";
const {
  camelize,
  pageNumber,
  withoutEndpointPage,
  sendRequest
} = require("../../utils-user/helpers");
const { PagesUrl } = require("../../utils-user/data");
import BaseElements from "../pageObjects/elements/baseElements";
const { assert } = require("chai");


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
    timeout: 10000,
    timeoutMsg: 'expected link to be changed after 10s'
  });
  assert.equal(expectedUrl, actualUrl, `Expected url: ${actualUrl} is not found`);
});

Then(/"([^"]*)" (page )?"([^"]*)" "([^"]*)" is: "([^"]*)"/,
  async function (place, page, element, type, expectedText) {
  let currentElementText;
  await browser.waitUntil(async function () {
  if (place === "toastify" || place === "sidebar") {
    currentElementText = await BaseElements[place][camelize(`${element}${type}`)].getText();
  } else if (page) {
    currentElementText = await Pages[place][camelize(`${element}${type}`)].getText();
    if (currentElementText.includes('\n')) {
    currentElementText = await currentElementText.split('\n').join(' ');
    }
  } else {
    throw new Error(`The ${expectedText} wasn't found`);
  }
    return currentElementText === expectedText;
  }, {
    timeout: 10000,
    timeoutMsg: 'expected text to be changed after 10s'
  })
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
  const currentPageUrl = await browser.getUrl();
  if (currentPageUrl.includes("sign-up")) {
    await Pages.signUp.checkErrorMessage(elementType, errorMessage);
  } else {
  await Pages.home.checkLogoutMessage(elementType, errorMessage);
    }
  }
});

Then(/the "([^"]*)" page "([^"]*)" elements have the initial length/, async function (page, element) {
  let currentElement;
  await browser.waitUntil(async function () {
    currentElement = await Pages[page][camelize(`${element}`)];
    return currentElement !== undefined;
  }, {
    timeout: 10000,
    timeoutMsg: 'expected element to be defined after 10s'
  });
  this.initialLength = await currentElement.length;
});

Then(/the "([^"]*)" page "([^"]*)" elements length are (not )?less than the initial length for one item/, async function (page, element, ifNotDeleted) {
  if (ifNotDeleted) {
    let notDeleted = await Pages[page][camelize(`${element}`)];
    assert.equal(await notDeleted.length, this.initialLength,
      `Expected the length to be ${this.initialLength}`)
  } else {
    let ifDeleted;
    await browser.waitUntil(async () => {
      ifDeleted = await Pages[page][camelize(`${element}`)];
      return ifDeleted.length < this.initialLength;
    }, {
      timeout: 15000,
      timeoutMsg: `expected element to be defined after 15s`
    });
    assert.equal(await ifDeleted.length, this.initialLength - 1,
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

Then(/"([^"]*)" is displayed on "([^"]*)" page/, async function (element, page) {
  let currentElement = await Pages[page][camelize(`${element}`)];
   await browser.waitUntil(async () => {
     return await currentElement !== undefined;
   }, {
     timeout: 10000,
     timeoutMsg: `Element ${currentElement} did not exist in 10 seconds`
   });
   await expect(await currentElement).toBeDisplayed();
});

Then(/"([^"]*)" (\d+)? ?(elements|element)? ?of "([^"]*)" are (not )?displayed on "([^"]*)" page/,
  async function (element, numeral, elementType, elementsArray, notDisplayed, page) {
  let currentElement = await Pages[page][camelize(`${element}`)];
  let currentElementsArray = await Pages[page][camelize(`${elementsArray}`)];

  for (let i = 0; i < currentElementsArray.length; i++) {
    await browser.waitUntil(async () => {
      return await currentElement[i].isExisting();
    }, {
      timeout: 10000,
      timeoutMsg: `Element ${currentElement[i]} did not exist in 10 seconds`
    });
    await expect(currentElement[i]).toBeDisplayed();

    if (notDisplayed) {
      let ifNotDisplayed = await currentElement[i].isDisplayed();
      assert.isFalse(await ifNotDisplayed, `Expected ${currentElement[i]} element to be not displayed`)
    } else if (elementType === "element") {
      await expect(currentElement[numeral]).toBeDisplayed();
    }
  }
});

Then(/every playlist in "([^"]*)" on the "([^"]*)" page has ([^"]*) songs/, async function (playlistList, page, number) {
  const playlistItems = await Pages[page][playlistList];
  const expectedNumberOfSongs = Number(number);

  for (const playlist of playlistItems) {
    const currentPlaylistSongs = await playlist.$$('span[data-song-id]');
    expect(currentPlaylistSongs.length).toEqual(expectedNumberOfSongs);
  }
});

Then(/"([^"]*)" page has no more than ([^"]*) elements in "([^"]*)"/, async function (page, number, element) {
  let playlistItems = await Pages[page][camelize(`${element}`)];
  let playlistItemsLength = Number(await playlistItems.length);
  let expectedNumberOfPlaylists = Number(number);
  await expect(playlistItemsLength).toBeLessThanOrEqual(expectedNumberOfPlaylists)
});

Then(/every element of "([^"]*)" on the "([^"]*)" page is clickable/, async function (elementsArray, page) {
  let currentElementsArray = await Pages[page][(`${elementsArray}`)];
  for (let i = 0; i < currentElementsArray.length; i++) {
    await expect(currentElementsArray[i]).toBeClickable();
  }
});

Then(/playlists in "([^"]*)" on the "([^"]*)" page are ordered by (the number of likes|playlist name) ?in (ascending|descending) ?order/,
  async function (playlistList, page, elementType, order) {
    if (elementType === "the number of likes" && order === "descending") {
      let listItems = await Pages[page][(`${playlistList}`)];
      for (let i = 0; i < listItems.length - 1; i++) {
        let playlistItem = await listItems[i];
        let currentPlaylistLikesCounter = Number(await playlistItem.$('span[data-likes-id]').getText());
        let nextPlaylistLikesCounter = Number(await listItems[i + 1].$('span[data-likes-id]').getText());
        await expect(currentPlaylistLikesCounter).toBeGreaterThanOrEqual(nextPlaylistLikesCounter)
      }
    } else if (elementType === "playlist name" && order === "ascending") {
      let playlistItems = await Pages[page][(`${playlistList}`)];
      let playlistNames = [];
      for (let i = 0; i < playlistItems.length - 1; i++) {
        let playlistItem = await playlistItems[i];
        let currentPlaylistName = await playlistItem.$('.public-playlist-card__name').getText();
        playlistNames.push(currentPlaylistName);
      }
      let sortedPlaylistItems = playlistNames.sort();
      await expect(playlistNames).toEqual(sortedPlaylistItems);
    } else if (elementType === "playlist name" && order === "descending") {
      let unsortedPlaylistItems = await Pages[page][(`${playlistList}`)];
      let playlistNames = [];
      for (let i = 0; i < unsortedPlaylistItems.length - 1; i++) {
        let playlistItem = await unsortedPlaylistItems[i];
        let currentPlaylistName = await playlistItem.$('.public-playlist-card__name').getText();
        playlistNames.push(currentPlaylistName);
      }
      let sortedPlaylistItems = playlistNames.sort().reverse();
      await expect(playlistNames).toEqual(sortedPlaylistItems);
    } else {
      throw new Error("The elements are sorted wrong");
    }
  });

Then(/"([^"]*)" page "([^"]*)" "([^"]*)" contains next text: "([^"]*)"/, async function (page, element, type, expectedText) {
  const expectedTextInLowerCase = expectedText.toLowerCase();
  let textToCheck;
  await browser.waitUntil(async function () {
    let elementText = await Pages[page][camelize(`${element}${type}`)];
    for (let elements of elementText) {
      textToCheck = await elements.getText();
      return textToCheck;
    }
  }, {
    timeout: 10000,
    timeoutMsg: 'expected element to be defined after 10s'
  });
  const currentElementText = await textToCheck.toLowerCase();
  await browser.pause(500);
  expect(currentElementText).toContain(expectedTextInLowerCase);
});

Then(/the "([^"]*)" (not added|added) in the "([^"]*)" page songs list/,
  async function (element, ifadded, page) {
    let songNameArray = await Pages[page][camelize(`${element}Name`)];
    let existingSongs = await Promise.all(songNameArray.map(async (el) => {
      return el.getText();
    }));
    
    await browser.waitUntil(() => {
      return existingSongs.includes(this.songToAdd[0]);
    }, {
      timeout: 15000,
      timeoutMsg: 'Song was not found in the list within 15 seconds'
    });
    if (ifadded === "added") {
      assert.include(existingSongs, this.songToAdd[0], "Song is not found")
      await Pages[page].deleteLastAddedSong()
    } else if (ifadded === "not added") {
      assert.include(existingSongs, this.songToAdd[0], "Song is not found")
    }
  });

Then(/"([^"]*)" "([^"]*)" placeholder is "([^"]*)"/, async function (page, element, searchPlaceholder) {
  const searchElem = await Pages[page][camelize(`${element}`)];
  assert.equal(await searchElem.getAttribute('placeholder'),
    searchPlaceholder, `SearchField doesn't match ${searchPlaceholder} value`);
});

Then(/the "([^"]*)" is added to the "([^"]*)" page "([^"]*)"/, async function (value, page, place) {
  const elementList = await Pages[page][camelize(`${place}`)];
  let commentsArray = await Promise.all(elementList.map(async (el) => {
    return el.getText();
  }));
  await browser.waitUntil(() => {
    return commentsArray.includes(value);
  }, {
    timeout: 10000,
    timeoutMsg: 'Comment was not found in the list within 10 seconds'
  });
  assert.equal(commentsArray[0], value, "Comment is not found")
});

Then(/the "([^"]*)" in the "([^"]*)" page is "([^"]*)" and click is "([^"]*)"/,
  async function (element, page, status, isClickable) {
  const currentElement = await Pages[page][camelize(`${element}`)]
  let elementStatus = await currentElement.getAttribute('class');
  let elementIsClickable = await currentElement.getCSSProperty('cursor');
  assert.equal(await elementIsClickable.value, isClickable, `Expected the element to be ${isClickable}`);
  assert.include(await elementStatus, status, `Expected the element to have ${elementStatus} status`);
  });

Then(/the user on the "([^"]*)" page isn't able change "([^"]*)" type to "([^"]*)"/,
  async function (page, element, value) {
  const arrayOfElements = await Pages[page][camelize(`${element}Types`)];
  let arrayOfElementsText = await Promise.all(arrayOfElements.map(async (el) => {
    return el.getText();
  }));
  assert.notInclude(arrayOfElementsText, value, `Expected the element to be ${value}`);
  });

Then(/"([^"]*)" (private|public) playlist is (not )?visible to all app users/,
  async function (element, type, ifNot) {
    const allPlaylistsResponse = await sendRequest("api/v1/playlists?per_page=100&page=1", "get");
    const allPlaylistsArray = await allPlaylistsResponse.data;
    const allPlaylistsNames = await allPlaylistsArray.playlists.data.map(playlist => playlist.attributes.name);
    if (ifNot && type === "private") {
      assert.notInclude(await allPlaylistsNames, element)
    } else if (type === "public") {
      assert.include(await allPlaylistsNames, element)
    } else {
      throw new Error("The element is displayed wrong");
    }
});

Then(/the "([^"]*)" "([^"]*)" is (not )?added to the "([^"]*)" page playlists list/,
  async function (name, element, ifNot, page) {
    const playlistsArray = await Pages[page][camelize(`${element}Name`)];
    const playlistsNames = await Promise.all(playlistsArray.map(async (el) => {
      return el.getText();
    }));
    await browser.waitUntil(() => {
      return playlistsNames!==undefined;
    }, {
      timeout: 10000,
      timeoutMsg: 'Playlist was not found in the list within 10 seconds'
    });
    if (ifNot) {
      assert.notInclude(await playlistsNames, name)
    } else {
      assert.include(await playlistsNames, name)
    }
});

Then(/in the "([^"]*)" page user is able to add "([^"]*)" in the "([^"]*)" with "([^"]*)" formats/,
  async function (page, type, element, value) {
    const currentElement = await Pages[page][camelize(`${element}${type}`)]
    const elementFormats = await currentElement.getAttribute('accept');
    const matches = elementFormats.match(/image\/(\w+)/g);
    const imageFormats = matches.map(match => match.split('/')[1]).join(', ');
    assert.equal(await imageFormats, value)
  });

  Then(/"([^"]*)" page "([^"]*)" "([^"]*)" value is: "([^"]*)"/,
  async function (page, element, type, value) {
    const currentElement = await Pages[page][camelize(`${element}${type}`)]
    const currentElementValue = await currentElement.getValue();
    assert.equal(await currentElementValue, value)
});