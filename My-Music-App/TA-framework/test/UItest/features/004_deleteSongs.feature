@004 @deleteSongs

Feature: EPMRDPEMAP-640 - The delete songs from playlists feature
  Scenario: Verify that the authenticated user sing in with valid data
    Given the user is open "signIn" page
    When the user sing-ins with "test.user@example.com" and "secreT!123"
    Then the user is on the "home" page

  Scenario: Verify that the user is able to redirect to the "playlist" page
    Given the user is on the "home" page
    When the user clicks on the "sidebar" "My Playlists" "Button"
    Then the user is on the "playlists" page
    When the user clicks on the "playlists" page 1 "Playlists" "Item"
    Then the user is on the "current" "playlist" page

  Scenario: Verify that the user is able to cancel deletion song from playlist
    Given the user is on the "current" "playlist" page
    When the user clicks on the "playlist" page 1 "Song" "Menu"
    And the user clicks on the "playlist" page 1 "Remove Song From Playlist" "Button"
    Then "playlist" page "Dialog Window" "Song Title" is: "Are you sure you want to remove this song from playlist? You will not be able to restore it."
    And the "playlist" page "Songs List" elements have the initial length
    When the user clicks on the "playlist" page "Cancel Deletion Song" "Button"
    Then the "playlist" page "Songs List" elements length are not less than the initial length for one item

  Scenario: Verify that the user is able to delete song from playlist
    Given the user is on the "current" "playlist" page
    When the user clicks on the "playlist" page 1 "Remove Song From Playlist" "Button"
    Then "playlist" page "Dialog Window" "Song Title" is: "Are you sure you want to remove this song from playlist? You will not be able to restore it."
    And the "playlist" page "Songs List" elements have the initial length
    When the user clicks on the "playlist" page "Remove Song" "Button"
    Then the "playlist" page "Songs List" elements length are less than the initial length for one item