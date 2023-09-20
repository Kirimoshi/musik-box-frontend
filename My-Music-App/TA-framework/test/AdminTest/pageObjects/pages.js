import { AdminPage } from "./adminPage";
import { Header } from "./elements/header";
import { LoginPage } from "./loginPage";
import { PlaylistComments } from "./playlistCommentsPage";

class Pages {
    constructor() {
        this.admin = new AdminPage();
        this.login = new LoginPage();
        this.header = new Header();
        this.playlist_comments = new PlaylistComments();
    }
}
export default Pages = new Pages();