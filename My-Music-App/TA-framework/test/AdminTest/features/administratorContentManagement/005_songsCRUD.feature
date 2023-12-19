@005 @songsCRUD
Feature: Admin "CRUD" Songs

    @Regression
    Scenario: Verifying details about songs in the "Songs" page
        Given the admin "login" to the system as the admin user
        When the admin is on the "admin" page
        Then the admin clicks on the "header" "Songs" "Button"
        And the admin is on the "songs" page
        And the "header" "Current" "Title" is: "Songs"
        And the length of "Songs" in the "songs" page is 30 "Elements"
        And the "songs" page 1 "Song" has "Id"
        And the "songs" page 1 "Song" has "Title"
        And the "songs" page 1 "Song" has "Album"
        And the "songs" page 1 "Song" has "Artists"
        And the "songs" page 1 "Song" has "Genre"
        And the "songs" page 1 "Song" has "View Button"
        And the "songs" page 1 "Song" has "Edit Button"
        And the "songs" page 1 "Song" has "Delete Button"
        And the admin user log-out
    
    @Smoke
    Scenario: Verify that the admin can create new Song
        Given the admin "login" to the system as the admin user
        When the admin clicks on the "header" "Songs" "Button"
        Then the admin is on the "songs" page
        And the admin clicks on the "songs" page "New Song" "Button"
        And the admin is on the "new_song" page
        And the "header" "Current" "Title" is: "New Song"
        And the admin "Input" "Song Title" in the "new_song" page as: "Dancing City"
        And the admin "Select" 1 "Song" "Album" in the "new_song" page
        And the admin "Select" 1 "Artist" "Id" in the "new_song" page
        And the admin "Select" 1 "Song" "Genre" in the "new_song" page
        And the admin clicks on the "new_song" page "Create Song" "Button"
        And the admin is on the "songs" "current_song" page
        And the "header" "Current" "Title" is: "Dancing City"
        And the "header" "Successfully" "Message" is: "Song was successfully created."

    @Smoke
    Scenario: Verify that the admin can view Song
        Given the admin is on the "songs" "current_song" page
        When the "header" "Current" "Title" is: "Dancing City"
        Then "Song Title" is displayed on "current_song" page
        And "Album Name" is displayed on "current_song" page
        And the "current_song" is "Created At" "Date"
        And the "current_song" is "Updated At" "Date"

    @Smoke
    Scenario: Verify that the admin can update Song
        Given the admin is on the "songs" "current_song" page
        When the admin clicks on the "current_song" page "Edit Song" "Button"
        Then the admin is on the "song_edit" page
        And the "header" "Current" "Title" is: "Edit Song"
        And the admin "Input" "Edited Title" in the "song_edit" page as: "In the moon"
        And the admin "Select" 2 "Song" "Album" in the "song_edit" page
        And the admin "Select" 2 "Artist" "Id" in the "song_edit" page
        And the admin "Select" 2 "Song" "Genre" in the "song_edit" page
        And the admin clicks on the "song_edit" page "Update Song" "Button"
        And the "header" "Successfully" "Message" is: "Song was successfully updated."
        And the "current_song" is "Updated At" "Date"
        And the "header" "Current" "Title" is: "In the moon"

    @Smoke
    Scenario: Verify that the admin can delete Song
        Given the admin is on the "songs" "current_song" page
        When the admin clicks on the "current_song" page "Delete Song" "Button"
        Then the admin "accepts" alert
        And the admin is on the "songs" page
        And the "header" "Current" "Title" is: "Songs"
        And the "header" "Successfully" "Message" is: "Song was successfully destroyed."