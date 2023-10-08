@001 @adminPlaylistCommentsModeration

Feature: Admin playlist comments moderation
  Scenario: Verify that the admin user log in with valid data
    Given the admin "login" to the system as the admin user
    Then the admin is on the "admin" page

  Scenario: Verifying details about comment in the Comments page
    Given the admin is on the "admin" page
    When the admin clicks on the "header" "Playlist Comments" "Button"
    Then the admin is on the "playlist_comments" page
    Then the "playlist_comments" page 1 "Comment" has "Id"
    Then the "playlist_comments" page 1 "Comment" has "User Email"
    Then the "playlist_comments" page 1 "Comment" has "Content"
    Then the "playlist_comments" page 1 "Comment" has "Playlist Name"
    Then the "playlist_comments" page 1 "Comment" has "Created Date"
    Then the "playlist_comments" page 1 "Comment" has "View Button"
    Then the "playlist_comments" page 1 "Comment" has "Delete Button"

  Scenario: Verify that the admin user is able to delete comments from playlist
    Given the admin is on the "playlist_comments" page
    Then the "playlist_comments" page 1 "Playlist Comment" has the initial value
    When the admin clicks on the "playlist_comments" page 1 "Comment Delete" "Button"
    Then the 1 "Playlist Comment" is deleted from "playlist_comments" page
    And the "header" "Successfully" "Message" is: "Comment was successfully destroyed."
