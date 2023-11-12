@012 @writeComments

Feature: EPMRDPEMAP-6484 write comments to playlist

    Scenario: The user writes valid comment to the My Playlist
        Given the user "signIn" to the application
        Then the user is on the "home" page
        When the user clicks on the "sidebar" "My Playlists" "Button" element
        Then the user is on the "myPlaylists" page
        When the user clicks on the "myPlaylists" page "Playlists" "Item" 1 element
        Then the user is on the "current" "myPlaylist" page
        Then "Comment Input" is displayed on "myPlaylist" page
        Then the user "Input" "Comment" in the "myPlaylist" page as: "my new comment"
        When the user clicks on the "myPlaylist" page "Leave Comment" "Button" element
        Then the "my new comment" is added to the "myPlaylist" page "Comment Content"

    Scenario: Validate comments information on the My Playlist
        Given the user is on the "current" "myPlaylist" page
        Then "Comment List" is displayed on "myPlaylist" page
        And "Commentor Name" 1 element of "Comment List" are displayed on "myPlaylist" page
        And "Comment Content" 1 element of "Comment List" are displayed on "myPlaylist" page
        And "Comment Date" 1 element of "Comment List" are displayed on "myPlaylist" page
        And "Comment Email" 1 element of "Comment List" are displayed on "myPlaylist" page

    Scenario: The user writes comment to the My Playlist with inappropriate length
        Given the user is on the "current" "myPlaylist" page
        When the user "Input" "Comment" in the "myPlaylist" page as: "comment"
        Then "myPlaylist" page "Comment Error" "Message" is: "Too short, comment should be between 10 and 1000 characters in length."

    Scenario: The user tries write more than 3 comments per 1 minute to the My Playlist
        Given the user is on the "current" "myPlaylist" page
        Then the user "Input" "Comment" in the "myPlaylist" page as: "new comment 1"
        Then the user clicks on the "myPlaylist" page "Leave Comment" "Button" element
        Then the user "Input" "Comment" in the "myPlaylist" page as: "new comment 2"
        Then the user clicks on the "myPlaylist" page "Leave Comment" "Button" element
        Then the user "Input" "Comment" in the "myPlaylist" page as: "new comment 3"
        Then the "Leave Comment Button" in the "myPlaylist" page is "disable" and click is "not-allowed"

    Scenario: The user writes valid comment to the Shared Playlist
        Given the user clicks on the "sidebar" "Shared Playlists" "Button" element
        Then the user is on the "sharedPlaylists" page
        When the user clicks on the "sharedPlaylists" page "Shared Playlists" "List" 1 element
        Then the user is on the "current" "sharedPlaylist" page
        Then "Comment Input" is displayed on "myPlaylist" page
        Then the user "Input" "Comment" in the "myPlaylist" page as: "my new comment"
        When the user clicks on the "sharedPlaylist" page "Leave Comment" "Button" element
        Then the "my new comment" is added to the "sharedPlaylist" page "Comment Content"

    Scenario: Validate comments information on the Shared Playlist
        Given the user is on the "current" "sharedPlaylist" page
        Then "Comment List" is displayed on "sharedPlaylist" page
        And "Commentor Name" 1 element of "Comment List" are displayed on "sharedPlaylist" page
        And "Comment Content" 1 element of "Comment List" are displayed on "sharedPlaylist" page
        And "Comment Date" 1 element of "Comment List" are displayed on "sharedPlaylist" page
        And "Comment Email" 1 element of "Comment List" are displayed on "sharedPlaylist" page

    Scenario: The user writes comment to the Shared Playlist with inappropriate length
        Given the user is on the "current" "sharedPlaylist" page
        When the user "Input" "Comment" in the "sharedPlaylist" page as: "comment"
        Then "sharedPlaylist" page "Comment Error" "Message" is: "Too short, comment should be between 10 and 1000 characters in length."

    Scenario: The user tries write more than 3 comments per 1 minute to the Shared Playlist
        Given the user is on the "current" "sharedPlaylist" page
        Then the user "Input" "Comment" in the "sharedPlaylist" page as: "new comment 1"
        Then the user clicks on the "sharedPlaylist" page "Leave Comment" "Button" element
        Then the user "Input" "Comment" in the "sharedPlaylist" page as: "new comment 2"
        Then the user clicks on the "sharedPlaylist" page "Leave Comment" "Button" element
        Then the user "Input" "Comment" in the "sharedPlaylist" page as: "new comment 3"
        Then the "Leave Comment Button" in the "sharedPlaylist" page is "disable" and click is "not-allowed"

    Scenario: The user writes valid comment to the Public Playlist
        Given the user clicks on the "sidebar" "Public Playlists" "Button" element
        Then the user is on the "publicPlaylists" page
        When the user clicks on the "publicPlaylists" page "Public Playlists" "List" 1 element
        Then the user is on the "current" "publicPlaylist" page
        Then "Comment Input" is displayed on "publicPlaylist" page
        Then the user "Input" "Comment" in the "publicPlaylist" page as: "my new comment"
        When the user clicks on the "publicPlaylist" page "Leave Comment" "Button" element
        Then the "my new comment" is added to the "publicPlaylist" page "Comment Content"

    Scenario: Validate comments information on the Public Playlist
        Given the user is on the "current" "publicPlaylist" page
        Then "Comment List" is displayed on "publicPlaylist" page
        And "Commentor Name" 1 element of "Comment List" are displayed on "publicPlaylist" page
        And "Comment Content" 1 element of "Comment List" are displayed on "publicPlaylist" page
        And "Comment Date" 1 element of "Comment List" are displayed on "publicPlaylist" page
        And "Comment Email" 1 element of "Comment List" are displayed on "publicPlaylist" page

    Scenario: The user writes comment to the Public Playlist with inappropriate length
        Given the user is on the "current" "publicPlaylist" page
        When the user "Input" "Comment" in the "publicPlaylist" page as: "comment"
        Then "publicPlaylist" page "Comment Error" "Message" is: "Too short, comment should be between 10 and 1000 characters in length."

    Scenario: The user tries write more than 3 comments per 1 minute to the Public Playlist
        Given the user is on the "current" "publicPlaylist" page
        Then the user "Input" "Comment" in the "publicPlaylist" page as: "new comment 1"
        Then the user clicks on the "publicPlaylist" page "Leave Comment" "Button" element
        Then the user "Input" "Comment" in the "publicPlaylist" page as: "new comment 2"
        Then the user clicks on the "sharedPlaylist" page "Leave Comment" "Button" element
        Then the user "Input" "Comment" in the "publicPlaylist" page as: "new comment 3"
        Then the "Leave Comment Button" in the "publicPlaylist" page is "disable" and click is "not-allowed"