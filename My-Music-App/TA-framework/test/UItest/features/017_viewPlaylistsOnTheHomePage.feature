@017 @viewPlaylistsOnTheHomePage @Smoke
Feature: EPMRDPEMAP-612 View Playlists on the Home Page

    Scenario: The user opens home page
        Given the user is open "home" page
        Then the user is on the "home" page

    Scenario Outline: Verifying the logo of each playlist
        Given the user is on the "home" page
        And "Logo" "background-image" of each "<playlist_type>" are displayed on "home" page

        Examples:
            | playlist_type     |
            | Popular Playlist  |
            | Featured Playlist |
            | Latest Playlist   |

    Scenario Outline: Verifying the names of each playlist
        Given the user is on the "home" page
        And the "<playlist_type>" playlists have "name"

        Examples:
            | playlist_type |
            | popular       |
            | featured      |
            | latest        |

    Scenario Outline: Verifying the authors name of each playlist
        Given the user is on the "home" page
        And the "<playlist_type>" playlists have "author"

        Examples:
            | playlist_type |
            | popular       |
            | featured      |
            | latest        |

    Scenario Outline: Verifying the description of each playlist
        Given the user is on the "home" page
        And the "<playlist_type>" playlists have "description"

        Examples:
            | playlist_type |
            | popular       |
            | featured      |
            | latest        |

    Scenario Outline: Verifying the quantity of each playlists types in the "home" page
        Given the user is on the "home" page
        And "home" page has no more than <max_elements> elements in "<playlist_type>" playlists

        Examples:
            | max_elements | playlist_type      |
            | 4            | Popular Playlists  |
            | 6            | Featured Playlists |
            | 6            | Latest Playlists   |

    Scenario Outline: Verifying that Popular Playlists have no less than 5 songs
        Given the user is on the "home" page
        And the <ordinal> popular playlist on the home page has no less than 5 songs in it

        Examples:
            | ordinal |
            | 1       |
            | 2       |
            | 3       |
            | 4       |

    Scenario: Verifying that Poopular playlists with the largest number of likes will display first
        Given the user is on the "home" page
        And the popular playlists sorted by the largest number of likes