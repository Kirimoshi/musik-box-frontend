@007 @createGenre @Regression
Feature: Admin create new Genre

    Scenario: Verify that the admin user log in with valid data
        Given the admin "login" to the system as the admin user
        Then the admin is on the "admin" page

    Scenario: Verifying details about genres in the "Genres" page
        Given the admin is on the "admin" page
        When the admin clicks on the "header" "Genres" "Button"
        Then the admin is on the "genres" page
        Then the "header" "Current" "Title" is: "Genres"
        Then the "genres" page 1 "Genre" has "Id"
        Then the "genres" page 1 "Genre" has "Title"
        Then the "genres" page 1 "Genre" has "Created Date"
        Then the "genres" page 1 "Genre" has "Updated Date"

    @createGenreFeature @Smoke
    Scenario: Verifying that admin has ability to create new Genre
        Given the admin is on the "genres" page
        When the admin clicks on the "genres" page "New Genre" "Button"
        Then the admin is on the "new_genre" page
        Then the "header" "Current" "Title" is: "New Genre"
        Then the admin "Input" "Genre Title" in the "new_genre" page as: "Created Genre"
        When the admin clicks on the "new_genre" page "Create Genre" "Button"
        Then the "header" "Successfully" "Message" is: "Genre was successfully created."