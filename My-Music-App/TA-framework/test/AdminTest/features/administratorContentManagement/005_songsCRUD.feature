@005 @songsCRUD

Feature: Admin "CRUD" Songs
    Scenario: Verify that the admin user log in with valid data
        Given the admin "login" to the system as the admin user
        Then the admin is on the "admin" page

    Scenario: Verifying details about songs in the "Songs" page
        Given the admin is on the "admin" page
        When the admin clicks on the "header" "Songs" "Button"
        Then the admin is on the "songs" page
        Then the "header" "Current" "Title" is: "Songs"
        Then the length of "Songs" in the "songs" page is 30 "Elements"
        Then the "songs" page 1 "Song" has "Id"
        Then the "songs" page 1 "Song" has "Title"
        Then the "songs" page 1 "Song" has "Album"
        Then the "songs" page 1 "Song" has "Artists"
        Then the "songs" page 1 "Song" has "Genre"
        Then the "songs" page 1 "Song" has "View Button"
        Then the "songs" page 1 "Song" has "Edit Button"
        Then the "songs" page 1 "Song" has "Delete Button"

    Scenario: Verify that the admin can create new Song
        Given the admin is on the "songs" page
        When the admin clicks on the "songs" page "New Song" "Button"
        Then the admin is on the "new_song" page
        Then the "header" "Current" "Title" is: "New Song"
        Then the admin "Input" "Song Title" in the "new_song" page as: "Dancing City"
        Then the admin "Select" 1 "Song" "Album" in the "new_song" page
        Then the admin "Select" 1 "Artist" "Id" in the "new_song" page
        Then the admin "Select" 1 "Song" "Genre" in the "new_song" page
        When the admin clicks on the "new_song" page "Create Song" "Button"
        Then the admin is on the "songs" "current_song" page
        Then the "header" "Current" "Title" is: "Dancing City"
        Then the "header" "Successfully" "Message" is: "Song was successfully created."

    Scenario: Verify that the admin can view Song
        Given the admin is on the "songs" "current_song" page
        Then the "header" "Current" "Title" is: "Dancing City"
        Then the "current_song" page "Song" "Title" is: "Dancing City"
        Then the "current_song" page "Album" "Name" is: "Heart Blanche"
        Then the "current_song" is "Created At" "Date"
        Then the "current_song" is "Updated At" "Date"

    Scenario: Verify that the admin can update Song
        Given the admin is on the "songs" "current_song" page
        When the admin clicks on the "current_song" page "Edit Song" "Button"
        Then the admin is on the "song_edit" page
        Then the "header" "Current" "Title" is: "Edit Song"
        Then the admin "Input" "Edited Title" in the "song_edit" page as: "In the moon"
        Then the admin "Select" 2 "Song" "Album" in the "song_edit" page
        Then the admin "Select" 2 "Artist" "Id" in the "song_edit" page
        Then the admin "Select" 2 "Song" "Genre" in the "song_edit" page
        When the admin clicks on the "song_edit" page "Update Song" "Button"
        Then the "header" "Successfully" "Message" is: "Song was successfully updated."
        Then the "current_song" is "Updated At" "Date"
        Then the "header" "Current" "Title" is: "In the moon"

    Scenario: Verify that the admin can delete Song
        Given the admin is on the "songs" "current_song" page
        When the admin clicks on the "current_song" page "Delete Song" "Button"
        And the admin "accepts" alert
        Then the admin is on the "songs" page
        Then the "header" "Current" "Title" is: "Songs"
        Then the "header" "Successfully" "Message" is: "Song was successfully destroyed."