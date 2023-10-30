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
    Then the user is on the "current" "playlist" page

  Scenario: Verifying playlist elements
    Given the user is on the "current" "playlist" page
    Then "Playlist Title" element is displayed on "playlist" page
    And "Playlist Item" element is displayed on "playlist" page
    And "Playlist Likes" element is displayed on "playlist" page
    And "Playlist Dislikes" element is displayed on "playlist" page
    And "Created Date" element is displayed on "playlist" page
    And "Updated Date" element is displayed on "playlist" page
    And "Profile Email" element is displayed on "playlist" page
    And "Created Date" element is displayed on "playlist" page
    And "Updated Date" element is displayed on "playlist" page
    And "Profile Email" element is displayed on "playlist" page
    And "Registration Date" element is displayed on "playlist" page
    And "Playlists Counter" element is displayed on "playlist" page
    And "Leave Comment Button" element is displayed on "playlist" page
    And "Comment Input" element is displayed on "playlist" page
    And "Songs List" element is displayed on "playlist" page
    And "Song Name" elements of "Songs List" are displayed on "playlist" page
    And "Song Image" elements of "Songs List" are displayed on "playlist" page
    And "Commentor Name" elements of "Comment List" are displayed on "playlist" page
    And "Comment Content" elements of "Comment List" are displayed on "playlist" page
    And "Comment Age" elements of "Comment List" are displayed on "playlist" page
    # Then "playlist"  has "Artist"    Not implement
    # Then "playlist" "song" has "sorting"  Not implement
    # Then "playlist" "comment" has "sorting"  Not implement