@001_admin @adminLogin

Feature: Admin comments moderation
  Scenario: Verify that the admin user log in with valid data
    Given the user "login" to the system as the admin user
    Then the user is on the "admin" page

  Scenario: Verify that the admin user redirects to the playlist comments page
    Given the user is on the "admin" page
    When the user clicks on the "header" "Playlist Comments" "Button"
    Then the user is on the "playlist_comments" page

  Scenario: Verifying details about comments
    Given the user is on the "playlist_comments" page
    Then the "playlist_comments" page has "Comment Id"
    Then the "playlist_comments" page has "User Email"
    Then the "playlist_comments" page has "Comments Content"
    Then the "playlist_comments" page has "Playlist Name"
    Then the "playlist_comments" page has "Created Comment Date"

  Scenario: Verify that the admin user is able to delete comments from playlist
    Given the user is on the "playlist_comments" page
    Then the "playlist_comments" page 1 "Playlist Comment" has the initial value
    When the user clicks on the "playlist_comments" page 1 "Delete" "Button"
    Then the 1 "Playlist Comment" is deleted from "playlist_comments" page
    And "playlist_comments" page "Success Delete" "Message" text is: "Comment was successfully destroyed."