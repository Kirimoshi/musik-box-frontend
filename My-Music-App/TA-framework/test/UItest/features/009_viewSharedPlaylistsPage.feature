@009 @viewSharedPlaylists
Feature: EPMRDPEMAP-603 View the Shared Playlists page

    @Smoke
    Scenario: Verifiyng information about Shared Playlists
        Given the user "signIn" to the application
        When the user clicks on the "sidebar" "Shared Playlists" "Button" element
        Then the user is on the "sharedPlaylists" page
        And "Shared Playlists List" is displayed on "sharedPlaylists" page
        And "Shared Playlist Name" elements of "Shared Playlists List" are displayed on "sharedPlaylists" page
        And "Shared Playlist Logo" elements of "Shared Playlists List" are displayed on "sharedPlaylists" page
        And "Shared Playlist Like Button" elements of "Shared Playlists List" are displayed on "sharedPlaylists" page
        And "Shared Playlist Like Counter" elements of "Shared Playlists List" are displayed on "sharedPlaylists" page
        And "Shared Playlist Dislike Button" elements of "Shared Playlists List" are displayed on "sharedPlaylists" page
        And "Shared Playlist Dislike Counter" elements of "Shared Playlists List" are displayed on "sharedPlaylists" page
        And "Shared Playlist Nick Name" elements of "Shared Playlists List" are displayed on "sharedPlaylists" page
        And "Shared Playlist Songs List" elements of "Shared Playlists List" are displayed on "sharedPlaylists" page
        And "sharedPlaylists" page has no more than 10 elements in "Shared Playlist Songs List"
        And the user logging out

    @Regression
    Scenario: Verifiyng the Shared Playlists page is paginated and includes no more than 10 shared playlists on a page.
        Given the user "signIn" to the application
        When the user is on the "home" page
        Then the user clicks on the "sidebar" "Shared Playlists" "Button"
        And the user is on the "sharedPlaylists" page
        And "Shared Playlists List" is displayed on "sharedPlaylists" page
        And "sharedPlaylists" page has no more than 10 elements in "Shared Playlists List"
        And the user clicks on the "pagination" "Right" "Arrow" element
        And "Shared Playlists List" is displayed on "sharedPlaylists" page
        And "sharedPlaylists" page has no more than 10 elements in "Shared Playlists List"
        And the user logging out

    @Smoke
    Scenario: Verify opening individual shared playlist from Shared Playlists page
        Given the user "signIn" to the application
        When the user is on the "home" page
        Then the user clicks on the "sidebar" "Shared Playlists" "Button"
        And the user is on the "sharedPlaylists" page
        And "Shared Playlists List" is displayed on "sharedPlaylists" page
        And the user clicks on the "sharedPlaylists" page "Shared Playlists" "List" 1 element
        And the user is on the "current" "sharedPlaylist" page
        And the user logging out
        
    @Smoke
    Scenario Outline: Verify that Authorized users is able to navigate to the Shared Playlists page by clicking the Shared Playlists button on the following pages: '<page>'
        Given the user "signIn" to the application
        When the user is on the "home" page
        Then the user is open "<page>" page
        And the user is on the "<page>" page
        And the user clicks on the "sidebar" "Shared Playlists" "Button" 
        And the user is on the "sharedPlaylists" page
        And "Shared Playlists List" is displayed on "sharedPlaylists" page
        Examples:
            | page            |
            | publicPlaylists |
            | myPlaylists     |
            | friends         |
    
    @Regression
    Scenario: Verify that a guest user redirects to the Sign In page when trying to navigate to the Shared Playlists page
        Given the user logging out
        When "toastify" "Logout Success" "Message" is: "You have been successfully logged out."
        Then the user is open "signIn" page
        And the user is on the "signIn" page
        And the user is open "sharedPlaylists" page
        And "toastify" "Information" "Message" is: "It looks like you don't have permission to view this page. Please sign in to continue."
        And the user is on the "signIn" page