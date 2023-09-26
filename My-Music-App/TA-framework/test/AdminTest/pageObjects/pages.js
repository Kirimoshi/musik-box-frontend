import { AdminPage } from "./adminPage";
import { AdminUsers } from "./page-adminUsers/adminUsers";
import { Header } from "./elements/header";
import { LoginPage } from "./page-login/loginPage";
import { NewAdminUser } from "./page-adminUsers/newAdminUser";
import { PlaylistComments } from "./page-playlistsComments/playlistCommentsPage";
import { EditAdminUser} from "./page-adminUsers/editAdminUser";

class Pages {
    constructor() {
        this.admin = new AdminPage();
        this.login = new LoginPage();
        this.header = new Header();
        this.playlist_comments = new PlaylistComments();
        this.admin_users = new AdminUsers();
        this.new_admin = new NewAdminUser();
        this.edit = new EditAdminUser()
    }
}
export default Pages = new Pages();