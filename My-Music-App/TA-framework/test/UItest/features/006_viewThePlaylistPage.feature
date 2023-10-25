@006 @viewThePlaylistPage

Feature: EPMRDPEMAP-223 - View the Playlist page
  Scenario: Verify that the authenticated user sing in with valid data
    Given the user is open "signIn" page
    When the user sing-ins with "test.user@example.com" and "secreT!123"
    Then the user is on the "home" page

  Scenario: Verify that the user is able to redirect to the "playlist" page
    Given the user is on the "home" page
    When the user clicks on the "sidebar" "My Playlists" "Button" element
    Then the user is on the "playlists" page
    When the user clicks on the "playlists" page "Playlists" "Item" 1 element
    Then the user is on the "current" "playlist" page

  Scenario: Verifying playlist elements
    Given the user is on the "current" "playlist" page
    Then "Playlist Title" element is displayed on "playlist" page
    Then "Playlist Item" element is displayed on "playlist" page
    Then "Playlist Likes" element is displayed on "playlist" page
    Then "Playlist Dislikes" element is displayed on "playlist" page
    Then "Created Date" element is displayed on "playlist" page
    Then "Updated Date" element is displayed on "playlist" page
    Then "Profile Email" element is displayed on "playlist" page
    Then "Created Date" element is displayed on "playlist" page
    Then "Updated Date" element is displayed on "playlist" page
    Then "Profile Email" element is displayed on "playlist" page
    Then "Registration Date" element is displayed on "playlist" page
    Then "Playlists Counter" element is displayed on "playlist" page
    Then "Song Name" element is displayed on "playlist" page
    Then "Song Image" element is displayed on "playlist" page
    When the user fills in the "playlist" page "Comment" "Input" with "My new Comment"
    And the user clicks on the "playlist" page "Leave Comment" "Button" element
    Then "Commentor Name" element is displayed on "playlist" page
    Then "Comment Content" element is displayed on "playlist" page
    # Then "playlist"  has "Artist"    Not implement
    # Then "playlist" "song" has "sorting"  Not implement
    # Then "playlist" "comment" has "sorting"  Not implement