export class Sidebar {
    constructor() {}
    
    get myPlaylistsButton() {
        return $(`//a[@href="/my-playlists"]//following-sibling::span[text()="My Playlists"]`)
    }
}