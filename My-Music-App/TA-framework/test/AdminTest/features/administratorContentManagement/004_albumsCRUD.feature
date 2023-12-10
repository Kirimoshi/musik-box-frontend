@004 @albumsCRUD @Smoke
Feature: Admin "CRUD" Albums

    @AdminLogin @Regression
    Scenario: Verify that the admin user log in with valid data
        Given the admin "login" to the system as the admin user
        Then the admin is on the "admin" page

    @VerifyingAlbumsDetails @Regression
    Scenario: Verifying details about album in the "Albums" page
        Given the admin is on the "admin" page
        When the admin clicks on the "header" "Albums" "Button"
        Then the admin is on the "albums" page
        Then the "header" "Current" "Title" is: "Albums"
        Then the "albums" page 1 "Album" has "Id"
        Then the "albums" page 1 "Album" has "Title"
        Then the "albums" page 1 "Album" has "Cover"
        Then the "albums" page 1 "Album" has "Songs"
        Then the "albums" page 1 "Album" has "Artist"
        Then the "albums" page 1 "Album" has "View Button"
        Then the "albums" page 1 "Album" has "Edit Button"
        Then the "albums" page 1 "Album" has "Delete Button"

    Scenario: Verify that the admin can create new Album
        Then the admin is on the "albums" page
        When the admin clicks on the "albums" page "New Album" "Button"
        Then the admin is on the "new_album" page
        Then the "header" "Current" "Title" is: "New Album"
        Then the admin "Input" "Album Title" in the "new_album" page as: "Music Box"
        When the admin clicks on the "new_album" page "Create Album" "Button"
        Then the admin is on the "albums" "current_album" page
        Then the "header" "Current" "Title" is: "Music Box"
        Then the "header" "Successfully" "Message" is: "Album was successfully created."

    Scenario: Verify that the admin can view Album
        Given the admin is on the "albums" "current_album" page
        Then the "header" "Current" "Title" is: "Music Box"
        Then the "current_album" page "Album" "Name" is: "Music Box"
        Then the "current_album" is "Created At" "Date"
        Then the "current_album" is "Updated At" "Date"

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

    Scenario: Verify that the admin can delete Album
        Given the admin is on the "albums" "current_album" page
        When the admin clicks on the "current_album" page "Delete Album" "Button"
        And the admin "accepts" alert
        Then the admin is on the "albums" page
        Then the "header" "Current" "Title" is: "Albums"
        Then the "header" "Successfully" "Message" is: "Album was successfully destroyed."

        