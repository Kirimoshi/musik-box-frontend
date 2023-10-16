@008 @deletePlaylists

Feature: EPMRDPEMAP-642 - The delete playlist from playlists feature
  Scenario: Verify that the authenticated user has access to the "playlist" page by clicking an individual playlist from the "playlists" page.
    Given the user "signIn" to the application
    Then the user is on the "home" page
    When the user clicks on the "sidebar" "My Playlists" "Button"
    Then the user is on the "playlists" page
    When the user clicks on the "playlists" page 1 "Playlists" "Item"
    Then the user is on the "current" "playlist" page

  Scenario: Verify that the authenticated user is able to cancel deletion playlist from playlists list
    Given the user clicks on the "sidebar" "My Playlists" "Button"
    Then the user is on the "playlists" page
    When the user clicks on the "playlists" page 1 "Playlist" "Menu"
    And the user clicks on the "playlists" page 1 "Delete Playlist" "Button"
    Then "playlists" page "Dialog Window" "Playlist Title" is: "Are you sure you want to delete this playlist? You will not be able to restore it."
    And the "playlists" page "Playlists Item" elements have the initial length
    When the user clicks on the "playlists" page "Cancel Deletion Playlist" "Button"
    Then the "playlists" page "Playlists Item" elements length are not less than the initial length for one item

  Scenario: Verify that the authenticated user is able to delete playlist from playlists list
    Given the user is on the "playlists" page
    When the user clicks on the "playlists" page 1 "Playlist" "Menu"
    And the user clicks on the "playlists" page 1 "Delete Playlist" "Button"
    Then "playlists" page "Dialog Window" "Playlist Title" is: "Are you sure you want to delete this playlist? You will not be able to restore it."
    And the "playlists" page "Playlists Item" elements have the initial length
    When the user clicks on the "playlists" page "Dialog Delete Playlist" "Button"
    Then the "playlists" page "Playlists Item" elements length are less than the initial length for one item

  Scenario: Verify that the authenticated user can delete the playlist from the specific "playlist" page.
    Given the user clicks on the "sidebar" "My Playlists" "Button"
    Then the user is on the "playlists" page
    And the "playlists" page "Playlists Item" elements have the initial length
    When the user clicks on the "playlists" page 1 "Playlists" "Item"
    Then the user is on the "current" "playlist" page
    When the user clicks on the "playlist" page "Playlist" "Menu"
    And the user clicks on the "playlist" page "Delete Playlist" "Button"
    Then "playlist" page "Dialog Window" "Playlist Title" is: "Are you sure you want to delete this playlist? You will not be able to restore it."
    When the user clicks on the "playlist" page "Dialog Delete Playlist" "Button"
    And the user clicks on the "sidebar" "My Playlists" "Button"
    Then the user is on the "playlists" page
    Then the "playlists" page "Playlists Item" elements length are less than the initial length for one item

  Scenario: Verify that only authorized users can delete their personal playlists.
    Given the user is on the "playlists" page
    When The user logging out
    Then "alert" "Logout Success" "Message" is: "You have been successfully logged out."
    Then the user is on the "signIn" page
    When the user is open "playlists" page
    Then "alert" "Permission" "Message" is: "It looks like you don't have permission to view this page. Please sign in to continue."