@004 @deleteSongs
Feature: EPMRDPEMAP-640 - The delete songs from playlists feature

  Background: Authenticated user sing-ins to the application
    Given the user "signIn" to the application
    And the user is on the "home" page

  @Regression
  Scenario: Verify that the user is able to redirect to the "playlist" page
    Given the user clicks on the "sidebar" "My Playlists" "Button" element
    When the user is on the "myPlaylists" page
    Then the user clicks on the "myPlaylists" page "Playlists" "Item" 1 element
    And the user is on the "current" "myPlaylist" page
    And the user logging out

  @Smoke
  Scenario: Verify that the user is able to delete song from playlist
    Given the user clicks on the "sidebar" "My Playlists" "Button"
    When the user clicks on the "myPlaylists" page "Playlists" "Item" 1 element
    Then the user is on the "current" "myPlaylist" page
    And the user clicks on the "myPlaylist" page "Song" "Menu" 1 element
    And the user clicks on the "myPlaylist" page "Remove Song" "Button" 1 element
    And "myPlaylist" page "Dialog Window" "Song Title" is: "Are you sure you want to remove this song from playlist? You will not be able to restore it."
    And the "myPlaylist" page "Songs List" elements have the initial length
    And the user clicks on the "myPlaylist" page "Confirm Deletion" "Button" element
    And the "myPlaylist" page "Songs List" elements length are less than the initial length by one item
