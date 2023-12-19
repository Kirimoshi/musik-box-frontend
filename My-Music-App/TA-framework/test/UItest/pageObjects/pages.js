import { SignUpPage } from "./signUpPage";
import { SignInPage } from "./signInPage"
import { HomePage } from "./homePage";
import { MyPlaylistsPage } from "./myPlaylistsPage";
import { BasePage } from "./basePage";
import { PublicPlaylistsPage } from "./publicPlaylistsPage";
import { PublicPlaylistPage } from "./publicPlaylistPage";
import { SharedPlaylistsPage } from "./sharedPlaylistsPage";
import { FriendsPage } from "./friendsPage";
import { SharedPlaylistPage } from "./sharedPlaylistPage";
import { MyPlaylistPage } from "./MyPlaylistPage";
import { SendByMe } from "./friendsSendByMePage";

class Pages {
    constructor() {
        this.signUp = new SignUpPage();
        this.signIn = new SignInPage();
        this.home = new HomePage();
        this.myPlaylists = new MyPlaylistsPage();
        this.myPlaylist = new MyPlaylistPage();
        this.base = new BasePage();
        this.publicPlaylists = new PublicPlaylistsPage();
        this.sharedPlaylists = new SharedPlaylistsPage();
        this.sharedPlaylist = new SharedPlaylistPage();
        this.friends = new FriendsPage();
        this.publicPlaylist = new PublicPlaylistPage();
        this.sendByMe = new SendByMe();
    }
}
export default Pages = new Pages();
