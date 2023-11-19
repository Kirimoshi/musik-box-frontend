@011 @addSongs

Feature: EPMRDPEMAP-634 Add songs to playlist

    Scenario: Add not existing song to Playlist
        Given the user "signIn" to the application
        Then the user is on the "home" page
        When the user clicks on the "sidebar" "My Playlists" "Button" element
        Then the user is on the "myPlaylists" page
        When the user clicks on the "myPlaylists" page "Playlists" "Item" 1 element
        Then the user is on the "current" "myPlaylist" page
        Then "Add Song Button" is displayed on "myPlaylist" page
        Then the user clicks on the "myPlaylist" page "Add Song" "Button" element
        Then the user "Input" not existing "Song" "Name" into add songs search field in the "myPlaylist" page
        Then the user clicks on the "myPlaylist" page "Song Search" "Button" element
        Then the user clicks on the "myPlaylist" page "Add Song To Playlist" "Button" element
        Then "toastify" "Information" "Message" is: "Successfully added to playlist :)"
        When the user clicks on the "myPlaylist" page "Close Add Songs Window" "Button" element
        Then the "Song" added in the "myPlaylist" page songs list
        
    Scenario: Add existing song to Playlist
        Given the user is on the "current" "myPlaylist" page
        When the user clicks on the "myPlaylist" page "Add Song" "Button" element
        And the user "Input" existing "Song" "Name" into add songs search field in the "myPlaylist" page
        Then the user clicks on the "myPlaylist" page "Song Search" "Button" element
        And the user clicks on the "myPlaylist" page "Add Song To Playlist" "Button" element
        Then "toastify" "Information" "Message" is: "This song is already in the playlist."
        And the "Song" not added in the "myPlaylist" page songs list
        Then the user clicks on the "myPlaylist" page "Close Add Songs Window" "Button" element

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
        
## There is no implemented functionality for deleting songs from shared playlist
    # Scenario: Add song to Shared Playlist
    #     Given the user is open "sharedPlaylists" page
    #     Then the user is on the "sharedPlaylists" page
    #     When the user clicks on the "sharedPlaylists" page "Shared Playlists" "List" 1 element
    #     Then the user is on the "current" "sharedPlaylist" page
    #     Then the user clicks on the "sharedPlaylist" page "Add Song" "Button" element
    #     Then the user "Input" not existing "Song" "Name" into add songs search field in the "sharedPlaylist" page
    #     Then the user clicks on the "sharedPlaylist" page "Song Submit" "Button" element
    #     Then the user clicks on the "sharedPlaylist" page "Add Song To Playlist" "Button" element
    #     Then "alert" "Add Song" "Message" is: "Successfully added to playlist :)"
    #     Then the "Song" added in the "myPlaylist" page songs list
        