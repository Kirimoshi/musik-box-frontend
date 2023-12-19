@012 @writeComments @Regression
Feature: EPMRDPEMAP-648 write comments to playlist

    Scenario: The user login to the application
        Given the user "signIn" to the application
        Then the user is on the "home" page

    Scenario: The user writes valid comment to the My Playlist
        Given the user is on the "home" page
        When the user clicks on the "sidebar" "My Playlists" "Button"
        Then the user is on the "myPlaylists" page
        And the user clicks on the "myPlaylists" page "Playlists" "Item" 1 element
        And the user is on the "current" "myPlaylist" page
        And "Comment Input" is displayed on "myPlaylist" page
        And the user "Input" "Comment" in the "myPlaylist" "page" as: "my new comment"
        And the user clicks on the "myPlaylist" page "Leave Comment" "Button"
        And the "my new comment" is added to the "myPlaylist" page "Comment Content"

    Scenario: Validate comments information on the My Playlist
        Given the user is on the "current" "myPlaylist" page
        Then "Comment List" is displayed on "myPlaylist" page
        And "Commentor Name" 1 element of "Comment List" are displayed on "myPlaylist" page
        And "Comment Content" 1 element of "Comment List" are displayed on "myPlaylist" page
        And "Comment Date" 1 element of "Comment List" are displayed on "myPlaylist" page
        And "Comment Email" 1 element of "Comment List" are displayed on "myPlaylist" page

    Scenario: The user writes comment to the My Playlist with less than 10 characters
        Given the user is on the "current" "myPlaylist" page
        When the user "Input" "Comment" in the "myPlaylist" "page" as: "comment"
        Then "myPlaylist" page "Comment Error" "Message" is: "Too short, comment should be between 10 and 1000 characters in length."

    Scenario: The user writes comment to the My Playlist with more than 1000 characters
        Given the user is on the "current" "myPlaylist" page
        When the user "Input" "Comment" in the "myPlaylist" "page" as: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel th"
        Then "myPlaylist" page "Comment Error" "Message" is: "Too big, comment should be between 10 and 1000 characters in length."

    Scenario: The user writes valid comment to the Shared Playlist
        Given the user clicks on the "sidebar" "Shared Playlists" "Button"
        When the user is on the "sharedPlaylists" page
        Then the user clicks on the "sharedPlaylists" page "Shared Playlists" "List" 1 element
        And the user is on the "current" "sharedPlaylist" page
        And "Comment Input" is displayed on "sharedPlaylist" page
        And the user "Input" "Comment" in the "sharedPlaylist" "page" as: "my new comment"
        And the user clicks on the "sharedPlaylist" page "Leave Comment" "Button"
        And the "my new comment" is added to the "sharedPlaylist" page "Comment Content"

    Scenario: Validate comments information on the Shared Playlist
        Given the user is on the "current" "sharedPlaylist" page
        When "Comment List" is displayed on "sharedPlaylist" page
        Then "Commentor Name" 1 element of "Comment List" are displayed on "sharedPlaylist" page
        And "Comment Content" 1 element of "Comment List" are displayed on "sharedPlaylist" page
        And "Comment Date" 1 element of "Comment List" are displayed on "sharedPlaylist" page
        And "Comment Email" 1 element of "Comment List" are displayed on "sharedPlaylist" page

    Scenario: The user writes comment to the Shared Playlist with less than 10 characters
        Given the user is on the "current" "sharedPlaylist" page
        When the user "Input" "Comment" in the "sharedPlaylist" "page" as: "comment"
        Then "sharedPlaylist" page "Comment Error" "Message" is: "Too short, comment should be between 10 and 1000 characters in length."

    Scenario: The user writes comment to the Shared Playlist with more than 1000 characters
        Given the user is on the "current" "sharedPlaylist" page
        When the user "Input" "Comment" in the "sharedPlaylist" "page" as: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel th"
        Then "sharedPlaylist" page "Comment Error" "Message" is: "Too big, comment should be between 10 and 1000 characters in length."

    Scenario: The user writes valid comment to the Public Playlist
        Given the user clicks on the "sidebar" "Public Playlists" "Button"
        Then the user is on the "publicPlaylists" page
        When the user clicks on the "publicPlaylists" page "Public Playlists" "List" 1 element
        And the user is on the "current" "publicPlaylist" page
        And "Comment Input" is displayed on "publicPlaylist" page
        And the user "Input" "Comment" in the "publicPlaylist" "page" as: "my new comment"
        And the user clicks on the "publicPlaylist" page "Leave Comment" "Button"
        And the "my new comment" is added to the "publicPlaylist" page "Comment Content"

    Scenario: Validate comments information on the Public Playlist
        Given the user is on the "current" "publicPlaylist" page
        When "Comment List" is displayed on "publicPlaylist" page
        Then "Commentor Name" 1 element of "Comment List" are displayed on "publicPlaylist" page
        And "Comment Content" 1 element of "Comment List" are displayed on "publicPlaylist" page
        And "Comment Date" 1 element of "Comment List" are displayed on "publicPlaylist" page
        And "Comment Email" 1 element of "Comment List" are displayed on "publicPlaylist" page

    Scenario: The user writes comment to the Public Playlist with less than 10 characters
        Given the user is on the "current" "publicPlaylist" page
        When the user "Input" "Comment" in the "publicPlaylist" "page" as: "comment"
        Then "publicPlaylist" page "Comment Error" "Message" is: "Too short, comment should be between 10 and 1000 characters in length."

    Scenario: The user writes comment to the Public Playlist with more than 1000 characters
        Given the user is on the "current" "publicPlaylist" page
        When the user "Input" "Comment" in the "publicPlaylist" "page" as: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel th"
        Then "publicPlaylist" page "Comment Error" "Message" is: "Too big, comment should be between 10 and 1000 characters in length."

    Scenario: The user tries write more than 3 comments per 1 minute to the Playlist
        Given the user is on the "current" "publicPlaylist" page
        When the user "Input" "Comment" in the "publicPlaylist" "page" as: "new comment 1"
        Then the user clicks on the "publicPlaylist" page "Leave Comment" "Button"
        And the user "Input" "Comment" in the "publicPlaylist" "page" as: "new comment 2"
        And the user clicks on the "publicPlaylist" page "Leave Comment" "Button"
        And the "Leave Comment Button" in the "publicPlaylist" page is "disable" and click is "not-allowed"