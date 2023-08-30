@signOut @003

Feature: EPMRDPEMAP-207 - The SingOut feature

  Background: Opening "signIn" page
    Given the user is open "signIn" page

  Scenario Outline: Verify that the user with valid data can sing in
    When The user sing-ins with <email> and <password>
    Then the user should be redirected to the Home page

    Examples:
      | nickname | email           | password  | confirm password |
      | Scj15    | Valid25@ukr.net | Qwer212@# | Qwer212@#        |
      
  Scenario:
  When The user logging out     