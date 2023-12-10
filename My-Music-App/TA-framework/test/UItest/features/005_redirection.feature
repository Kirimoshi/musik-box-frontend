@005 @PagesRedirection @Smoke
Feature: EPMRDPEMAP-638 - Redirect authorized users from the Sign In and Sign Up pages

  Scenario: Verify that the authorized user redirects to the "home" page from "signIn" page
    Given the user is open "signIn" page
    When the user sing-ins with "test.user@example.com" and "secreT!123"
    Then the user is on the "home" page
    And the user storage data is not empty
    Then the user logging out

  Scenario: Verify that the authorized user redirects to the "signIn" page from "home" page
    Given the user is open "home" page
    Then the user is on the "home" page
    Then the user storage data is not empty
    Then the user is open "signIn" page
    Then the user is on the "signIn" page
    And the user storage data is not empty

  Scenario: Verify that the authorized user redirects to the "home" page from "signUp" page
    Given the user is open "signUp" page
    Then the user is on the "signUp" page
    Then the user storage data is not empty
    When the user is open "home" page
    Then the user is on the "home" page
    And the user storage data is not empty

  Scenario: Verify that the authorized user redirects to the "signUp" page from "home" page
    Given the user is open "home" page
    Then the user is on the "home" page
    And the user storage data is not empty
    When the user is open "signUp" page
    Then the user is on the "signUp" page
    And the user storage data is not empty

  Scenario: Verify that the authorized user redirects to the "signUp" page from "home" page
    Given the user is open "home" page
    Then the user is on the "home" page
    And the user storage data is not empty
    When the user is open "signUp" page
    Then the user is on the "signUp" page
    And the user storage data is not empty

  Scenario: Verify that an authorized user is not redirected to the "signIn" page from the "home" page when he is logged in
    Given the user is open "signIn" page
    When the user sing-ins with "test.user@example.com" and "secreT!123"
    Then the user is on the "home" page
    When the user is open "signIn" page
    Then the user is on the "home" page
    And the user storage data is not empty

  Scenario: Verify that an authorized user is not redirected to the "signUp" page from the "home" page when he is logged in
    Given the user is open "signIn" page
    When the user sing-ins with "test.user@example.com" and "secreT!123"
    Then the user is on the "home" page
    When the user is open "signUp" page
    Then the user is on the "home" page
    And the user storage data is not empty
