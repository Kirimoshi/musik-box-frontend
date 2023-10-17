@007 @publicPlaylistsPage

Feature: View the Public Playlists page

    Scenario: 1.1 The Public Playlists page should be accessible to guest
        Given the user is open "signIn" page
        Then the user is on the "signIn" page
        When the user clicks on the "sidebar" page "Public Playlists" "Button"
        Then the user is on the "publicPlaylists" page
        And "publicPlaylistsList" element is displayed on "publicPlaylists" page

    Scenario: 1.2 The Public Playlists page should be accessible to authenticated users
        Given the user is open "signIn" page
        Then the user is on the "signIn" page
        When the user sing-ins without remembering with "test.user@example.com" and "secreT!123"
        Then the user is on the "home" page
        When the user clicks on the "sidebar" page "Public Playlists" "Button"
        Then the user is on the "publicPlaylists" page
        And "publicPlaylistsList" element is displayed on "publicPlaylists" page
        Then The user logging out

    Scenario: 2. The Public Playlists page should display Public playlists created by other app users
        Given the user is open "publicPlaylists" page
        Then the user is on the "publicPlaylists" page
        And "publicPlaylistsList" element is displayed on "publicPlaylists" page
        Then "publicPlaylistCreatedByLabels" elements of "publicPlaylistsList" are displayed on "publicPlaylists" page

    Scenario Outline: 3.1 Unauthorized users must be able to navigate to the Public Playlists page by clicking the Public Playlists button on the following pages: '<page>'
        When the user is open "<page>" page
        Then the user is on the "<page>" page
        When the user clicks on the "sidebar" page "Public Playlists" "Button"
        Then the user is on the "publicPlaylists" page
        And "publicPlaylistsList" element is displayed on "publicPlaylists" page
        Examples:
            | page   |
            | home   |
            | signIn |
            | signUp |

    Scenario Outline: 3.2 Authorized users must be able to navigate to the Public Playlists page by clicking the Public Playlists button on the following pages: '<page>'
        Given the user is open "signIn" page
        Then the user is on the "signIn" page
        When the user sing-ins without remembering with "test.user@example.com" and "secreT!123"
        Then the user is on the "home" page
        When the user clicks on the "sidebar" page "<button>" "Button"
        Then the user is on the "<page>" page
        When the user clicks on the "sidebar" page "Public Playlists" "Button"
        Then the user is on the "publicPlaylists" page
        And "publicPlaylistsList" element is displayed on "publicPlaylists" page
        Then The user logging out
        Examples:
            | button           | page            |
            | Shared Playlists | sharedPlaylists |
            | My Playlists     | playlists       |
            | Friends          | friends         |
    # ## This page is not implemented yet
    # ## | My Account page |

    Scenario: 4.1 The playlists should be ordered by the number of likes in descending order for authorized users
        # and then by the date they were created in descending order - the date is currently mocked and the same for all playlists
        Given the user is open "signIn" page
        Then the user is on the "signIn" page
        When the user sing-ins without remembering with "test.user@example.com" and "secreT!123"
        Then the user is on the "home" page
        When the user clicks on the "sidebar" page "Public Playlists" "Button"
        Then the user is on the "publicPlaylists" page
        And "publicPlaylistsList" element is displayed on "publicPlaylists" page
        Then playlists in "publicPlaylistsList" on the "publicPlaylists" page are ordered by the number of likes in descending order
        Then The user logging out

    Scenario: 4.2 The playlists should be ordered by the number of likes in descending order for unauthorized users
        # and then by the date they were created in descending order - the date is currently mocked and the same for all playlists
        Given the user is open "signIn" page
        Then the user is on the "signIn" page
        When the user clicks on the "sidebar" page "Public Playlists" "Button"
        Then the user is on the "publicPlaylists" page
        And "publicPlaylistsList" element is displayed on "publicPlaylists" page
        Then playlists in "publicPlaylistsList" on the "publicPlaylists" page are ordered by the number of likes in descending order

    Scenario: 5.1 Authorized users must see the number of likes and dislikes the playlist has
        Given the user is open "signIn" page
        Then the user is on the "signIn" page
        When the user sing-ins without remembering with "test.user@example.com" and "secreT!123"
        Then the user is on the "home" page
        When the user clicks on the "sidebar" page "Public Playlists" "Button"
        Then the user is on the "publicPlaylists" page
        And "publicPlaylistsList" element is displayed on "publicPlaylists" page
        And "publicPlaylistLikeBtn" elements of "publicPlaylistsList" are displayed on "publicPlaylists" page
        And "publicPlaylistLikeCounter" elements of "publicPlaylistsList" are displayed on "publicPlaylists" page
        And "publicPlaylistDislikeBtn" elements of "publicPlaylistsList" are displayed on "publicPlaylists" page
        And "publicPlaylistDislikeCounter" elements of "publicPlaylistsList" are displayed on "publicPlaylists" page
        Then The user logging out

    Scenario: 5.2 Unauthorized users must see the number of likes and dislikes the playlist has
        Given the user is open "signIn" page
        Then the user is on the "signIn" page
        When the user clicks on the "sidebar" page "Public Playlists" "Button"
        Then the user is on the "publicPlaylists" page
        And "publicPlaylistsList" element is displayed on "publicPlaylists" page
        And "publicPlaylistLikeBtn" elements of "publicPlaylistsList" are displayed on "publicPlaylists" page
        And "publicPlaylistLikeCounter" elements of "publicPlaylistsList" are displayed on "publicPlaylists" page
        And "publicPlaylistDislikeBtn" elements of "publicPlaylistsList" are displayed on "publicPlaylists" page
        And "publicPlaylistDislikeCounter" elements of "publicPlaylistsList" are displayed on "publicPlaylists" page

    Scenario: 6. Each playlist should display 10 songs
        Given the user is open "publicPlaylists" page
        Then the user is on the "publicPlaylists" page
        And "publicPlaylistsList" element is displayed on "publicPlaylists" page
        And every playlist in "publicPlaylistsList" on the "publicPlaylists" page has 10 songs

    # # no possibility to divide song name and an author name
    Scenario: 7. Playlists songs card items include a song name and an author
        Given the user is open "publicPlaylists" page
        Then the user is on the "publicPlaylists" page
        And "publicPlaylistsList" element is displayed on "publicPlaylists" page
        Then "publicPlaylistSongList" elements of "publicPlaylistsList" are displayed on "publicPlaylists" page

    Scenario: 8.1 No more than 10 playlists should be displayed per page
        Given the user is open "publicPlaylists" page
        Then the user is on the "publicPlaylists" page
        And "publicPlaylistsList" element is displayed on "publicPlaylists" page
        Then "publicPlaylists" page has no more than 10 playlists in "publicPlaylistsList"

    Scenario: 8.2 Pagination is working and open next 10 playlists
        Given the user is open "publicPlaylists" page
        Then the user is on the "publicPlaylists" page
        And "publicPlaylistsList" element is displayed on "publicPlaylists" page
        Then "publicPlaylists" page has no more than 10 playlists in "publicPlaylistsList"
        When the user clicks on the "publicPlaylists" page "Public Playlist Right Arrow" "Pagination"
        And "publicPlaylistsList" element is displayed on "publicPlaylists" page
        Then "publicPlaylists" page has no more than 10 playlists in "publicPlaylistsList"

    Scenario Outline: 7.1 The Public Playlists page should have a filter feature that allows Guest to search for playlists by the following: <propertyName>
        Given the user is open "publicPlaylists" page
        Then the user is on the "publicPlaylists" page
        And "publicPlaylistsList" element is displayed on "publicPlaylists" page
        And "searchBoxInput" element is displayed on "publicPlaylists" page
        When the user fills in the "publicPlaylists" page "Search Box" "Input" with "<property>"
        When the user clicks on the "publicPlaylists" page "Search" "Icon"
        Then "publicPlaylists" page "<elementName>" "<elementType>" contains next text: "<property>"
        Examples:
            | propertyName              | property       | elementName             | elementType |
            | Playlist name             | blow           | publicPlaylistName      | List        |
            | Playlist owner's nickname | Alyssa         | publicPlaylistCreatedBy | Labels      |
            # # |Playlist description| alias     ||| - need to open each playlist to check description
            | Song name                 | Ой у лузі      | publicPlaylistSong      | List        |
            | Author name               | Carla Morrison | publicPlaylistSong      | List        |

    Scenario Outline: 7.2 The Public Playlists page should have a filter feature that allows Users to search for playlists by the following: <propertyName>
        Given the user is open "signIn" page
        Then the user is on the "signIn" page
        When the user sing-ins without remembering with "test.user@example.com" and "secreT!123"
        Then the user is on the "home" page
        When the user clicks on the "sidebar" page "Public Playlists" "Button"
        Then the user is on the "publicPlaylists" page
        And "publicPlaylistsList" element is displayed on "publicPlaylists" page
        And "searchBoxInput" element is displayed on "publicPlaylists" page
        When the user fills in the "publicPlaylists" page "Search Box" "Input" with "<property>"
        When the user clicks on the "publicPlaylists" page "Search" "Icon"
        Then "publicPlaylists" page "<elementName>" "<elementType>" contains next text: "<property>"
        Then The user logging out
        Examples:
            | propertyName              | property       | elementName             | elementType |
            | Playlist name             | blow           | publicPlaylistName      | List        |
            | Playlist owner's nickname | Alyssa         | publicPlaylistCreatedBy | Labels      |
            # # |Playlist description| alias     ||| - need to open each playlist to check description
            | Song name                 | Ой у лузі      | publicPlaylistSong      | List        |
            | Author name               | Carla Morrison | publicPlaylistSong      | List        |

    Scenario Outline: 8.1.1 The Public Playlists page should have a sorting feature that allows Guests to sort playlists by playlist name in <Order>
        Given the user is open "signIn" page
        Then the user is on the "signIn" page
        When the user clicks on the "sidebar" page "Public Playlists" "Button"
        Then the user is on the "publicPlaylists" page
        And "publicPlaylistsList" element is displayed on "publicPlaylists" page
        When the user clicks on the "publicPlaylists" page "Sort" "Icon"
        Then "sortMenu" element is displayed on "publicPlaylists" page
        And "sortGroupNameByNameOfPlaylist" element is displayed on "publicPlaylists" page
        And "sortByNameOfPlaylistAscendingOrderButton" element is displayed on "publicPlaylists" page
        And "sortByNameOfPlaylistDescendingOrderButton" element is displayed on "publicPlaylists" page
        When the user clicks on the "publicPlaylists" page "Sort By Name Of Playlist <Order>" "Button"
        Then playlists in "publicPlaylistsList" on the "publicPlaylists" page are ordered by playlist name in <order> order
        Examples:
            | Order            | order      |
            | Ascending Order  | ascending  |
            | Descending Order | descending |

    Scenario Outline: 8.1.2 The Public Playlists page should have a sorting feature that allows Users to sort playlists by playlist name in <Order>
        Given the user is open "signIn" page
        Then the user is on the "signIn" page
        When the user sing-ins without remembering with "test.user@example.com" and "secreT!123"
        Then the user is on the "home" page
        When the user clicks on the "sidebar" page "Public Playlists" "Button"
        Then the user is on the "publicPlaylists" page
        And "publicPlaylistsList" element is displayed on "publicPlaylists" page
        When the user clicks on the "publicPlaylists" page "Sort" "Icon"
        Then "sortMenu" element is displayed on "publicPlaylists" page
        And "sortGroupNameByNameOfPlaylist" element is displayed on "publicPlaylists" page
        And "sortByNameOfPlaylistAscendingOrderButton" element is displayed on "publicPlaylists" page
        And "sortByNameOfPlaylistDescendingOrderButton" element is displayed on "publicPlaylists" page
        When the user clicks on the "publicPlaylists" page "Sort By Name Of Playlist <Order>" "Button"
        Then playlists in "publicPlaylistsList" on the "publicPlaylists" page are ordered by playlist name in <order> order
        Then The user logging out
        Examples:
            | Order            | order      |
            | Ascending Order  | ascending  |
            | Descending Order | descending |

    # # this feature should be refactored by FE team
    Scenario: 8.2.1 The Public Playlists page should have a sorting feature that allows Guests to sort playlists by the number of comments in ascending or descending order.
        Given the user is open "publicPlaylists" page
        Then the user is on the "publicPlaylists" page
        And "publicPlaylistsList" element is displayed on "publicPlaylists" page
        When the user clicks on the "publicPlaylists" page "Sort" "Icon"
        Then "sortMenu" element is displayed on "publicPlaylists" page
        And "sortGroupNameByComments" element is displayed on "publicPlaylists" page
        And "sortByCommentsAscendingOrderButton" element is displayed on "publicPlaylists" page
        And "sortByCommentsDescendingOrderButton" element is displayed on "publicPlaylists" page
    # When the user clicks on the "publicPlaylists" page "Sort By Comments Ascending Order" "Button"
    # Then playlists in "publicPlaylistsList" on the "publicPlaylists" page are ordered by number of comments in ascending order - this validation step doesn't exist yet
    # When the user clicks on the "publicPlaylists" page "Sort" "Icon"
    # Then "sortMenu" element is displayed on "publicPlaylists" page
    # When the user clicks on the "publicPlaylists" page "Sort By Comments Descending Order" "Button"
    # Then playlists in "publicPlaylistsList" on the "publicPlaylists" page are ordered by number of comments in descending order - this validation step doesn't exist yet

    # # this feature should be refactored by FE team
    Scenario: 8.2.2 The Public Playlists page should have a sorting feature that allows Users to sort playlists by the number of comments in ascending or descending order.
        Given the user is open "signIn" page
        When the user sing-ins without remembering with "test.user@example.com" and "secreT!123"
        Then the user is on the "home" page
        When the user clicks on the "sidebar" page "Public Playlists" "Button"
        Then the user is on the "publicPlaylists" page
        And "publicPlaylistsList" element is displayed on "publicPlaylists" page
        When the user clicks on the "publicPlaylists" page "Sort" "Icon"
        Then "sortMenu" element is displayed on "publicPlaylists" page
        And "sortGroupNameByComments" element is displayed on "publicPlaylists" page
        And "sortByCommentsAscendingOrderButton" element is displayed on "publicPlaylists" page
        And "sortByCommentsDescendingOrderButton" element is displayed on "publicPlaylists" page
        # When the user clicks on the "publicPlaylists" page "Sort By Comments Ascending Order" "Button"
        # Then playlists in "publicPlaylistsList" on the "publicPlaylists" page are ordered by number of comments in ascending order - this validation step doesn't exist yet
        # When the user clicks on the "publicPlaylists" page "Sort" "Icon"
        # Then "sortMenu" element is displayed on "publicPlaylists" page
        # When the user clicks on the "publicPlaylists" page "Sort By Comments Descending Order" "Button"
        # Then playlists in "publicPlaylistsList" on the "publicPlaylists" page are ordered by number of comments in descending order - this validation step doesn't exist yet
        Then The user logging out

    Scenario: 9. Each playlist on the Public Playlists page should be clickable
        Given the user is open "publicPlaylists" page
        Then the user is on the "publicPlaylists" page
        And "publicPlaylistsList" element is displayed on "publicPlaylists" page
        Then every element of "publicPlaylistsList" on the "publicPlaylists" page is clickable