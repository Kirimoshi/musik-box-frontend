@007 @createGenre
Feature: Admin create new Genre

    @Regression
    Scenario: Verifying details about genres in the "Genres" page
        Given the admin "login" to the system as the admin user
        When the admin is on the "admin" page
        Then the admin clicks on the "header" "Genres" "Button"
        And the admin is on the "genres" page
        And the "header" "Current" "Title" is: "Genres"
        And the "genres" page 1 "Genre" has "Id"
        And the "genres" page 1 "Genre" has "Title"
        And the "genres" page 1 "Genre" has "Created Date"
        And the "genres" page 1 "Genre" has "Updated Date"
        And the admin user log-out

    @Smoke
    Scenario: Verifying that admin has ability to create new Genre
        Given the admin "login" to the system as the admin user
        When the admin clicks on the "header" "Genres" "Button"
        Then the admin is on the "genres" page
        And the admin clicks on the "genres" page "New Genre" "Button"
        And the admin is on the "new_genre" page
        And the "header" "Current" "Title" is: "New Genre"
        And the admin "Input" "Genre Title" in the "new_genre" page as: "Created Genre"
        And the admin clicks on the "new_genre" page "Create Genre" "Button"
        And the "header" "Successfully" "Message" is: "Genre was successfully created."