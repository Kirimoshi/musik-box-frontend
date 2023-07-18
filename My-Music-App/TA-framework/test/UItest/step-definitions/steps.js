import {Given, When, Then} from "@wdio/cucumber-framework";
import Pages from "../pageObjects/Pages";

Given(/^the user is on the (\w+) page$/, async (page) => {
    await Pages[page].open();
});

When(/^The user sing-ups with (.*), (.*), (.*), and (.*)$/, async (nickname, email, password, confirmPassword) => {
    await Pages.signUp.singUp(nickname, email, password, confirmPassword);
});

Then(/^(.*) message should be displayed: (.*)$/, async (elementType, errorMessage) => {
    await Pages.signUp.checkErrorMessage(elementType, errorMessage);
});

Then(/^the user should be redirected to the (\w+) page$/, async (page) => {
    await browser.waitUntil(async function () {
        return (await browser.getUrl()).includes(page);
    }, {
        timeout: 5000,
        timeoutMsg: `Error: expected page was changed to ${page}`
    });
});