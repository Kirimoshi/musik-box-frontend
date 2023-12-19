@003 @artistsCRUD
Feature: Admin "CRUD" Artists

    @Regression
    Scenario: Verifying details about artist in the "Artists" page
        Given the admin "login" to the system as the admin user
        When the admin is on the "admin" page
        Then the admin clicks on the "header" "Artists" "Button"
        And the admin is on the "artists" page
        And the "header" "Current" "Title" is: "Artists"
        And the "artists" page 1 "Artist" has "Id"
        And the "artists" page 1 "Artist" has "Name"
        And the "artists" page 1 "Artist" has "Songs"
        And the "artists" page 1 "Artist" has "Albums"
        And the "artists" page 1 "Artist" has "View Button"
        And the "artists" page 1 "Artist" has "Edit Button"
        And the "artists" page 1 "Artist" has "Delete Button"
        And the admin user log-out

    @Smoke
    Scenario: Verify that the admin can create new Artist
        Given the admin "login" to the system as the admin user
        When the admin clicks on the "header" "Artists" "Button"
        Then the admin is on the "artists" page
        And the admin clicks on the "artists" page "New Artist" "Button"
        And the admin is on the "new_artist" page
        And the "header" "Current" "Title" is: "New Artist"
        And the admin "Input" "Artist Name" in the "new_artist" page as: "Melodist"
        And the admin clicks on the "new_artist" page "Create Artist" "Button"
        And the admin is on the "artists" "current_artist" page
        And the "header" "Current" "Title" is: "Melodist"
        And the "header" "Successfully" "Message" is: "Artist was successfully created."

    @Smoke
    Scenario: Verify that the admin can view Artist
        Given the admin is on the "artists" "current_artist" page
        Then the "header" "Current" "Title" is: "Melodist"
        Then the "current_artist" page "Artist" "Name" is: "Melodist"
        Then the "current_artist" is "Created At" "Date"
        Then the "current_artist" is "Updated At" "Date"
    
    @Smoke
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
    
    @Smoke
    Scenario: Verify that the admin can delete Artist
        Given the admin is on the "artists" "current_artist" page
        When the admin clicks on the "current_artist" page "Delete Artist" "Button"
        And the admin "accepts" alert
        Then the "header" "Successfully" "Message" is: "Artist was successfully destroyed."
        Then the admin is on the "artists" page
        Then the "header" "Current" "Title" is: "Artists"

        