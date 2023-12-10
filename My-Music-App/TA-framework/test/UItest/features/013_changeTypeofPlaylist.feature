@013 @changeTypeofPlaylist @Regression
Feature: EPMRDPEMAP-651 Change the type of a Public or Private Playlist

    Scenario: The new user login to the application
        Given the user is open "signUp" page
        Then the user sing-ups with <nickname>, <email>, <password>, and <confirm_password>
        When the user sing-ins with <email> and <password>
        Then the user is on the "home" page

        Examples:
            | nickname | email             | password    | confirm_password |
            | "Scj15"  | "Valid25@ukr.net" | "Qwer212@#" | "Qwer212@#"      |

    Scenario: The user creates a new playlist
        Given the user clicks on the "sidebar" "My Playlists" "Button" element
        When the user is on the "myPlaylists" page
        When the user clicks on the "myPlaylists" page "Add Playlist" "Button" element
        Then the user "Input" "Name" in the "myPlaylists" "New Playlist" as: "The popular songs"
        Then the user "Input" "Description" in the "myPlaylists" "New Playlist" as: "Far far far away"
        Then the user clicks on the "myPlaylists" page "Create New Playlist" form "Button" element
        Then "toastify" "Information" "Message" is: "Playlist successfully created :)"

    Scenario: The user discards the confirmation of changing type of a playlist
        Given the user is on the "myPlaylists" page
        When the user clicks on the "myPlaylists" page "Playlists" "Item" 1 element
        Then the user is on the "current" "myPlaylist" page
        Then "myPlaylist" page "Playlist" "Type" is: "Private"
        When the user clicks on the "myPlaylist" page "Playlist" "Menu" element
        Then the user clicks on the "myPlaylist" page "Public" "Button" element
        And the user clicks on the "myPlaylist" page "Dialog Cancel" "Button" element
        Then "myPlaylist" page "Playlist" "Type" is: "Private"

    @ChangeTypeofPlaylistFromPrivateToPublic @Smoke
    Scenario: The user changes type of a playlist from Private to Public
        Given the user is on the "current" "myPlaylist" page
        Then "myPlaylist" page "Playlist" "Type" is: "Private"
        Then the user clicks on the "myPlaylist" page "Public" "Button" element
        And the user clicks on the "myPlaylist" page "Change Playlist Type" "Button" element
        Then "myPlaylist" page "Playlist" "Type" is: "Public"

    @ChangeTypeofPlaylistFromPublicToPrivate @Smoke
    Scenario: The user changes type of a playlist from Public to Private
        Given the user is on the "current" "myPlaylist" page
        Then "myPlaylist" page "Playlist" "Type" is: "Public"
        When the user clicks on the "myPlaylist" page "Playlist" "Menu" element
        Then the user clicks on the "myPlaylist" page "Private" "Button" element
        And the user clicks on the "myPlaylist" page "Change Playlist Type" "Button" element
        Then "myPlaylist" page "Playlist" "Type" is: "Private"

    @ChangeTypeofPlaylistFromPrivateToShared @Smoke
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
        Then the user "Input" "Name" in the "myPlaylists" "New Playlist" as: "The popular songs"
        Then the user "Input" "Description" in the "myPlaylists" "New Playlist" as: "Far far far away"
        Then the user clicks on the "myPlaylists" page "Create New Playlist" form "Button" element
        Then "toastify" "Information" "Message" is: "Playlist successfully created :)"

    @ChangeTypeofPlaylistFromPublicToShared @Smoke
    Scenario: The user changes the type of a playlist from Public to Shared and won't be able to change it back to Public
        Given the user is on the "myPlaylists" page
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
        Then the user "Input" "Name" in the "myPlaylists" "New Playlist" as: "The popular songs"
        Then the user "Input" "Description" in the "myPlaylists" "New Playlist" as: "Far far far away"
        Then the user clicks on the "myPlaylists" page "Create New Playlist" form "Button" element
        Then "toastify" "Information" "Message" is: "Playlist successfully created :)"
        When the user clicks on the "myPlaylists" page "Playlists" "Item" 1 element

    Scenario: When a playlist is changed to Private, it should not be visible or accessible to other app users.
        Given "myPlaylist" page "Playlist" "Type" is: "Private"
        Then the user logging out
        Then the user is open "signIn" page
        Then the user is on the "signIn" page
        Then the user clicks on the "sidebar" "Public Playlists" "Button" element
        Then the user is on the "publicPlaylists" page
        Then "The popular songs" private playlist is not visible to all app users

    Scenario: When a playlist is changed to Public, it should be visible and accessible to all app users.
        Given the user is open "signIn" page
        Then the user sing-ins with <email> and <password>
        Then the user clicks on the "sidebar" "My Playlists" "Button" element
        When the user clicks on the "myPlaylists" page "Playlists" "Item" 1 element
        When the user clicks on the "myPlaylist" page "Playlist" "Menu" element
        Then the user clicks on the "myPlaylist" page "Public" "Button" element
        And the user clicks on the "myPlaylist" page "Change Playlist Type" "Button" element
        Then "myPlaylist" page "Playlist" "Type" is: "Public"
        Then the user logging out
        Then the user is open "signIn" page
        Then the user clicks on the "sidebar" "Public Playlists" "Button" element
        Then the user is on the "publicPlaylists" page
        Then "The popular songs" public playlist is visible to all app users
        
        Examples:
            | email             | password    |
            | "Valid25@ukr.net" | "Qwer212@#" |

    ## Scenario: When a playlist is changed to Shared, It is accessible only for user’s friends. #Not implemented yet

    Scenario: The user deletes data
    Then the user deletes personal account