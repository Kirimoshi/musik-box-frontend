@002 @signIn @Smoke
Feature: EPMRDPEMAP-201 - The SingIn feature

  Scenario Outline: Authenticated user sing-ins to the application
    When the user is open "signIn" page
    Then the user is on the "signIn" page
    When the user sing-ins with <email> and <password>
    Then the user is on the "home" page

    Examples:
      | email                   | password     |
      | "test.user@example.com" | "secreT!123" |