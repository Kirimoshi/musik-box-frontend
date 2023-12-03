@004 @deleteSongs

Feature: EPMRDPEMAP-640 - The delete songs from playlists feature
  Scenario: Verify that the authenticated user sing in with valid data
    Given the user is open "signIn" page
    When the user sing-ins with "test.user@example.com" and "secreT!123"
    Then the user is on the "home" page

  Scenario: Verify that the user is able to redirect to the "playlist" page
    Given the user is on the "home" page
    When the user clicks on the "sidebar" "My Playlists" "Button" element
    Then the user is on the "myPlaylists" page
    When the user clicks on the "myPlaylists" page "Playlists" "Item" 1 element
    Then the user is on the "current" "myPlaylist" page

  Scenario: Verify that the user is able to cancel deletion song from playlist
    Given the user is on the "current" "myPlaylist" page
    When the user clicks on the "myPlaylist" page "Song" "Menu" 1 element
    And the user clicks on the "myPlaylist" page "Remove Song" "Button" 1 element
    Then "myPlaylist" page "Dialog Window" "Song Title" is: "Are you sure you want to remove this song from playlist? You will not be able to restore it."
    And the "myPlaylist" page "Songs List" elements have the initial length
    When the user clicks on the "myPlaylist" page "Cancel Deletion Song" "Button" element
    Then the "myPlaylist" page "Songs List" elements length are not less than the initial length by one item

  Scenario: Verify that the user is able to delete song from playlist
    Given the user is on the "current" "myPlaylist" page
    When the user clicks on the "myPlaylist" page "Remove Song" "Button" 1 element
    Then "myPlaylist" page "Dialog Window" "Song Title" is: "Are you sure you want to remove this song from playlist? You will not be able to restore it."
    And the "myPlaylist" page "Songs List" elements have the initial length
    When the user clicks on the "myPlaylist" page "Confirm Deletion" "Button" element
    Then the "myPlaylist" page "Songs List" elements length are less than the initial length by one item