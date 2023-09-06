@002 @signIn

Feature: EPMRDPEMAP-201 - The SingIn feature

  Scenario Outline: 1. Verify that the user with valid data can sing in
    Given the user is open "signIn" page
    When The user sing-ins with <email> and <password>
    Then the User should be redirected to the Home page

    Examples:
      | email                 | password   |
      | test.user@example.com | secreT!123 |