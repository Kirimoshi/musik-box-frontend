import { SignUpPage } from "./signUpPage";
import { SignInPage } from "./signInPage"
import { HomePage } from "./homePage";
import { PlaylistPage } from "./playlistPage";
import { PlaylistsPage } from "./playlistsPage";
import { BasePage } from "./basePage";
import { PublicPlaylistsPage } from "./publicPlaylistsPage";
import { SharedPlaylistsPage } from "./sharedPlaylistsPage";
import { FriendsPage } from "./friendsPage";

class Pages {
    constructor() {
        this.signUp = new SignUpPage();
        this.signIn = new SignInPage();
        this.home = new HomePage();
        this.playlists = new PlaylistsPage();
        this.playlist = new PlaylistPage();
        this.base = new BasePage();
        this.publicPlaylists = new PublicPlaylistsPage();
        this.sharedPlaylists = new SharedPlaylistsPage();
        this.friends = new FriendsPage();
        // Add more instances as needed
    }
}
export default Pages = new Pages();
