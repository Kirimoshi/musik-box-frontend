import { BasePage } from "./basePage";

export class PlaylistsPage extends BasePage{
    constructor() {
        super();
        this.url = `ViewMyPlaylists`;
        this.playlistsForm = `div.playlist-songsContainer`;
    }
    get playlistsItem() {
        return $$(`${this.playlistsForm} .playlist-song`);
    }
}