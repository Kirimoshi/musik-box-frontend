import { BasePage } from "./basePage";

export class MyPlaylistsPage extends BasePage{
    constructor() {
        super();
        this.url = `my-playlists`;
        this.playlistsContainer = `section.my-playlists__list`;
    }

    get myPlaylistsList() {
        return $$(`${this.playlistsContainer} .my-playlists__card`);
    }

    get myPlaylistName() {
        return $$(`${this.playlistsContainer} .playlist-card__title`);
    }

    get myPlaylistLogo() {
        return $$(`${this.playlistsContainer} .playlist-card__image`);
    }

    get myPlaylistSongsList() {
        return $$(`${this.playlistsContainer} .playlist-card__songs`);
    }

    get playlistsItem() {
        return $$(`${this.playlistsContainer} .my-playlists__card`);
    }

    get playlistMenu() {
        return $$(`${this.playlistsContainer} .playlist-card__menu-icon`);
    }

    get deletePlaylistButton() {
        return $$(`//p[text()="Delete Playlist"]`);
    }

    get dialogWindowPlaylistTitle() {
        return $(`dialog h3`)
    }

    get dialogDeletePlaylistButton() {
        return $(`//dialog/button[text()="Delete playlist"]`)
    }
    get discardButton() {
        return $(`//dialog/button[text()="Discard"]`)
    }

    get cancelDeletionPlaylistButton() {
        return $(`//dialog/button[text()="Cancel"]`)
    }

    get searchBoxValueInput(){
        return $(`input[type='search']`);
    }

    get addPlaylistButton() {
        return $(`[data-testid="newplaylist-btn"]`);
    }

    get newPlaylistNameInput() {
        return $(`input[name="playlistName"]`);
    }

    get newPlaylistDescriptionInput() {
        return $(`textarea.ModalForm__inputDescription`);
    }

    get createNewPlaylistButton() {
        return $(`button.ModalForm__submitButton`);
        
    }
    get closeWindow() {
        return $(`.ModalForm__closeButton img`);
        
    }
    get inputError() {
        return $(`//p[text()="Too short, playlist name should be between 3 and 50 characters in length."]`)
             } 
                
     get errorDescription() {
        return $(`//p[text()="Too short, playlist description should be between 3 and 1000 characters in length."]`)
                            } 
}