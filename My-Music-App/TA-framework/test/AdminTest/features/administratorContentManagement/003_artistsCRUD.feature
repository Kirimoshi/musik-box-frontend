@003 @artistsCRUD

Feature: Admin "CRUD" Artists
    Scenario: Verify that the admin user log in with valid data
        Given the admin "login" to the system as the admin user
        Then the admin is on the "admin" page

    Scenario: Verifying details about artist in the "Artists" page
        Given the admin is on the "admin" page
        When the admin clicks on the "header" "Artists" "Button"
        Then the admin is on the "artists" page
        Then the "header" "Current" "Title" is: "Artists"
        Then the "artists" page 1 "Artist" has "Id"
        Then the "artists" page 1 "Artist" has "Name"
        Then the "artists" page 1 "Artist" has "Songs"
        Then the "artists" page 1 "Artist" has "Albums"
        Then the "artists" page 1 "Artist" has "View Button"
        Then the "artists" page 1 "Artist" has "Edit Button"
        Then the "artists" page 1 "Artist" has "Delete Button"

    Scenario: Verify that the admin can create new Artist
        Then the admin is on the "artists" page
        When the admin clicks on the "artists" page "New Artist" "Button"
        Then the admin is on the "new_artist" page
        Then the "header" "Current" "Title" is: "New Artist"
        Then the admin "Input" "Artist Name" in the "new_artist" page as: "Melodist"
        When the admin clicks on the "new_artist" page "Create Artist" "Button"
        Then the admin is on the "artists" "current_artist" page
        Then the "header" "Current" "Title" is: "Melodist"
        Then the "header" "Successfully" "Message" is: "Artist was successfully created."

    Scenario: Verify that the admin can view Artist
        Given the admin is on the "artists" "current_artist" page
        Then the "header" "Current" "Title" is: "Melodist"
        Then the "current_artist" page "Artist" "Name" is: "Melodist"
        Then the "current_artist" is "Created At" "Date"
        Then the "current_artist" is "Updated At" "Date"

    Scenario: Verify that the admin can update Artist
        Given the admin is on the "artists" "current_artist" page
        When the admin clicks on the "current_artist" page "Edit Artist" "Button"
        Then the admin is on the "artist_edit" page
        Then the "header" "Current" "Title" is: "Edit Artist"
        Then the admin "Input" "Edited Name" in the "artist_edit" page as: "NewMelodist"
        When the admin clicks on the "artist_edit" page "Update Artist" "Button"
        Then the "header" "Successfully" "Message" is: "Artist was successfully updated."
        Then the "current_artist" is "Updated At" "Date"
        Then the "header" "Current" "Title" is: "NewMelodist"

    Scenario: Verify that the admin can delete Artist
        Given the admin is on the "artists" "current_artist" page
        When the admin clicks on the "current_artist" page "Delete Artist" "Button"
        And the admin "accepts" alert
        Then the "header" "Successfully" "Message" is: "Artist was successfully destroyed."
        Then the admin is on the "artists" page
        Then the "header" "Current" "Title" is: "Artists"

        