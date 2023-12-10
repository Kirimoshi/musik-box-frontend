@006 @viewPlaylists @Smoke
Feature: Admin view the Playlists

    @AdminLogin @Regression
    Scenario: Verify that the admin user log in with valid data
        Given the admin "login" to the system as the admin user
        Then the admin is on the "admin" page

    Scenario: Verifying details about playlists in the "Playlists" page
        Given the admin is on the "admin" page
        When the admin clicks on the "header" "Playlists" "Button"
        Then the admin is on the "playlists" page
        Then the "header" "Current" "Title" is: "Playlists"
        Then the length of "Playlists" in the "playlists" page is 30 "Elements"
        Then the "playlists" page 1 "Playlist" has "Id"
        Then the "playlists" page 1 "Playlist" has "Name"
        Then the "playlists" page 1 "Playlist" has "Description"
        Then the "playlists" page 1 "Playlist" has "Type"
        Then the "playlists" page 1 "Playlist" has "Logo"
        Then the "playlists" page 1 "Playlist" has "Created Date"
        Then the "playlists" page 1 "Playlist" has "Updated Date"
        Then the "playlists" page 1 "Playlist" has "Featured"
        Then the "playlists" page 1 "Playlist" has "View Button"
        Then the "playlists" page 1 "Playlist" has "Edit Button"

    Scenario: Verifying the ability to make certain playlist Featured
        Given the admin is on the "playlists" page
        When the admin clicks on the "playlists" page 1 "Playlist Edit" "Button"
        Then the admin is on the "playlist_edit" page
        Then the "header" "Current" "Title" is: "Edit Playlist"
        When the admin "Check" on the "playlist_edit" page "Feature"
        When the admin clicks on the "playlist_edit" page "Update Playlist" "Button"
        Then the admin is on the "playlists" "current_playlist" page
        Then the "header" "Successfully" "Message" is: "Playlist was successfully updated."
        Then the "current_playlist" page "Feature" "Label" is: "YES"


        