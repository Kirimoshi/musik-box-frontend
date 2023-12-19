@003 @signOut
Feature: EPMRDPEMAP-207 - The SingOut feature

  Background: Authenticated user sing-ins to the application
    Given the user "signIn" to the application
    And the user is on the "home" page

  @Smoke
  Scenario Outline: Verify that the user is able logged out
    When the user logging out
    Then logoutSuccessMessage1 message should be displayed: <logout_message1>
    Then logoutSuccessMessage2 message should be displayed: <logout_message2>
    And the user storage data is empty
    Then the user is on the "home" page

    Examples:
      | logout_message1                       | logout_message2    |
      | You have been successfully logged out | Come back anytime! |

  @Regression
  Scenario Outline: Verify that the logout message is displaying if the sign-out action was NOT successful
    Given the Internet connection is interrupted
    When the user logging out
    Then logoutUnsuccessMessage1 message should be displayed: <logout_message1>
    And logoutUnsuccessMessage2 message should be displayed: <logout_message2>
    And the user storage data is not empty
    And the user is on the "home" page

    Examples:
      | logout_message1                                       | logout_message2         |
      | Sorry, we encountered an error while logging you out. | Please try again later. |
