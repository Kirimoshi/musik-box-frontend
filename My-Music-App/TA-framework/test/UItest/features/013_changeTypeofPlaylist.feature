@013 @changeTypeofPlaylist
Feature: EPMRDPEMAP-651 Change the type of a Public or Private Playlist

    Background: The new user creates a new playlist
        Given the user is open "signUp" page
        When the user sing-ups with "Scj15", "Valid25@ukr.net", "Qwer212@#", and "Qwer212@#"
        Then the user sing-ins with "Valid25@ukr.net" and "Qwer212@#"
        And the user clicks on the "sidebar" "My Playlists" "Button"
        And the user clicks on the "myPlaylists" page "Add Playlist" "Button"
        And the user "Input" "Name" in the "myPlaylists" "New Playlist" as: "The popular songs"
        And the user "Input" "Description" in the "myPlaylists" "New Playlist" as: "Far far far away"
        And the user clicks on the "myPlaylists" page "Create New Playlist" form "Button"
        And "toastify" "Information" "Message" is: "Playlist successfully created :)"

    @Regression
    Scenario: The user discards the confirmation of changing type of a playlist
        Given the user is on the "myPlaylists" page
        When the user clicks on the "myPlaylists" page "Playlists" "Item" 1 element
        Then the user is on the "current" "myPlaylist" page
        And "myPlaylist" page "Playlist" "Type" is: "Private"
        And the user clicks on the "myPlaylist" page "Playlist" "Menu"
        And the user clicks on the "myPlaylist" page "Public" "Button"
        And the user clicks on the "myPlaylist" page "Dialog Cancel" "Button"
        And "myPlaylist" page "Playlist" "Type" is: "Private"
        And the user deletes personal account

    @Smoke
    Scenario: The user changes type of a playlist from Private to Public and from Public to Private
        Given the user clicks on the "myPlaylists" page "Playlists" "Item" 1 element
        When the user is on the "current" "myPlaylist" page
        Then "myPlaylist" page "Playlist" "Type" is: "Private"
        And the user clicks on the "myPlaylist" page "Playlist" "Menu"
        And the user clicks on the "myPlaylist" page "Public" "Button"
        And the user clicks on the "myPlaylist" page "Change Playlist Type" "Button"
        And "myPlaylist" page "Playlist" "Type" is: "Public"
        And the user clicks on the "myPlaylist" page "Playlist" "Menu"
        And the user clicks on the "myPlaylist" page "Private" "Button"
        And the user clicks on the "myPlaylist" page "Change Playlist Type" "Button"
        And "myPlaylist" page "Playlist" "Type" is: "Private"
        And the user deletes personal account

    @Smoke
    Scenario: The user changes the type of a playlist from Private to Shared and won't be able to change it back to Private
        Given the user clicks on the "myPlaylists" page "Playlists" "Item" 1 element
        When the user is on the "current" "myPlaylist" page
        Then "myPlaylist" page "Playlist" "Type" is: "Private"
        And the user clicks on the "myPlaylist" page "Playlist" "Menu" element
        And the user clicks on the "myPlaylist" page "Shared" "Button" element
        And the user clicks on the "myPlaylist" page "Change Playlist Type" "Button" element
        And "myPlaylist" page "Playlist" "Type" is: "Shared"
        And the user on the "myPlaylist" page isn't able change "Playlist" type to "Private"
        And the user deletes personal account

    @Smoke
    Scenario: The user changes the type of a playlist from Public to Shared and won't be able to change it back to Public
        Given the user clicks on the "myPlaylists" page "Playlists" "Item" 1 element
        When the user is on the "current" "myPlaylist" page
        Then "myPlaylist" page "Playlist" "Type" is: "Private"
        And the user clicks on the "myPlaylist" page "Playlist" "Menu"
        And the user clicks on the "myPlaylist" page "Public" "Button"
        And the user clicks on the "myPlaylist" page "Change Playlist Type" "Button"
        And "myPlaylist" page "Playlist" "Type" is: "Public"
        And the user clicks on the "myPlaylist" page "Playlist" "Menu"
        And the user clicks on the "myPlaylist" page "Shared" "Button"
        And the user clicks on the "myPlaylist" page "Change Playlist Type" "Button"
        And "myPlaylist" page "Playlist" "Type" is: "Shared"
        And the user on the "myPlaylist" page isn't able change "Playlist" type to "Public"
        And the user deletes personal account

    @Regression
    Scenario: When a playlist is changed to Private, it should not be visible or accessible to other app users.
        Given the user clicks on the "myPlaylists" page "Playlists" "Item" 1 element
        When the user is on the "current" "myPlaylist" page
        Then "myPlaylist" page "Playlist" "Type" is: "Private"
        And the user logging out
        And the user is open "signIn" page
        And the user is on the "signIn" page
        And the user clicks on the "sidebar" "Public Playlists" "Button" element
        And the user is on the "publicPlaylists" page
        And "The popular songs" private playlist is not visible to all app users
        And the user deletes personal account

    @Regression
    Scenario: When a playlist is changed to Public, it should be visible and accessible to all app users.
        Given the user clicks on the "myPlaylists" page "Playlists" "Item" 1 element
        When the user clicks on the "myPlaylist" page "Playlist" "Menu" element
        Then the user clicks on the "myPlaylist" page "Public" "Button" element
        And the user clicks on the "myPlaylist" page "Change Playlist Type" "Button" element
        And "myPlaylist" page "Playlist" "Type" is: "Public"
        And the user logging out
        And the user is open "signIn" page
        And the user clicks on the "sidebar" "Public Playlists" "Button" element
        And the user is on the "publicPlaylists" page
        And "The popular songs" public playlist is visible to all app users
        And the user deletes personal account