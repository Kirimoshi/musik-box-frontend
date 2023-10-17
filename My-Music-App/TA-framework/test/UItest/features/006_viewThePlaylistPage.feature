@006 @viewThePlaylistPage

Feature: EPMRDPEMAP-223 - View the Playlist page
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

  Scenario: Verifying playlist elements
    Given the user is on the "current" "playlist" page
    Then "playlistTitle" element is displayed on "playlist" page
    Then "playlistItem" element is displayed on "playlist" page
    Then "playlistLikes" element is displayed on "playlist" page
    Then "playlistDislikes" element is displayed on "playlist" page
    Then "createdDate" element is displayed on "playlist" page
    Then "updatedDate" element is displayed on "playlist" page
    Then "profileEmail" element is displayed on "playlist" page
    Then "createdDate" element is displayed on "playlist" page
    Then "updatedDate" element is displayed on "playlist" page
    Then "profileEmail" element is displayed on "playlist" page
    Then "registrationDate" element is displayed on "playlist" page
    Then "amountNumber" element is displayed on "playlist" page
    Then "availabilityName" element is displayed on "playlist" page
    # Then "playlist" "Song" has "song cover" "Image"
    # Then "playlist"  has "Artist"    Not implement
    # Then "playlist" "song" has "sorting"  Not implement
    Then "playlist" page "Commentor" "Name" is: "bhaskara"
    Then "playlist" page "Commentor" "Comment" is: "song is awesomen bla bla bla"
    # Then "playlist" "comment" has "sorting"  Not implement