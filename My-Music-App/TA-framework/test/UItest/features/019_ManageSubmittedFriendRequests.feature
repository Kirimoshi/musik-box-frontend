@019 @manageSubmittedFriendRequests @Regression
Feature: EPMRDPEMAP-582 Manage Submitted Friend Requests

    Scenario: The new user sign-up and login to the application
        Given the user is open "signUp" page
        When the user sing-ups with <nickname>, <email>, <password>, and <confirm_password>
        And the user sing-ins with <email> and <password>
        Then the user is on the "home" page

        Examples:
            | nickname | email             | password    | confirm_password |
            | "Ostap"  | "Valid25@ukr.net" | "Qwer212@#" | "Qwer212@#"      |

    Scenario: Verify opening the friends page
        Given the user clicks on the "sidebar" "Friends" "Button"
        Then the user is on the "friends" page

    Scenario: The user send a friend request
        Given "Add New Friend Button" is displayed on "friends" page
        When the user clicks on the "friends" page "Add New Friend" "Button"
        Then the user "Input" "Email" in the "friends" "Add Friend Form" as: "test.user@example.com"
        And the user clicks on the "friends" page "Dialog Window Add Friend" "Button"
        And "toastify" "Information" "Message" is: "Request successfuly sent"

    Scenario: the user is able to cancel friend request
        Given the user clicks on the "friends" page "Send By Me" "Button"
        When the user clicks on the "sendByMe" page "Cancel Request" "Button" 1 element
        Then "toastify" "Information" "Message" is: "Friend request canceled."
        And friend request to "test.user@example.com" is canceled

    Scenario: The user who send friends request is logging out from the application
        Given the user logging out

    Scenario: Verify the recipient of the friend request sign-in to the application
        Given the user "signIn" to the application
        Then the user is on the "home" page

    Scenario: Verify the recipient of the friend request doesn't see the friend request
        Given the user clicks on the "sidebar" "Friends" "Button"
        When the user is on the "friends" page
        Then friend request from "Valid25@ukr.net" is not displayed

    Scenario: The user deletes data
        Given the user deletes personal account