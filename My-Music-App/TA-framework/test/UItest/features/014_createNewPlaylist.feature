@014 @createNewPlaylist

Feature: EPMRDPEMAP-630 Create a New Playlist

    Scenario: The user creates a new playlist
        Given the user "signIn" to the application
        Then the user is on the "home" page
        When the user clicks on the "sidebar" "My Playlists" "Button" element
        Then the user is on the "myPlaylists" page
        When the user clicks on the "myPlaylists" page "Add Playlist" "Button" element
        Then the user "Input" "Name" in the "myPlaylists" "New Playlist" as: "Rock your body"
        Then the user "Input" "Description" in the "myPlaylists" "New Playlist" as: "Far far far away"
        Then the user clicks on the "myPlaylists" page "Create New Playlist" form "Button" element
        Then "toastify" "Information" "Message" is: "Playlist successfully created :)"
        Then the user "Input" "Value" in the "myPlaylists" "Search Box" as: "Rock your body"
        And the user clicks on the "pagination" "Right" "Arrow" element
        When the user clicks on the "myPlaylists" page "Playlists" "Item" 1 element
        Then the user is on the "current" "myPlaylist" page
        Then "myPlaylist" page "Playlist" "Type" is: "Private"

        Scenario: The user verify playlistname for the number of input characters
        Given the user "signIn" to the application
        Then the user is on the "home" page
        When the user clicks on the "sidebar" "My Playlists" "Button" element
        Then the user is on the "myPlaylists" page
        When the user clicks on the "myPlaylists" page "Add Playlist" "Button" element
        Then the user "Input" "Name" in the "myPlaylists" "New Playlist" as: "Ne"
        Then "myPlaylists" page "Input" "Error" is: "Too short, playlist name should be between 3 and 50 characters in length." 
        Then the user "Input" "Description" in the "myPlaylists" "New Playlist" as: "Ne"
        Then "myPlaylists" page "Error" "Description" is: "Too short, playlist description should be between 3 and 1000 characters in length."
  
        Scenario: The user did not save changes
        Given the user "signIn" to the application
        Then the user is on the "home" page
        When the user clicks on the "sidebar" "My Playlists" "Button" element
        Then the user is on the "myPlaylists" page
        When the user clicks on the "myPlaylists" page "Add Playlist" "Button" element
        Then the user "Input" "Name" in the "myPlaylists" "New Playlist" as: "А вже весна"
        Then the user "Input" "Description" in the "myPlaylists" "New Playlist" as: "Ніч яка місячна"
        When the user clicks on the "myPlaylists" page "Close" "Window" element
        When the user clicks on the "myPlaylists" page "Discard" "Button" element
         Then the user "Input" "Value" in the "myPlaylists" "Search Box" as: "А вже весна"
        And the user clicks on the "pagination" "Right" "Arrow" element
        