import { BasePage } from "./basePage";

export class PlaylistsPage extends BasePage{
    constructor() {
        super();
        this.url = `my-playlists`;
        this.playlistsSection = `section`;
    }
    get playlistsItem() {
        return $$(`${this.playlistsSection} .my-playlists__card`);
    }
}