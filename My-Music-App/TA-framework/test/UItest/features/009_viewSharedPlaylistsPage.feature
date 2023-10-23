@009 @viewSharedPlaylists

Feature: View the Shared Playlists page

    Scenario: Verifiyng opening the Shared Playlists page
        Given the user "signIn" to the application
        Then the user is on the "home" page
        When the user clicks on the "sidebar" "Shared Playlists" "Button" element
        Then the user is on the "sharedPlaylists" page
        And "sharedPlaylistsList" element is displayed on "sharedPlaylists" page

    Scenario: Verifiyng information about Shared Playlists
        Given the user is on the "sharedPlaylists" page
        Then "Shared Playlists List" element is displayed on "sharedPlaylists" page
        And "Shared Playlist Name" elements of "Shared Playlists List" are displayed on "sharedPlaylists" page
        And "Shared Playlist Logo" elements of "Shared Playlists List" are displayed on "sharedPlaylists" page
        And "Shared Playlist Like Button" elements of "Shared Playlists List" are displayed on "sharedPlaylists" page
        And "Shared Playlist Like Counter" elements of "Shared Playlists List" are displayed on "sharedPlaylists" page
        And "Shared Playlist Dislike Button" elements of "Shared Playlists List" are displayed on "sharedPlaylists" page
        And "Shared Playlist Dislike Counter" elements of "Shared Playlists List" are displayed on "sharedPlaylists" page
        And "Shared Playlist Nick Name" elements of "Shared Playlists List" are displayed on "sharedPlaylists" page
        And "Shared Playlist Songs List" elements of "Shared Playlists List" are displayed on "sharedPlaylists" page
        Then "sharedPlaylists" page has no more than 10 elements in "Shared Playlist Songs List"

    Scenario: Verifiyng the Shared Playlists page is paginated and includes no more than 10 shared playlists on a page.
        Given the user is on the "sharedPlaylists" page
        Then "Shared Playlists List" element is displayed on "sharedPlaylists" page
        Then "sharedPlaylists" page has no more than 10 elements in "Shared Playlists List"
        When the user clicks on the "pagination" "Right" "Arrow" element
        And "Shared Playlists List" element is displayed on "sharedPlaylists" page
        Then "sharedPlaylists" page has no more than 10 elements in "Shared Playlists List"

    Scenario: Verify opening individual shared playlist from Shared Playlists page
        Given the user is on the "sharedPlaylists" page
        Then "Shared Playlists List" element is displayed on "sharedPlaylists" page
        When the user clicks on the "sharedPlaylists" page "Shared Playlists" "List" 1 element
        Then the user is on the "current" "sharedPlaylist" page

    Scenario Outline: Verify that Authorized users is able to navigate to the Shared Playlists page by clicking the Shared Playlists button on the following pages: '<page>'
        Given the user "signIn" to the application
        Then the user is on the "home" page
        When the user clicks on the "sidebar" "<name>" "Button" element
        Then the user is on the "<page>" page
        When the user clicks on the "sidebar" "Shared Playlists" "Button" element
        Then the user is on the "sharedPlaylists" page
        And "Shared Playlists List" element is displayed on "sharedPlaylists" page
        Then The user logging out
        Then "alert" "Logout Success" "Message" is: "You have been successfully logged out."
        Examples:
            | name             | page            |
            | Public Playlists | publicPlaylists |
            | My Playlists     | playlists       |
            | Friends          | friends         |

    Scenario: Verify that a guest user redirects to the Sign In page when trying to navigate to the Shared Playlists page
        When the user is open "signIn" page
        Then the user is on the "signIn" page
        When the user is open "sharedPlaylists" page
        Then "alert" "Permission" "Message" is: "It looks like you don't have permission to view this page. Please sign in to continue."
        And the user is on the "signIn" page