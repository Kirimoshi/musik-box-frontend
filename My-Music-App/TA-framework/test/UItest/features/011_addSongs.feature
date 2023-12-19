@011 @addSongs
Feature: EPMRDPEMAP-634 Add songs to playlist

    @AddSongs @Smoke
    Scenario: Add song to Playlist
        Given the user "signIn" to the application
        When the user is on the "home" page
        Then the user clicks on the "sidebar" "My Playlists" "Button"
        And the user clicks on the "myPlaylists" page "Playlists" "Item" 1 element
        And the user is on the "current" "myPlaylist" page
        And "Add Song Button" is displayed on "myPlaylist" page
        And the user clicks on the "myPlaylist" page "Add Song" "Button"
        And the user "Input" not existing "Song" "Name" into add songs search field in the "myPlaylist" page
        And the user clicks on the "myPlaylist" page "Song Search" "Button"
        And the user clicks on the "myPlaylist" page "Add Song To Playlist" "Button"
        And "toastify" "Information" "Message" is: "Successfully added to playlist :)"
        And the user clicks on the "myPlaylist" page "Close Add Songs Window" "Button"
        And the "Song" is added into "myPlaylist" page songs list

    @Regression
    Scenario: View Add songs dialog window elements
        Given the user "signIn" to the application
        When the user is on the "home" page
        Then the user clicks on the "sidebar" "My Playlists" "Button"
        And the user clicks on the "myPlaylists" page "Playlists" "Item" 1 element
        And the user is on the "current" "myPlaylist" page
        And "Add Song Button" is displayed on "myPlaylist" page
        And the user clicks on the "myPlaylist" page "Add Song" "Button"
        And "Close Add Songs Window Button" is displayed on "myPlaylist" page
        And "Song Input" is displayed on "myPlaylist" page
        And "myPlaylist" "Song Input" placeholder is "Type something"
        And "Song Search Button" is displayed on "myPlaylist" page
        And "Add Song List" is displayed on "myPlaylist" page
        And "Add Song Name" elements of "Add Song List" are displayed on "myPlaylist" page
        And "Add Song Artist Name" elements of "Add Song List" are displayed on "myPlaylist" page
        And "Add Song Album Name" elements of "Add Song List" are displayed on "myPlaylist" page

    @Regression
    Scenario: Verifiyng the Add Songs dialog window is paginated and includes no more than 20 songs on a page.
        Given "myPlaylist" page has no more than 20 elements in "Add Song List"
        When the user clicks on the "myPlaylist" page "Right Arrow" "Paginator"
        Then "Add Song List" is displayed on "myPlaylist" page
        And "myPlaylist" page has no more than 20 elements in "Add Song List"
        And the user clicks on the "myPlaylist" page "Left Arrow" "Paginator"
        And "Add Song List" is displayed on "myPlaylist" page
        And "myPlaylist" page has no more than 20 elements in "Add Song List"
        