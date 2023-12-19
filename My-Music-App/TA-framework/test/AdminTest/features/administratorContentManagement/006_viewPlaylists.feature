@006 @viewPlaylists @Smoke
Feature: Admin view the Playlists

    Scenario: Verifying details about playlists in the "Playlists" page
        Given the admin "login" to the system as the admin user
        When the admin is on the "admin" page
        Then the admin clicks on the "header" "Playlists" "Button"
        And the admin is on the "playlists" page
        And the "header" "Current" "Title" is: "Playlists"
        And the length of "Playlists" in the "playlists" page is 30 "Elements"
        And the "playlists" page 1 "Playlist" has "Id"
        And the "playlists" page 1 "Playlist" has "Name"
        And the "playlists" page 1 "Playlist" has "Description"
        And the "playlists" page 1 "Playlist" has "Type"
        And the "playlists" page 1 "Playlist" has "Logo"
        And the "playlists" page 1 "Playlist" has "Created Date"
        And the "playlists" page 1 "Playlist" has "Updated Date"
        And the "playlists" page 1 "Playlist" has "Featured"
        And the "playlists" page 1 "Playlist" has "View Button"
        And the "playlists" page 1 "Playlist" has "Edit Button"

    Scenario: Verifying the ability to make certain playlist Featured
        Given the admin is on the "playlists" page
        When the admin clicks on the "playlists" page 1 "Playlist Edit" "Button"
        Then the admin is on the "playlist_edit" page
        And the "header" "Current" "Title" is: "Edit Playlist"
        And the admin "Check" on the "playlist_edit" page "Feature"
        And the admin clicks on the "playlist_edit" page "Update Playlist" "Button"
        And the admin is on the "playlists" "current_playlist" page
        And the "header" "Successfully" "Message" is: "Playlist was successfully updated."
        And the "current_playlist" page "Feature" "Label" is: "YES"


        