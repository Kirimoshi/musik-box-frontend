@011 @addSongs @Regression
Feature: EPMRDPEMAP-634 Add songs to playlist

    Scenario: Login to the application
        Given the user "signIn" to the application
        Then the user is on the "home" page

    Scenario: Opening the "myPlaylist" page
        Given the user is on the "home" page
        When the user clicks on the "sidebar" "My Playlists" "Button" element
        Then the user is on the "myPlaylists" page
        When the user clicks on the "myPlaylists" page "Playlists" "Item" 1 element
        Then the user is on the "current" "myPlaylist" page

    @AddSongs @Smoke
    Scenario: Add song to Playlist
        Given the user is on the "current" "myPlaylist" page
        Then "Add Song Button" is displayed on "myPlaylist" page
        Then the user clicks on the "myPlaylist" page "Add Song" "Button" element
        Then the user "Input" not existing "Song" "Name" into add songs search field in the "myPlaylist" page
        Then the user clicks on the "myPlaylist" page "Song Search" "Button" element
        Then the user clicks on the "myPlaylist" page "Add Song To Playlist" "Button" element
        Then "toastify" "Information" "Message" is: "Successfully added to playlist :)"
        When the user clicks on the "myPlaylist" page "Close Add Songs Window" "Button" element
        Then the "Song" is added into "myPlaylist" page songs list

    Scenario: View Add songs dialog window elements
        Given the user is on the "current" "myPlaylist" page
        When the user clicks on the "myPlaylist" page "Add Song" "Button" element
        Then "Close Add Songs Window Button" is displayed on "myPlaylist" page
        Then "Song Input" is displayed on "myPlaylist" page
        Then "myPlaylist" "Song Input" placeholder is "Type something"
        Then "Song Search Button" is displayed on "myPlaylist" page
        Then "Add Song List" is displayed on "myPlaylist" page
        Then "Add Song Name" elements of "Add Song List" are displayed on "myPlaylist" page
        Then "Add Song Artist Name" elements of "Add Song List" are displayed on "myPlaylist" page
        Then "Add Song Album Name" elements of "Add Song List" are displayed on "myPlaylist" page
        Then the user clicks on the "myPlaylist" page "Close Add Songs Window" "Button" element

    Scenario: Verifiyng the Add Songs dialog window is paginated and includes no more than 20 songs on a page.
        Given the user is on the "current" "myPlaylist" page
        When the user clicks on the "myPlaylist" page "Add Song" "Button" element
        Then "Add Song List" is displayed on "myPlaylist" page
        Then "myPlaylist" page has no more than 20 elements in "Add Song List"
        Then the user clicks on the "myPlaylist" page "Right Arrow" "Paginator" element
        Then "Add Song List" is displayed on "myPlaylist" page
        Then "myPlaylist" page has no more than 20 elements in "Add Song List"
        Then the user clicks on the "myPlaylist" page "Left Arrow" "Paginator" element
        Then "Add Song List" is displayed on "myPlaylist" page
        Then "myPlaylist" page has no more than 20 elements in "Add Song List"
        