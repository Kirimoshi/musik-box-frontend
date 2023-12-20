@004 @albumsCRUD
Feature: Admin "CRUD" Albums

    @Regression
    Scenario: Verifying details about album in the "Albums" page
        Given the admin "login" to the system as the admin user
        When the admin is on the "admin" page
        Then the admin clicks on the "header" "Albums" "Button"
        And the admin is on the "albums" page
        And the "header" "Current" "Title" is: "Albums"
        And the "albums" page 1 "Album" has "Id"
        And the "albums" page 1 "Album" has "Title"
        And the "albums" page 1 "Album" has "Cover"
        And the "albums" page 1 "Album" has "Songs"
        And the "albums" page 1 "Album" has "Artist"
        And the "albums" page 1 "Album" has "View Button"
        And the "albums" page 1 "Album" has "Edit Button"
        And the "albums" page 1 "Album" has "Delete Button"
        And the admin user log-out
    
    @Smoke
    Scenario: Verify that the admin can create new Album
        Given the admin "login" to the system as the admin user
        When the admin clicks on the "header" "Albums" "Button"
        Then the admin clicks on the "albums" page "New Album" "Button"
        And the admin is on the "new_album" page
        And the "header" "Current" "Title" is: "New Album"
        And the admin "Input" "Album Title" in the "new_album" page as: "Music Box"
        And the admin clicks on the "new_album" page "Create Album" "Button"
        And the admin is on the "albums" "current_album" page
        And the "header" "Current" "Title" is: "Music Box"
        And the "header" "Successfully" "Message" is: "Album was successfully created."

    @Smoke
    Scenario: Verify that the admin can view Album
        Given the admin is on the "albums" "current_album" page
        Then the "header" "Current" "Title" is: "Music Box"
        Then the "current_album" page "Album" "Name" is: "Music Box"
        Then the "current_album" is "Created At" "Date"
        Then the "current_album" is "Updated At" "Date"
    
    @Smoke
    Scenario: Verify that the admin can update Album
        Given the admin is on the "albums" "current_album" page
        When the admin clicks on the "current_album" page "Edit Album" "Button"
        Then the admin is on the "album_edit" page
        Then the "header" "Current" "Title" is: "Edit Album"
        Then the admin "Input" "Edited Title" in the "album_edit" page as: "Updated Music Box"
        When the admin clicks on the "album_edit" page "Update Album" "Button"
        Then the "header" "Successfully" "Message" is: "Album was successfully updated."
        Then the "current_album" is "Updated At" "Date"
        Then the "header" "Current" "Title" is: "Updated Music Box"
    
    @Smoke
    Scenario: Verify that the admin can delete Album
        Given the admin is on the "albums" "current_album" page
        When the admin clicks on the "current_album" page "Delete Album" "Button"
        And the admin "accepts" alert
        Then the admin is on the "albums" page
        Then the "header" "Current" "Title" is: "Albums"
        Then the "header" "Successfully" "Message" is: "Album was successfully destroyed."

        