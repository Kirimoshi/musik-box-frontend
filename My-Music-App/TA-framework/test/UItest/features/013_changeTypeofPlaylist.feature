@013 @changeTypeofPlaylist

Feature: EPMRDPEMAP-651 Change the type of a Public or Private Playlist

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

    Scenario: The user discards the confirmation of changing type of a playlist
        Given the user is on the "myPlaylists" page
        Then the user "Input" "Value" in the "myPlaylists" "Search Box" as: "Rock your body"
        And the user clicks on the "pagination" "Right" "Arrow" element
        When the user clicks on the "myPlaylists" page "Playlists" "Item" 1 element
        Then the user is on the "current" "myPlaylist" page
        Then "myPlaylist" page "Playlist" "Type" is: "Private"
        When the user clicks on the "myPlaylist" page "Playlist" "Menu" element
        Then the user clicks on the "myPlaylist" page "Public" "Button" element
        And the user clicks on the "myPlaylist" page "Dialog Cancel" "Button" element
        Then "myPlaylist" page "Playlist" "Type" is: "Private"

    Scenario: The user changes type of a playlist from Private to Public
        Given the user is on the "current" "myPlaylist" page
        Then "myPlaylist" page "Playlist" "Type" is: "Private"
        Then the user clicks on the "myPlaylist" page "Public" "Button" element
        And the user clicks on the "myPlaylist" page "Change Playlist Type" "Button" element
        Then "myPlaylist" page "Playlist" "Type" is: "Public"

    Scenario: The user changes type of a playlist from Public to Private
        Given the user is on the "current" "myPlaylist" page
        Then "myPlaylist" page "Playlist" "Type" is: "Public"
        When the user clicks on the "myPlaylist" page "Playlist" "Menu" element
        Then the user clicks on the "myPlaylist" page "Private" "Button" element
        And the user clicks on the "myPlaylist" page "Change Playlist Type" "Button" element
        Then "myPlaylist" page "Playlist" "Type" is: "Private"

    Scenario: The user changes the type of a playlist from Private to Shared and won't be able to change it back to Private
        Given the user is on the "current" "myPlaylist" page
        Then "myPlaylist" page "Playlist" "Type" is: "Private"
        When the user clicks on the "myPlaylist" page "Playlist" "Menu" element
        Then the user clicks on the "myPlaylist" page "Shared" "Button" element
        And the user clicks on the "myPlaylist" page "Change Playlist Type" "Button" element
        Then "myPlaylist" page "Playlist" "Type" is: "Shared"
        Then the user on the "myPlaylist" page isn't able change "Playlist" type to "Private"

    Scenario: The user deletes current playlist
        Given the user clicks on the "myPlaylist" page "Playlist" "Menu" element
        Then the user clicks on the "myPlaylist" page "Delete Playlist" "Button" element
        And the user clicks on the "myPlaylist" page "Dialog Delete Playlist" "Button" element

    Scenario: The user creates a new playlist
        Given the user clicks on the "sidebar" "My Playlists" "Button" element
        Then the user is on the "myPlaylists" page
        When the user clicks on the "myPlaylists" page "Add Playlist" "Button" element
        Then the user "Input" "Name" in the "myPlaylists" "New Playlist" as: "Rock your body"
        Then the user "Input" "Description" in the "myPlaylists" "New Playlist" as: "Far far far away"
        Then the user clicks on the "myPlaylists" page "Create New Playlist" form "Button" element
        Then "toastify" "Information" "Message" is: "Playlist successfully created :)"

    Scenario: The user changes the type of a playlist from Public to Shared and won't be able to change it back to Public
        Given the user is on the "myPlaylists" page
        Then the user "Input" "Value" in the "myPlaylists" "Search Box" as: "Rock your body"
        And the user clicks on the "pagination" "Right" "Arrow" element
        When the user clicks on the "myPlaylists" page "Playlists" "Item" 1 element
        Then the user is on the "current" "myPlaylist" page
        Then "myPlaylist" page "Playlist" "Type" is: "Private"
        When the user clicks on the "myPlaylist" page "Playlist" "Menu" element
        Then the user clicks on the "myPlaylist" page "Public" "Button" element
        And the user clicks on the "myPlaylist" page "Change Playlist Type" "Button" element
        Then "myPlaylist" page "Playlist" "Type" is: "Public"
        When the user clicks on the "myPlaylist" page "Playlist" "Menu" element
        Then the user clicks on the "myPlaylist" page "Shared" "Button" element
        And the user clicks on the "myPlaylist" page "Change Playlist Type" "Button" element
        Then "myPlaylist" page "Playlist" "Type" is: "Shared"
        Then the user on the "myPlaylist" page isn't able change "Playlist" type to "Public"

    Scenario: The user deletes current playlist
        Given the user clicks on the "myPlaylist" page "Playlist" "Menu" element
        Then the user clicks on the "myPlaylist" page "Delete Playlist" "Button" element
        And the user clicks on the "myPlaylist" page "Dialog Delete Playlist" "Button" element

    Scenario: The user creates a new playlist
        Given the user clicks on the "sidebar" "My Playlists" "Button" element
        Then the user is on the "myPlaylists" page
        When the user clicks on the "myPlaylists" page "Add Playlist" "Button" element
        Then the user "Input" "Name" in the "myPlaylists" "New Playlist" as: "Rock your body"
        Then the user "Input" "Description" in the "myPlaylists" "New Playlist" as: "Far far far away"
        Then the user clicks on the "myPlaylists" page "Create New Playlist" form "Button" element
        Then "toastify" "Information" "Message" is: "Playlist successfully created :)"

    Scenario: When a playlist is changed to Private, it should not be visible or accessible to other app users.
        Given the user logging out
        Then the user is open "signIn" page
        Then the user is on the "signIn" page
        Then the user clicks on the "sidebar" "Public Playlists" "Button" element
        Then the user is on the "publicPlaylists" page
        Then the user "Input" "Value" in the "myPlaylists" "Search Box" as: "Rock your body"
        When the user clicks on the "publicPlaylists" page "Search" "Icon" element
        Then "Public Playlist Item" 1 element of "Public Playlists List" are not displayed on "publicPlaylists" page

    Scenario: When a playlist is changed to Public, it should be visible and accessible to all app users.
        Given the user "signIn" to the application
        Then the user clicks on the "sidebar" "My Playlists" "Button" element
        And the user clicks on the "pagination" "Right" "Arrow" element
        Then the user "Input" "Value" in the "myPlaylists" "Search Box" as: "Rock your body"
        When the user clicks on the "myPlaylists" page "Playlists" "Item" 1 element
        When the user clicks on the "myPlaylist" page "Playlist" "Menu" element
        Then the user clicks on the "myPlaylist" page "Public" "Button" element
        And the user clicks on the "myPlaylist" page "Change Playlist Type" "Button" element
        Then "myPlaylist" page "Playlist" "Type" is: "Public"
        Then the user logging out
        Then the user is open "signIn" page
        Then the user is on the "signIn" page
        Then the user clicks on the "sidebar" "Public Playlists" "Button" element
        Then the user is on the "publicPlaylists" page
        Then the user "Input" "Value" in the "myPlaylists" "Search Box" as: "Rock your body"
        When the user clicks on the "publicPlaylists" page "Search" "Icon" element
        Then "Public Playlist Item" 1 element of "Public Playlists List" are displayed on "publicPlaylists" page

    Scenario: The user deletes current playlist
        Given the user "signIn" to the application
        When the user clicks on the "sidebar" "My Playlists" "Button" element
        Then the user "Input" "Value" in the "myPlaylists" "Search Box" as: "Rock your body"
        When the user clicks on the "myPlaylists" page "Playlists" "Item" 1 element
        Then the user clicks on the "myPlaylist" page "Playlist" "Menu" element
        Then the user clicks on the "myPlaylist" page "Delete Playlist" "Button" element
        And the user clicks on the "myPlaylist" page "Dialog Delete Playlist" "Button" element