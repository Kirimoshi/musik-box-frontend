@014 @createNewPlaylist

Feature: EPMRDPEMAP-630 Create a New Playlist

    Scenario: The new user sign-up and login to the application
        Given the user is open "signUp" page
        Then the user sing-ups with <nickname>, <email>, <password>, and <confirm_password>
        When the user sing-ins with <email> and <password>
        Then the user is on the "home" page

        Examples:
            | nickname | email             | password    | confirm_password |
            | "Scj15"  | "Valid25@ukr.net" | "Qwer212@#" | "Qwer212@#"      |

    Scenario: The new playlist is created with Private type by default and without songs
        When the user clicks on the "sidebar" "My Playlists" "Button" element
        Then the user is on the "myPlaylists" page
        When the user clicks on the "myPlaylists" page "Add Playlist" "Button" element
        Then the user "Input" "Name" in the "myPlaylists" "New Playlist" as: "The popular songs"
        Then the user "Input" "Description" in the "myPlaylists" "New Playlist" as: "Far far far away"
        Then the user clicks on the "myPlaylists" page "Create New Playlist" form "Button" element
        Then "toastify" "Information" "Message" is: "Playlist successfully created :)"
        And "My Playlist Songs List" elements of "My Playlists List" are not displayed on "myPlaylists" page
        When the user clicks on the "myPlaylists" page "Playlists" "Item" 1 element
        Then the user is on the "current" "myPlaylist" page
        Then "myPlaylist" page "Playlist" "Type" is: "Private"

    Scenario: The new playlist is displayed in the My Playlists page
        When the user clicks on the "sidebar" "My Playlists" "Button" element
        Then the user is on the "myPlaylists" page
        When the user clicks on the "myPlaylists" page "Add Playlist" "Button" element
        Then the user "Input" "Name" in the "myPlaylists" "New Playlist" as: "The most popular songs"
        Then the user "Input" "Description" in the "myPlaylists" "New Playlist" as: "La la la"
        Then the user clicks on the "myPlaylists" page "Create New Playlist" form "Button" element
        Then "toastify" "Information" "Message" is: "Playlist successfully created :)"
        Then the "The most popular songs" "My Playlist" is added to the "myPlaylists" page playlists list

    Scenario: The user discard creating a new playlist
        When the user clicks on the "sidebar" "My Playlists" "Button" element
        Then the user is on the "myPlaylists" page
        When the user clicks on the "myPlaylists" page "Add Playlist" "Button" element
        Then the user "Input" "Name" in the "myPlaylists" "New Playlist" as: "А вже весна"
        Then the user "Input" "Description" in the "myPlaylists" "New Playlist" as: "Ніч яка місячна"
        When the user clicks on the "myPlaylists" page "Close" "Window" element
        Then the user clicks on the "myPlaylists" page "Discard" "Button" element
        Then the "А вже весна" "My Playlist" is not added to the "myPlaylists" page playlists list

    Scenario: Verify the avilaible formats of the playlist logo image
        When the user clicks on the "sidebar" "My Playlists" "Button" element
        Then the user is on the "myPlaylists" page
        When the user clicks on the "myPlaylists" page "Add Playlist" "Button" element
        Then in the "myPlaylists" page user is able to add "Logo" to the "New Playlist" with "jpeg, png, jpg, svg" formats
        When the user clicks on the "myPlaylists" page "Close" "Window" element
        Then the user clicks on the "myPlaylists" page "Discard" "Button" element

    Scenario: The user verify playlist name for the number of input characters
        Given the user clicks on the "sidebar" "My Playlists" "Button" element
        Then the user is on the "myPlaylists" page
        When the user clicks on the "myPlaylists" page "Add Playlist" "Button" element
        Then the user "Input" "Name" in the "myPlaylists" "New Playlist" as: "Ne"
        Then "myPlaylists" page "Input" "Error" is: "Too short, playlist name should be between 3 and 50 characters in length."
        Then the user "Input" "Description" in the "myPlaylists" "New Playlist" as: "Ne"
        Then "myPlaylists" page "Error" "Description" is: "Too short, playlist description should be between 3 and 1000 characters in length."
    
    Scenario: The user deletes data
        Then the user deletes personal account
        