@006 @viewThePlaylistPage @Smoke
Feature: EPMRDPEMAP-223 - View the Playlist page

  Background: Verify that the authenticated user is able to redirect to the my playlist page
    Given the user "signIn" to the application
    When the user is on the "home" page
    Then the user clicks on the "sidebar" "My Playlists" "Button" element
    And the user clicks on the "myPlaylists" page "Playlists" "Item" 1 element
    And the user is on the "current" "myPlaylist" page

  Scenario: Verify my playlist elements
    Given "Playlist Title" is displayed on "myPlaylist" page
    When "Playlist Item" is displayed on "myPlaylist" page
    Then "Playlist Likes" is displayed on "myPlaylist" page
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