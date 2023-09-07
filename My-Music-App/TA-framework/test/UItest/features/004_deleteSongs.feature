@004 @deleteSongs

Feature: EPMRDPEMAP-640 - The delete songs from playlists feature
  Background: Opening "signIn" page
    Given the user is open "signIn" page

  Scenario: Verify that the authenticated user is able to delete an individual song in a playlist
    When the user sing-ins with "test.user@example.com" and "secreT!123"
    Then the user is on the "home" page
    Then the user clicks on the "home" page "My Playlists" "Button"
    Then the user is on the "playlists" page
    Then the user clicks on the "playlists" page 1 "Playlists" "Item"
    Then the user is on the 1 "playlist" page
    Then the user clicks on the "playlist" page 1 "Song" "Menu"
    Then the user clicks on the "playlist" page 1 "Remove Song From Playlist" "Button"
    Then "playlist" page "Dialog Window" "Title" text is: "Are you sure you want to remove this song from playlist? You will not be able to restore it."
    Then the user clicks on the "playlist" page "Cancel Delete Song" "Button"
    Then the "playlist" song is not deleted from "Songs List"
    Then the user clicks on the "playlist" page 1 "Remove Song From Playlist" "Button"
    Then the user clicks on the "playlist" page  "Remove Song" "Button"
    Then the "playlist" song is deleted from "Songs List"