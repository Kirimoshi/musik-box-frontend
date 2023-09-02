@002 @signIn

Feature: The SingIn feature
  Background: Opening "signIn" page
    Given the user is open "signIn" page

  Scenario Outline: Verify that the user with valid data can sing in
  When the user sing-in with <email> and <password>
  Then the user clicks on the "Remember Me" "Checkbox" in the "signIn" page
  Then the user is on the "base" page
  Examples:
      | email | password             |
      | "Valid25@ukr.net"  | "Qwer212@#" |
   