@002 @signIn

Feature: EPMRDPEMAP-201 - The SingIn feature

  Scenario Outline: Verify that the user with valid data can sing in
    When the user is open "signIn" page
    Then the user is on the "signIn" page
    When the user sing-ins with <email> and <password>
    Then the User should be redirected to the Home page

    Examples:
      | email                   | password     |
      | "test.user@example.com" | "secreT!123" |