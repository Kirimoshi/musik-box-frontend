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

    get playlistName() {
        return $$(`${this.playlistsContainer} .playlist-card__title`);
    }

    get myPlaylistLogo() {
        return $$(`${this.playlistsContainer} .playlist-card__image`);
    }
    
    get playlistDialogWindowLogo() {
        return $(`img[alt="Playlist Logo"]+input`);
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

    get editPlaylistButton() {
        return $$(`//p[text()="Edit"]`);
    }

    get editPlaylistFormTitle() {
        return $(`p.ModalForm__title`)
    }

    get editPlaylistForm() {
        return $(`dialog.ModalForm__container`);
    }

    get editPlaylistNameInput() {
        return $(`input[name="playlistName"]`);
    }

    get editPlaylistDescriptionInput() {
        return $(`textarea.ModalForm__inputDescription`);
    }

    get editPlaylistFormSubmitButton() {
        return $(`button.ModalForm__submitButton`);
    }

    get editFormExitMessage() {
        return $(`.ModalForm__container dialog h3`)
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
    get shortNameInputError() {
        return $(`//p[text()="Too short, playlist name should be between 3 and 50 characters in length."]`)
    } 
                
    get shortDescriptionInputError() {
        return $(`//p[text()="Too short, playlist description should be between 3 and 1000 characters in length."]`)
    } 

    get tooBigNameInputError() {
        return $(`//p[text()="Too big, playlist name should be between 3 and 50 characters in length."]`)
    }

    get tooBigDescriptionInputError() {
        return $(`//p[text()="Too big, playlist description should be between 3 and 1000 characters in length."]`)
    }
}