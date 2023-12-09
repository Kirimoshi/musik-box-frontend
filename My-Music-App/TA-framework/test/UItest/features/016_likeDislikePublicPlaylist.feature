@016 @likeDislikePublicPlaylist
Feature: EPMRDPEMAP-645 Like and Dislike public playlist

    Scenario: The new user sign-up and login to the application
        Given the user is open "signUp" page
        And the user sing-ups with <nickname>, <email>, <password>, and <confirm_password>
        When the user sing-ins with <email> and <password>
        Then the user is on the "home" page

        Examples:
            | nickname | email             | password    | confirm_password |
            | "Scj15"  | "Valid25@ukr.net" | "Qwer212@#" | "Qwer212@#"      |

    Scenario: The user creates new playlist
        Given the user clicks on the "sidebar" "My Playlists" "Button" element
        And the user clicks on the "myPlaylists" page "Add Playlist" "Button" element
        When the user "Input" "Name" in the "myPlaylists" "New Playlist" as: "The popular songs"
        Then the user "Input" "Description" in the "myPlaylists" "New Playlist" as: "Far far far away"
        And the user clicks on the "myPlaylists" page "Create New Playlist" form "Button" element
        And "toastify" "Information" "Message" is: "Playlist successfully created :)"

    Scenario: The user change type of playlist to Public
        Given the user clicks on the "myPlaylists" page "Playlists" "Item" 1 element
        And the user clicks on the "myPlaylist" page "Playlist" "Menu" element
        When the user clicks on the "myPlaylist" page "Public" "Button" element
        Then the user clicks on the "myPlaylist" page "Change Playlist Type" "Button" element
        And "myPlaylist" page "Playlist" "Type" is: "Public"

    Scenario: The user logging out from the application
        Given the user logging out

    Scenario: The user signs-in to another account 
        Given the user "signIn" to the application
        And the user is on the "home" page

    Scenario: The user verifying like and dislike elements in the "The popular songs" Public playlist
        Given the user is open "The popular songs" "publicPlaylist" in the "publicPlaylists" page
        And "Public Playlist Like Button" is displayed on "publicPlaylist" page
        And "Public Playlist Dislike Button" is displayed on "publicPlaylist" page
        And "Public Playlist Like Counter" is displayed on "publicPlaylist" page
        And "Public Playlist Dislike Counter" is displayed on "publicPlaylist" page

    Scenario: The user is able to like the "The popular songs" Public playlist
        Given the "Public Playlist Like Counter" in the "publicPlaylist" has "0" value
        And the user clicks on the "publicPlaylist" page "Public Playlist" "Like Button" element
        When the user likes "The popular songs" playlist
        Then the "Public Playlist Like Counter" in the "publicPlaylist" has "1" value

    Scenario: The user is able to discard like the "The popular songs" Public playlist
        Given the "Public Playlist Like Counter" in the "publicPlaylist" has "1" value
        And the user clicks on the "publicPlaylist" page "Public Playlist" "Like Button" element
        When the user discard likes "The popular songs" playlist
        Then the "Public Playlist Like Counter" in the "publicPlaylist" has "0" value

    Scenario: The user is able to dislike the "The popular songs" Public playlist
        Given the "Public Playlist Dislike Counter" in the "publicPlaylist" has "0" value
        And the user clicks on the "publicPlaylist" page "Public Playlist" "Dislike Button" element
        When the user dislikes "The popular songs" playlist
        Then the "Public Playlist Dislike Counter" in the "publicPlaylist" has "1" value

    Scenario: The user is able to discard dislike the "The popular songs" Public playlist
        Given the "Public Playlist Dislike Counter" in the "publicPlaylist" has "1" value
        And the user clicks on the "publicPlaylist" page "Public Playlist" "Dislike Button" element
        When the user discard dislikes "The popular songs" playlist
        Then the "Public Playlist Dislike Counter" in the "publicPlaylist" has "0" value

    Scenario: The user logging out from the application
        Given the user logging out

    Scenario: The unauthorized user isn't able to like or dislike "The popular songs" Public playlist
        Given the user is open "home" page
        And the user is open "The popular songs" "publicPlaylist" in the "publicPlaylists" page
        When the user isn't able to click on the "Public Playlist Like Button" of "publicPlaylist"
        Then the user isn't able to click on the "Public Playlist Dislike Button" of "publicPlaylist"

    Scenario: Validating an error message due to technical or other reasons
        Given the user "signIn" to the application
        And the user is on the "home" page
        When the user is open "The popular songs" "publicPlaylist" in the "publicPlaylists" page
        Then the Internet connection is interrupted
        And the user clicks on the "publicPlaylist" page "Public Playlist" "Like Button" element
        And "toastify" "Information" "Message" is: "Oops, looks like something went wrong. Please try again later."

    Scenario: The user deletes data
        Given the user deletes personal account




    