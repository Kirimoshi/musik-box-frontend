import { SignUpPage } from "./signUpPage";
import { SignInPage } from "./signInPage"
import { HomePage } from "./homePage";
import { PlaylistPage } from "./playlistPage";
import { PlaylistsPage } from "./playlistsPage";
import { BasePage } from "./basePage";

class Pages {
    constructor() {
        this.signUp = new SignUpPage();
        this.signIn = new SignInPage();
        this.home = new HomePage();
        this.playlists = new PlaylistsPage();
        this.playlist = new PlaylistPage();
        this.base = new BasePage()
        // Add more instances as needed
    }
}
export default Pages = new Pages();