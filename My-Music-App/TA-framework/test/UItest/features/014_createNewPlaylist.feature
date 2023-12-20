@014 @createNewPlaylist
Feature: EPMRDPEMAP-630 Create a New Playlist

    @Smoke
    Scenario: Verify the authenticated user is able to create a new playlist
        Given the user "signIn" to the application
        When the user is on the "home" page
        Then the user clicks on the "sidebar" "My Playlists" "Button"
        And the user is on the "myPlaylists" page
        And the user clicks on the "myPlaylists" page "Add Playlist" "Button"
        And the user "Input" "Name" in the "myPlaylists" "New Playlist" as: "The popular songs"
        And the user "Input" "Description" in the "myPlaylists" "New Playlist" as: "Far far far away"
        And the user clicks on the "myPlaylists" page "Create New Playlist" form "Button"
        And "toastify" "Information" "Message" is: "Playlist successfully created :)"
        And the user logging out

    @Regression
    Scenario: The new user sign-up and login to the application
        Given the user is open "signUp" page
        When the user sing-ups with "Scj15", "Valid25@ukr.net", "Qwer212@#", and "Qwer212@#"
        Then the user sing-ins with "Valid25@ukr.net" and "Qwer212@#"
        And the user is on the "home" page

    @Regression
    Scenario: Verify that the new playlist is created without songs
        Given the user clicks on the "sidebar" "My Playlists" "Button"
        When the user is on the "myPlaylists" page
        Then the user clicks on the "myPlaylists" page "Add Playlist" "Button"
        And the user "Input" "Name" in the "myPlaylists" "New Playlist" as: "The popular songs"
        And the user "Input" "Description" in the "myPlaylists" "New Playlist" as: "Far far far away"
        And the user clicks on the "myPlaylists" page "Create New Playlist" form "Button"
        And "toastify" "Information" "Message" is: "Playlist successfully created :)"
        And "My Playlist Songs List" elements of "My Playlists List" are not displayed on "myPlaylists" page

    @Regression
    Scenario: Verify that a new playlist type is private by default
        Given the user is on the "myPlaylists" page
        When the user clicks on the "myPlaylists" page "Playlists" "Item" 1 element
        Then the user is on the "current" "myPlaylist" page
        And "myPlaylist" page "Playlist" "Type" is: "Private"

    @Regression
    Scenario: The new playlist is displayed in the My Playlists page
        Given the user clicks on the "sidebar" "My Playlists" "Button"
        When the user is on the "myPlaylists" page
        Then the user clicks on the "myPlaylists" page "Add Playlist" "Button"
        And the user "Input" "Name" in the "myPlaylists" "New Playlist" as: "The most popular songs"
        And the user "Input" "Description" in the "myPlaylists" "New Playlist" as: "La la la"
        And the user clicks on the "myPlaylists" page "Create New Playlist" form "Button"
        And "toastify" "Information" "Message" is: "Playlist successfully created :)"
        And the "The most popular songs" "Playlist" is added to the "myPlaylists" page playlists list

    @Regression
    Scenario: The user discard creating a new playlist
        Given the user clicks on the "sidebar" "My Playlists" "Button"
        When the user is on the "myPlaylists" page
        Then the user clicks on the "myPlaylists" page "Add Playlist" "Button"
        And the user "Input" "Name" in the "myPlaylists" "New Playlist" as: "А вже весна"
        And the user "Input" "Description" in the "myPlaylists" "New Playlist" as: "Ніч яка місячна"
        And the user clicks on the "myPlaylists" page "Close" "Window"
        And the user clicks on the "myPlaylists" page "Discard" "Button"
        And the "А вже весна" "playlist" is not added to the "myPlaylists" page playlists list

    @Regression
    Scenario: Verify the avilaible formats of the playlist logo image
        Given the user clicks on the "sidebar" "My Playlists" "Button"
        When the user is on the "myPlaylists" page
        Then the user clicks on the "myPlaylists" page "Add Playlist" "Button"
        And in the "myPlaylists" page user is able to add "Logo" in the "Playlist Dialog Window" with "jpeg, png, jpg, svg" formats
        And the user clicks on the "myPlaylists" page "Close" "Window"
        And the user clicks on the "myPlaylists" page "Discard" "Button"

    @Regression
    Scenario: The user inputs wrong length of name and description
        Given the user clicks on the "sidebar" "My Playlists" "Button"
        When the user is on the "myPlaylists" page
        Then the user clicks on the "myPlaylists" page "Add Playlist" "Button"
        And the user "Input" "Name" in the "myPlaylists" "New Playlist" as: "Ne"
        And "myPlaylists" page "Short Name Input" "Error" is: "Too short, playlist name should be between 3 and 50 characters in length."
        And the user "Input" "Description" in the "myPlaylists" "New Playlist" as: "Ne"
        And "myPlaylists" page "Short Description Input" "Error" is: "Too short, playlist description should be between 3 and 1000 characters in length."
        And the user "Input" "Name" in the "myPlaylists" "New Playlist" as: "Lorem ipsum dolor sit amet, consectetuer adipiscing eli"
        And "myPlaylists" page "Too Big Name Input" "Error" is: "Too big, playlist name should be between 3 and 50 characters in length."
        And the user "Input" "Description" in the "myPlaylists" "New Playlist" as: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam qu"
        And "myPlaylists" page "Too Big Description Input" "Error" is: "Too big, playlist description should be between 3 and 1000 characters in length."

    @Regression
    Scenario: The user deletes data
        Given the user deletes personal account
        