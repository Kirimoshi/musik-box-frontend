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
    Then "playlist" page "Playlist" "Title" is displayed
    Then "playlist" page "Playlist" "Item" is displayed
    Then "playlist" page "Playlist" "Likes" is displayed
    Then "playlist" page "Playlist" "Dislikes" is displayed
    Then "playlist" page "Created" "Date" is displayed
    Then "playlist" page "Updated" "Date" is displayed
    Then "playlist" page "Profile" "Email" is displayed
    Then "playlist" page "Registration" "Date" is displayed
    Then "playlist" page "Amount" "Number" is displayed
    Then "playlist" page "Availability" "Name" is displayed
    Then "playlist" "Song" has "song cover" "Image"
    # Then "playlist"  has "Artist"    Not implement
    # Then "playlist" "song" has "sorting"  Not implement
    Then "playlist" page "Commentor" "Name" is: "bhaskara"
    Then "playlist" page "Commentor" "Comment" is: "song is awesomen bla bla bla"
    # Then "playlist" "comment" has "sorting"  Not implement