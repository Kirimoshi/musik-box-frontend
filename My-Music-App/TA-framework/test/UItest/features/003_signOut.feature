@signOut @003

Feature: EPMRDPEMAP-207 - The SingOut feature

  Scenario Outline: 1. Verify that the user with valid data can sing in
    Given the user is open "signIn" page
    When the user sing-ins with <email> and <password>
    Then the User should be redirected to the Home page

    Examples:
      | email             | password    |
      | "Valid25@ukr.net" | "Qwer212@#" |

  Scenario Outline: Verify that the logout message is displaying if the sign-out action was successful
    When The user logging out
    Then logoutSuccessMessage1 message should be displayed: <logout_message1>
    Then logoutSuccessMessage2 message should be displayed: <logout_message2>
    Then the User should be redirected to the Home page

    Examples:
      | logout_message1                       | logout_message2    |
      | You have been successfully logged out | Come back anytime! |

  Scenario Outline: 2. Verify that the user with valid data can sing in
    Given the user is open "signIn" page
    When the user sing-ins with <email> and <password>
    Then the User should be redirected to the Home page

    Examples:
      | email             | password    |
      | "Valid25@ukr.net" | "Qwer212@#" |

  Scenario Outline: Verify that the logout message is displaying if the sign-out action was NOT successful
    Given the Internet connection is interrupted
    When The user logging out
    Then logoutUnsuccessMessage1 message should be displayed: <logout_message1>
    Then logoutUnsuccessMessage2 message should be displayed: <logout_message2>
    Then the User should be redirected to the Home page

    Examples:
      | logout_message1                                       | logout_message2         |
      | Sorry, we encountered an error while logging you out. | Please try again later. |
