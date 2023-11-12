@006 @viewThePlaylistPage

Feature: EPMRDPEMAP-223 - View the Playlist page
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

  Scenario: Verifying my playlist elements
    Given the user is on the "current" "myPlaylist" page
    Then "Playlist Title" is displayed on "myPlaylist" page
    And "Playlist Item" is displayed on "myPlaylist" page
    And "Playlist Likes" is displayed on "myPlaylist" page
    And "Playlist Dislikes" is displayed on "myPlaylist" page
    And "Created Date" is displayed on "myPlaylist" page
    And "Updated Date" is displayed on "myPlaylist" page
    And "Profile Email" is displayed on "myPlaylist" page
    And "Created Date" is displayed on "myPlaylist" page
    And "Updated Date" is displayed on "myPlaylist" page
    And "Profile Email" is displayed on "myPlaylist" page
    And "Registration Date" is displayed on "myPlaylist" page
    And "Playlists Counter" is displayed on "myPlaylist" page
    And "Leave Comment Button" is displayed on "myPlaylist" page
    And "Comment Input" is displayed on "myPlaylist" page
    And "Songs List" is displayed on "myPlaylist" page
    And "Song Name" elements of "Songs List" are displayed on "myPlaylist" page
    And "Song Image" elements of "Songs List" are displayed on "myPlaylist" page
    And "Commentor Name" elements of "Comment List" are displayed on "myPlaylist" page
    And "Comment Content" elements of "Comment List" are displayed on "myPlaylist" page
    And "Comment Date" elements of "Comment List" are displayed on "myPlaylist" page
    # Then "playlist"  has "Artist"    Not implement
    # Then "playlist" "song" has "sorting"  Not implement
    # Then "playlist" "comment" has "sorting"  Not implement