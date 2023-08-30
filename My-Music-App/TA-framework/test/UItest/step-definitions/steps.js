import {Given, When, Then} from "@wdio/cucumber-framework";
import Pages from "../pageObjects/pages";

const browserOption = browser.options;

const {
    camelize
} = require("../utils/helpers");

const {
    assert
} = require('chai');

Given(/the user is open "([^"]*)" page/, async function (page) {
    await Pages[page].open();
});

When(/^The user sing-ups with (.*), (.*), (.*), and (.*)$/, async (nickname, email, password, confirmPassword) => {
    await Pages.signUp.singUp(nickname, email, password, confirmPassword);
});

When(/^The user sing-ins with (.*) and (.*)$/, async (email, password) => {
    await Pages.signIn.singIn(email, password);
});

When(/^The user logging out$/, async () => {
    await Pages.home.logout();
});

Then(/^(.*) message should be displayed: (.*)$/, async (elementType, errorMessage) => {
    await Pages.signUp.checkErrorMessage(elementType, errorMessage);
});

Then(/^the user should be redirected to the (\w+) page$/, async (page) => {
    await browser.waitUntil(async function () {
        currentText = await Pages[page][camelize(`${element}${type}`)].getText()
        return currentText
    },{
        timeout: 5000,
        timeoutMsg: 'expected text to be changed after 5s'
    })
    assert.equal(currentText, expectedText, `${page} doesn't match ${expectedText} value`)
});

Then(/the user is on the "([^"]*)" page/, async function (page) {
    let expectedUrl;
    const actualUrl = browserOption.baseUrl + page;
    await browser.waitUntil(async function() {
        expectedUrl = await browser.getUrl();
        return expectedUrl === actualUrl
    }, {
        timeout: 5000,
        timeoutMsg: 'expected link to be changed after 5s'
    });
    assert.equal(expectedUrl, actualUrl, `Expected url: ${actualUrl} is not found`);
});