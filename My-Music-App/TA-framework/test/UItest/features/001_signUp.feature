@001 @signUp

Feature: The SingUp feature
  Background: Opening "signUp" page
    Given the user is open "signUp" page

  Scenario Outline: Verify that the user with valid data can sing up
    When the user tries to log in and delete account if it exists
    Then the user sing-ups with <nickname>, <email>, <password>, and <confirm_password>
    Then the user is on the "signIn" page

    Examples:
      | nickname | email             | password    | confirm_password |
      | "Scj15"  | "Valid25@ukr.net" | "Qwer212@#" | "Qwer212@#"      |

  Scenario Outline: Verify nickname data validation and nickname error messages during sign-up
    When the user sing-ups with <nickname>, <email>, <password>, and <confirm_password>
    Then "signUp" page "Nick Name" "Error Message" is: <error_message>

    Examples:
      | nickname | email            | password    | confirm_password | error_message                                                          |
      | "Ne"     | "barfoo"         | "Qwer212@#" | "Qwer212@#"      | "Please enter the nickname that includes between 3 and 50 characters." |
      | "We w"   | "Test@email.com" | "Super5qs!" | "Super5qs!"      | "Please enter a nickname that doesn't include spaces."                 |

  Scenario Outline: Verify email data validation and email error messages during sign-up
    When the user sing-ups with <nickname>, <email>, <password>, and <confirm_password>
    Then "signUp" page "Email" "Error Message" is: <error_message>

    Examples:
      | nickname | email                           | password    | confirm_password | error_message                                                                  |
      | "Tom"    | "cdw@sc.cs"                     | "1234Sa#4a" | "1234Sa#4a"      | "Please enter a valid email domain."                                           |
      | "Mack4"  | "Mack 4@epam.com"               | "C"         | "M"              | "Please enter a valid email address without any spaces or special characters." |
      | "Jek"    | "Jec$%&'*+/=?^`{\|}~@gmail.com" | "Q"         | "Q"              | "Please enter a valid email address without any spaces or special characters." |

  Scenario Outline: Verify password data validation and password error messages during sign-up
    When the user sing-ups with <nickname>, <email>, <password>, and <confirm_password>
    Then "signUp" page "Password" "Error Message" is: <error_message>

    Examples:
      | nickname    | email                | password     | confirm_password | error_message                                                           |
      | "New"       | "test23@ukr.com "    | "Qwe#212"    | "Qwe#212"        | "Please enter a password with a minimum of 8 characters."               |
      | "Wew"       | "Test@email.com"     | "super5qs!"  | "super5qs!"      | "Please enter a password that includes at least one uppercase letter."  |
      | "BobMartin" | "BobMartin@epam.com" | "UPPER6@8"   | "UPPER6@8"       | "Please enter a password that includes at least one lowercase letter."  |
      | "Simon"     | "Simon12@gmail.com"  | "No@Numbers" | "No@Numbers"     | "Please enter a password that includes at least one number."            |
      | "S"         | "4"                  | "0Chapters"  | "0Chapters"      | "Please enter a password that includes at least one special character." |

  Scenario Outline: Verify confirm password data validation and confirm password error messages during sign-up
    When the user sing-ups with <nickname>, <email>, <password>, and <confirm_password>
    Then "signUp" page "Confirm Password" "Error Message" is: <error_message>

    Examples:
      | nickname | email            | password    | confirm_password | error_message                                               |
      | "EPAM"   | "Test@email.com" | "Super5qs!" | "super5qs!"      | "The passwords you entered do not match. Please try again." |