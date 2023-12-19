@010 @viewMyPlaylists
Feature: EPMRDPEMAP-633 View the My Playlists page

    @Smoke
    Scenario: Verifiyng information about My Playlists
        Given the user "signIn" to the application
        When the user clicks on the "sidebar" "My Playlists" "Button" element
        Then the user is on the "myPlaylists" page
        And "My Playlists List" is displayed on "myPlaylists" page
        And "Playlist Name" elements of "My Playlists List" are displayed on "myPlaylists" page
        And "My Playlist Logo" elements of "My Playlists List" are displayed on "myPlaylists" page
        And "My Playlist Songs List" elements of "My Playlists List" are displayed on "myPlaylists" page
        And "myPlaylists" page has no more than 10 elements in "My Playlists List"
        And "myPlaylists" page has no more than 10 elements in "My Playlist Songs List"
        And the user logging out
        
    @Smoke
    Scenario Outline: Verify that Authorized users is able to navigate to the My Playlists page by clicking the My Playlists button on the following pages: '<page>'
        Given the user "signIn" to the application
        When the user is on the "home" page
        Then the user is open "<page>" page
        And the user is on the "<page>" page
        And the user clicks on the "sidebar" "My Playlists" "Button"
        And the user is on the "myPlaylists" page
        And "My Playlists List" is displayed on "myPlaylists" page
        And the user logging out
        And "toastify" "Logout Success" "Message" is: "You have been successfully logged out."

    Examples:
        | page            |
        | publicPlaylists |
        | sharedPlaylists |
        | friends         |
        | home            |

    @Regression
    Scenario: Verify that a guest user redirects to the Sign In page when trying to navigate to the My Playlists page
        Given the user is open "signIn" page
        When the user is on the "signIn" page
        Then the user is open "myPlaylists" page
        And "toastify" "Information" "Message" is: "It looks like you don't have permission to view this page. Please sign in to continue."
        And the user is on the "signIn" page