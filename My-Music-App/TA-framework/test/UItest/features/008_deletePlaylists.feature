@008 @deletePlaylists
Feature: EPMRDPEMAP-642 - The delete playlist from playlists feature

  Background: Verify that the authenticated user is able to open the My Playlists page
    Given the user "signIn" to the application
    When the user is on the "home" page
    Then the user clicks on the "sidebar" "My Playlists" "Button"
    And the user is on the "myPlaylists" page

  @Regression
  Scenario: Verify that the authenticated user has access to the "playlist" page by clicking an individual playlist from the "playlists" page.
    Given the user clicks on the "myPlaylists" page "Playlists" "Item" 1 element
    When the user is on the "current" "myPlaylist" page
    Then the user logging out

  @Smoke
  Scenario: Verify that the authenticated user is able to delete playlist
    Given the user clicks on the "myPlaylists" page "Playlist" "Menu" 1 element
    When the user clicks on the "myPlaylists" page "Delete Playlist" "Button" 1 element
    Then "myPlaylists" page "Dialog Delete" "Message" is: "Are you sure you want to delete this playlist? You will not be able to restore it."
    And the "myPlaylists" page "Playlists Item" elements have the initial length
    And the user clicks on the "myPlaylists" page "Dialog Delete Playlist" "Button" element
    And the "myPlaylists" page "Playlists Item" elements length are less than the initial length by one item

  
  @Regression
  Scenario: Verify that only authorized users can delete their personal playlists.
    Given the user logging out
    When "toastify" "Logout Success" "Message" is: "You have been successfully logged out."
    Then the user is on the "signIn" page
    And the user is open "myPlaylists" page
    And "toastify" "Information" "Message" is: "It looks like you don't have permission to view this page. Please sign in to continue."