@018 @sendAFriendRequest @Regression
Feature: EPMRDPEMAP-573 Send a Friend Request

    Scenario: The new user sign-up and login to the application
        Given the user is open "signUp" page
        When the user sing-ups with <nickname>, <email>, <password>, and <confirm_password>
        And the user sing-ins with <email> and <password>
        Then the user is on the "home" page

        Examples:
            | nickname | email             | password    | confirm_password |
            | "Ostap"  | "Valid25@ukr.net" | "Qwer212@#" | "Qwer212@#"      |

    Scenario: Verifying opening the friends page
        Given the user is open "signUp" page
        When the user clicks on the "sidebar" "Friends" "Button"
        Then the user is on the "friends" page

    @SendAFriendRequest @Smoke
    Scenario: Verifying that the user is able to send a friend request
        Given "Add New Friend Button" is displayed on "friends" page
        When the user clicks on the "friends" page "Add New Friend" "Button"
        Then the user "Input" "Email" in the "friends" "Add Friend Form" as: "test.user@example.com"
        And the user clicks on the "friends" page "Dialog Window Add Friend" "Button"
        And "toastify" "Information" "Message" is: "Request successfuly sent"

    Scenario: The user who send friends request is logging out from the application
        Given the user logging out

    Scenario: Opening the "Friends" page by a user who received a friend request
        Given the user "signIn" to the application
        When the user is on the "home" page
        Then the user clicks on the "sidebar" "Friends" "Button"
        And the user is on the "friends" page

    Scenario: Verifiyng that the friend request is displayed
        Given the user is on the "friends" page
        And friend request from user with name "Ostap" and email "Valid25@ukr.net" is displayed on the friends page

    Scenario: The user deletes data
        Given the user deletes personal account