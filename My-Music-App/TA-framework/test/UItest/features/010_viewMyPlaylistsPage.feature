@010 @viewMyPlaylists

Feature: View the My Playlists page

    Scenario: Verifiyng opening the My Playlists page
        Given the user "signIn" to the application
        Then the user is on the "home" page
        When the user clicks on the "sidebar" "My Playlists" "Button" element
        Then the user is on the "myPlaylists" page
        And "My Playlists List" element is displayed on "myPlaylists" page

    Scenario Outline: Verify that Authorized users is able to navigate to the My Playlists page by clicking the My Playlists button on the following pages: '<page>'
        Given the user "signIn" to the application
        Then the user is on the "home" page
        Then the user is open "<page>" page
        Then the user is on the "<page>" page
        When the user clicks on the "sidebar" "My Playlists" "Button" element
        Then the user is on the "myPlaylists" page
        And "My Playlists List" element is displayed on "myPlaylists" page

    Examples:
        | page            |
        | publicPlaylists |
        | sharedPlaylists |
        | friends         |
        | home            |

    Scenario: Verifiyng the My Playlists page includes no more than 10 playlists on a page.
        Given the user is open "myPlaylists" page
        Then the user is on the "myPlaylists" page
        Then "My Playlists List" element is displayed on "myPlaylists" page
        Then "myPlaylists" page has no more than 10 elements in "My Playlists List"

    Scenario: Verifiyng information about My Playlists
        Given the user is on the "myPlaylists" page
        Then "My Playlists List" element is displayed on "myPlaylists" page
        And "My Playlist Name" elements of "My Playlists List" are displayed on "myPlaylists" page
        And "My Playlist Logo" elements of "My Playlists List" are displayed on "myPlaylists" page
        And "My Playlist Songs List" elements of "My Playlists List" are displayed on "myPlaylists" page
        Then "myPlaylists" page has no more than 10 elements in "My Playlist Songs List"
        Then the user logging out
        Then "alert" "Logout Success" "Message" is: "You have been successfully logged out."

    Scenario: Verify that a guest user redirects to the Sign In page when trying to navigate to the My Playlists page
        When the user is open "signIn" page
        Then the user is on the "signIn" page
        When the user is open "myPlaylists" page
        Then "alert" "Permission" "Message" is: "It looks like you don't have permission to view this page. Please sign in to continue."
        And the user is on the "signIn" page