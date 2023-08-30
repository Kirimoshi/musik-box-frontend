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

When(/the user sing-ups with "([^"]*)", "([^"]*)", "([^"]*)", and "([^"]*)"/,
    async function (nickname, email, password, confirmPassword) {
    await Pages['signUp'].singUpToTheApplication(nickname, email, password, confirmPassword);
});

Then(/"([^"]*)" "([^"]*)" "([^"]*)" text is: "([^"]*)"/, async function (page, element, type, expectedText) {
    let currentText
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