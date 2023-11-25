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

    Scenario: The user inputs wrong length of name and description
        Given the user clicks on the "sidebar" "My Playlists" "Button" element
        Then the user is on the "myPlaylists" page
        When the user clicks on the "myPlaylists" page "Add Playlist" "Button" element
        Then the user "Input" "Name" in the "myPlaylists" "New Playlist" as: "Ne"
        Then "myPlaylists" page "Short Name Input" "Error" is: "Too short, playlist name should be between 3 and 50 characters in length."
        Then the user "Input" "Description" in the "myPlaylists" "New Playlist" as: "Ne"
        Then "myPlaylists" page "Short Description Input" "Error" is: "Too short, playlist description should be between 3 and 1000 characters in length."
        Then the user "Input" "Name" in the "myPlaylists" "New Playlist" as: "Lorem ipsum dolor sit amet, consectetuer adipiscing eli"
        Then "myPlaylists" page "Too Big Name Input" "Error" is: "Too big, playlist name should be between 3 and 50 characters in length."
        Then the user "Input" "Description" in the "myPlaylists" "New Playlist" as: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam qu"
        Then "myPlaylists" page "Too Big Description Input" "Error" is: "Too big, playlist description should be between 3 and 1000 characters in length."

    Scenario: The user deletes data
        Then the user deletes personal account
        