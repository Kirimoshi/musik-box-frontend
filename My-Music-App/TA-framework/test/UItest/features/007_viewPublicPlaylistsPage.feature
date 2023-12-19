@007 @viewPublicPlaylistsPage
Feature: EPMRDPEMAP-647 - View the Public Playlists page

    @Smoke
    Scenario: The Public Playlists page should be accessible to guest
        Given the user is open "signIn" page
        When the user is on the "signIn" page
        Then the user clicks on the "sidebar" "Public Playlists" "Button"
        And the user is on the "publicPlaylists" page
        And "Public Playlists List" is displayed on "publicPlaylists" page

    @Smoke
    Scenario: The Public Playlists page should be accessible to authenticated users
        Given the user is open "signIn" page
        When the user is on the "signIn" page
        Then the user sing-ins without remembering with "test.user@example.com" and "secreT!123"
        And the user is on the "home" page
        And the user clicks on the "sidebar" "Public Playlists" "Button"
        And the user is on the "publicPlaylists" page
        And "Public Playlists List" is displayed on "publicPlaylists" page
        And the user logging out

    @Smoke
    Scenario: The Public Playlists page should display Public playlists created by other app users
        Given the user is open "publicPlaylists" page
        When the user is on the "publicPlaylists" page
        Then "Public Playlists List" is displayed on "publicPlaylists" page
        And "Public Playlist Created By Labels" elements of "Public Playlists List" are displayed on "publicPlaylists" page

    @Smoke
    Scenario Outline: Unauthorized users must be able to navigate to the Public Playlists page by clicking the Public Playlists button on the following pages: '<page>'
        When the user is open "<page>" page
        Then the user is on the "<page>" page
        When the user clicks on the "sidebar" "Public Playlists" "Button"
        Then the user is on the "publicPlaylists" page
        And "Public Playlists List" is displayed on "publicPlaylists" page
        Examples:
            | page   |
            | home   |
            | signIn |
            | signUp |

    @Smoke
    Scenario Outline: Authorized users must be able to navigate to the Public Playlists page by clicking the Public Playlists button on the following pages: '<page>'
        Given the user is open "signIn" page
        When the user is on the "signIn" page
        Then the user sing-ins without remembering with "test.user@example.com" and "secreT!123"
        And the user is on the "home" page
        And the user clicks on the "sidebar" "<button>" "Button"
        And the user is on the "<page>" page
        And the user clicks on the "sidebar" "Public Playlists" "Button"
        And the user is on the "publicPlaylists" page
        And "Public Playlists List" is displayed on "publicPlaylists" page
        And the user logging out
        Examples:
            | button           | page            |
            | Shared Playlists | sharedPlaylists |
            | My Playlists     | myPlaylists     |
            | Friends          | friends         |
    # ## This page is not implemented yet
    # ## | My Account page |

    @Regression
    Scenario: The playlists should be ordered by the number of likes in descending order for authorized users
        # and then by the date they were created in descending order - the date is currently mocked and the same for all playlists
        Given the user is open "signIn" page
        When the user is on the "signIn" page
        And the user sing-ins without remembering with "test.user@example.com" and "secreT!123"
        And the user is on the "home" page
        And the user clicks on the "sidebar" "Public Playlists" "Button"
        And the user is on the "publicPlaylists" page
        And "Public Playlists List" is displayed on "publicPlaylists" page
        And playlists in "publicPlaylistsList" on the "publicPlaylists" page are ordered by the number of likes in descending order

    @Regression
    Scenario: The playlists should be ordered by the number of likes in descending order for unauthorized users
        Given the user logging out
        When the user is open "signIn" page
        Then the user is on the "signIn" page
        And the user clicks on the "sidebar" "Public Playlists" "Button"
        And the user is on the "publicPlaylists" page
        And "Public Playlists List" is displayed on "publicPlaylists" page
        And playlists in "publicPlaylistsList" on the "publicPlaylists" page are ordered by the number of likes in descending order

    @Smoke
    Scenario: Authorized users must see the number of likes and dislikes the playlist has
        Given the user is open "signIn" page
        When the user is on the "signIn" page
        Then the user sing-ins without remembering with "test.user@example.com" and "secreT!123"
        And the user is on the "home" page
        And the user clicks on the "sidebar" "Public Playlists" "Button"
        And the user is on the "publicPlaylists" page
        And "Public Playlists List" is displayed on "publicPlaylists" page
        And "Public Playlist Like Button" elements of "Public Playlists List" are displayed on "publicPlaylists" page
        And "Public Playlist Like Counter" elements of "Public Playlists List" are displayed on "publicPlaylists" page
        And "Public Playlist Dislike Button" elements of "Public Playlists List" are displayed on "publicPlaylists" page
        And "Public Playlist Dislike Counter" elements of "Public Playlists List" are displayed on "publicPlaylists" page

    @Smoke
    Scenario: Unauthorized users must see the number of likes and dislikes the playlist has
        Given the user logging out
        When the user is open "signIn" page
        Then the user is on the "signIn" page
        And the user clicks on the "sidebar" "Public Playlists" "Button"
        And the user is on the "publicPlaylists" page
        And "Public Playlists List" is displayed on "publicPlaylists" page
        And "Public Playlist Like Button" elements of "Public Playlists List" are displayed on "publicPlaylists" page
        And "Public Playlist Like Counter" elements of "Public Playlists List" are displayed on "publicPlaylists" page
        And "Public Playlist Dislike Button" elements of "Public Playlists List" are displayed on "publicPlaylists" page
        And "Public Playlist Dislike Counter" elements of "Public Playlists List" are displayed on "publicPlaylists" page

    @Smoke
    Scenario: Each playlist should display 10 songs
        Given the user is open "publicPlaylists" page
        When the user is on the "publicPlaylists" page
        Then "Public Playlists List" is displayed on "publicPlaylists" page
        And every playlist in "publicPlaylistsList" on the "publicPlaylists" page has 10 songs

    # # no possibility to divide song name and an author name
    @Smoke
    Scenario: Playlists songs card items include a song name and an author
        Given the user is open "publicPlaylists" page
        When the user is on the "publicPlaylists" page
        Then "Public Playlists List" is displayed on "publicPlaylists" page
        And "Public Playlist Song List" elements of "Public Playlists List" are displayed on "publicPlaylists" page

    @Smoke
    Scenario: No more than 10 playlists should be displayed per page
        Given the user is open "publicPlaylists" page
        When the user is on the "publicPlaylists" page
        Then "Public Playlists List" is displayed on "publicPlaylists" page
        And "publicPlaylists" page has no more than 10 elements in "Public Playlists List"

    @Smoke
    Scenario: Pagination is working and open next 10 playlists
        Given the user is open "publicPlaylists" page
        When the user is on the "publicPlaylists" page
        Then "Public Playlists List" is displayed on "publicPlaylists" page
        And "publicPlaylists" page has no more than 10 elements in "Public Playlists List"
        And the user clicks on the "pagination" "Right" "Arrow"
        And "Public Playlists List" is displayed on "publicPlaylists" page
        And "publicPlaylists" page has no more than 10 elements in "Public Playlists List"

    @Regression
    Scenario Outline: The Public Playlists page should have a filter feature that allows Guest to search for playlists by the following: <propertyName>
        Given I run mocking data
        When the user is open "publicPlaylists" page
        Then the user is on the "publicPlaylists" page
        And "Public Playlists List" is displayed on "publicPlaylists" page
        And "Search Box Value Input" is displayed on "publicPlaylists" page
        And the user "Input" "Value" in the "publicPlaylists" "Search Box" as: "<property>"
        And the user clicks on the "publicPlaylists" page "Search" "Icon"
        And "publicPlaylists" page "<elementName>" "<elementType>" contains next text: "<property>"
        Examples:
            | propertyName              | property         | elementName             | elementType |
            | Playlist name             | The unique album | publicPlaylistName      | List        |
            | Playlist owner's nickname | John             | publicPlaylistCreatedBy | Labels      |
            # #     # # |Playlist description| alias     ||| - need to open each playlist to check description
            | Song name                 | Du hast          | publicPlaylistSong      | List        |
            | Author name               | Rammstein        | publicPlaylistSong      | List        |


    @Regression
    Scenario Outline: The Public Playlists page should have a filter feature that allows Users to search for playlists by the following: <propertyName>
        Given I run mocking data
        When the user is open "signIn" page
        Then the user is on the "signIn" page
        And the user sing-ins without remembering with "test.user@example.com" and "secreT!123"
        And the user is on the "home" page
        And the user clicks on the "sidebar" "Public Playlists" "Button"
        And the user is on the "publicPlaylists" page
        And "Public Playlists List" is displayed on "publicPlaylists" page
        And "Search Box Value Input" is displayed on "publicPlaylists" page
        And the user "Input" "Value" in the "publicPlaylists" "Search Box" as: "<property>"
        And the user clicks on the "publicPlaylists" page "Search" "Icon"
        And "publicPlaylists" page "<elementName>" "<elementType>" contains next text: "<property>"
        And the user logging out
        Examples:
            | propertyName              | property         | elementName             | elementType |
            | Playlist name             | The unique album | publicPlaylistName      | List        |
            | Playlist owner's nickname | John             | publicPlaylistCreatedBy | Labels      |
            # #     # # |Playlist description| alias     ||| - need to open each playlist to check description
            | Song name                 | Du hast          | publicPlaylistSong      | List        |
            | Author name               | Rammstein        | publicPlaylistSong      | List        |

    @Regression
    Scenario Outline: The Public Playlists page should have a sorting feature that allows Guests to sort playlists by playlist name in <Order>
        Given the user is open "signIn" page
        When the user is on the "signIn" page
        Then the user clicks on the "sidebar" "Public Playlists" "Button"
        And the user is on the "publicPlaylists" page
        And "Public Playlists List" is displayed on "publicPlaylists" page
        And the user clicks on the "publicPlaylists" page "Sort" "Icon"
        And "Sort Menu" is displayed on "publicPlaylists" page
        And "Sort Group Name By Name Of Playlist" is displayed on "publicPlaylists" page
        And "Sort By Name Of Playlist Ascending Order Button" is displayed on "publicPlaylists" page
        And "Sort By Name Of Playlist Descending Order Button" is displayed on "publicPlaylists" page
        And the user clicks on the "publicPlaylists" page "Sort By Name Of Playlist <Order>" "Button"
        And playlists in "publicPlaylistsList" on the "publicPlaylists" page are ordered by playlist name in <order> order
        Examples:
            | Order            | order      |
            | Ascending Order  | ascending  |
            | Descending Order | descending |

    @Regression
    Scenario Outline: The Public Playlists page should have a sorting feature that allows Users to sort playlists by playlist name in <Order>
        Given the user is open "signIn" page
        When the user is on the "signIn" page
        Then the user sing-ins without remembering with "test.user@example.com" and "secreT!123"
        And the user is on the "home" page
        And the user clicks on the "sidebar" "Public Playlists" "Button"
        And the user is on the "publicPlaylists" page
        And "Public Playlists List" is displayed on "publicPlaylists" page
        And the user clicks on the "publicPlaylists" page "Sort" "Icon"
        And "Sort Menu" is displayed on "publicPlaylists" page
        And "Sort Group Name By Name Of Playlist" is displayed on "publicPlaylists" page
        And "Sort By Name Of Playlist Ascending Order Button" is displayed on "publicPlaylists" page
        And "Sort By Name Of Playlist Descending Order Button" is displayed on "publicPlaylists" page
        And the user clicks on the "publicPlaylists" page "Sort By Name Of Playlist <Order>" "Button"
        And playlists in "publicPlaylistsList" on the "publicPlaylists" page are ordered by playlist name in <order> order
        And the user logging out
        Examples:
            | Order            | order      |
            | Ascending Order  | ascending  |
            | Descending Order | descending |

    # # this feature should be refactored by FE team
    @Regression
    Scenario: The Public Playlists page should have a sorting feature that allows Guests to sort playlists by the number of comments in ascending or descending order.
        Given the user is open "publicPlaylists" page
        When the user is on the "publicPlaylists" page
        Then "Public Playlists List" is displayed on "publicPlaylists" page
        And the user clicks on the "publicPlaylists" page "Sort" "Icon"
        And "Sort Menu" is displayed on "publicPlaylists" page
        And "Sort Group Name By Comments" is displayed on "publicPlaylists" page
        And "Sort By Comments Ascending Order Button" is displayed on "publicPlaylists" page
        And "Sort By Comments Descending Order Button" is displayed on "publicPlaylists" page
    # When the user clicks on the "publicPlaylists" page "Sort By Comments Ascending Order" "Button" element
    # Then playlists in "publicPlaylistsList" on the "publicPlaylists" page are ordered by number of comments in ascending order - this validation step doesn't exist yet
    # When the user clicks on the "publicPlaylists" page "Sort" "Icon" element
    # Then "sortMenu" element is displayed on "publicPlaylists" page
    # When the user clicks on the "publicPlaylists" page "Sort By Comments Descending Order" "Button" element
    # Then playlists in "publicPlaylistsList" on the "publicPlaylists" page are ordered by number of comments in descending order - this validation step doesn't exist yet

    # # this feature should be refactored by FE team
    @Regression
    Scenario: The Public Playlists page should have a sorting feature that allows Users to sort playlists by the number of comments in ascending or descending order.
        Given the user is open "signIn" page
        When the user sing-ins without remembering with "test.user@example.com" and "secreT!123"
        Then the user is on the "home" page
        And the user clicks on the "sidebar" "Public Playlists" "Button"
        And the user is on the "publicPlaylists" page
        And "Public Playlists List" is displayed on "publicPlaylists" page
        And the user clicks on the "publicPlaylists" page "Sort" "Icon"
        And "Sort Menu" is displayed on "publicPlaylists" page
        And "Sort Group Name By Comments" is displayed on "publicPlaylists" page
        And "Sort By Comments Ascending Order Button" is displayed on "publicPlaylists" page
        And "Sort By Comments Descending Order Button" is displayed on "publicPlaylists" page
        # When the user clicks on the "publicPlaylists" page "Sort By Comments Ascending Order" "Button" element
        # Then playlists in "publicPlaylistsList" on the "publicPlaylists" page are ordered by number of comments in ascending order - this validation step doesn't exist yet
        # When the user clicks on the "publicPlaylists" page "Sort" "Icon" element
        # Then "sortMenu" element is displayed on "publicPlaylists" page
        # When the user clicks on the "publicPlaylists" page "Sort By Comments Descending Order" "Button" element
        # Then playlists in "publicPlaylistsList" on the "publicPlaylists" page are ordered by number of comments in descending order - this validation step doesn't exist yet
        Then the user logging out

    @Smoke
    Scenario: Each playlist on the Public Playlists page should be clickable
        Given the user is open "publicPlaylists" page
        When the user is on the "publicPlaylists" page
        Then "Public Playlists List" is displayed on "publicPlaylists" page
        And every element of "publicPlaylistsList" on the "publicPlaylists" page is clickable