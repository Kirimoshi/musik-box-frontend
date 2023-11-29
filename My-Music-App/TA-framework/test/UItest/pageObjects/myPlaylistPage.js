import { BasePage } from "./basePage";

export class MyPlaylistPage extends BasePage {
    constructor() {
        super();
        this.url = `details/`;
        this.playlistForm = `section.playlist__profile`;
        this.songsForm = `div.SongList`;
        this.addSongsForm = `dialog.addSongsToPlaylistsModal__container`;
        this.profileMenu = `.profile-menu`;

    }
    get songMenu() {
        return $$(`${this.songsForm} [data-song-id] svg:nth-child(1)`);
    }

    get songsList() {
        return $$(`${this.songsForm} [data-song-id]`);
    }

    get removeSongButton() {
        return $$(`//span[text()="Remove song from playlist"]`);
    }

    get dialogWindowSongTitle() {
        return $(`${this.songsForm} dialog h3`)
    }

    get confirmDeletionButton() {
        return $(`//div[@class="SongList"]/dialog/button[text()="Remove Song"]`)
    }

    get cancelDeletionSongButton() {
        return $(`//div[@class="SongList"]/dialog/button[text()="Cancel"]`)
    }

    get playlistTitle() {
        return $(`${this.playlistForm} span.profile__playlist-name`)
    }

    get playlistItem() {
        return $(`${this.playlistForm} .profile__playlist-cover`)
    }

    get playlistMenu() {
        return $(`${this.playlistForm} div.profile__dropdown-menu`);
    }

    get deletePlaylistButton() {
         return $(`${this.playlistForm} .profile-menu__delete`);
    }

    get dialogDeletePlaylistButton() {
        return $(`//dialog/button[text()="Delete playlist"]`)
    }

    get dialogCancelButton() {
        return $(`//dialog/button[text()="Cancel"]`)
    }
    
    get dialogWindowPlaylistTitle() {
        return $(`${this.playlistForm} dialog h3`)
    }

    get playlistDescription() {
        return $(`${this.playlistForm} span.profile__description`)
    }

    get playlistLikes() {
        return $(`${this.playlistForm} span.profile__rating--like`)
    }

    get playlistDislikes() {
        return $(`${this.playlistForm} span.profile__rating--dislike`)
    }

    get createdDate() {
        return $(`${this.playlistForm} span.profile__text--created`)
    }

    get updatedDate() {
        return $(`${this.playlistForm} span.profile__text--updated`)
    }

    get profileEmail() {
        return $(`${this.playlistForm} h3.profile__email`)
    }

    get registrationDate() {
        return $(`${this.playlistForm} span.profile__text--register`)
    }

    get playlistsCounter() {
        return $(`${this.playlistForm} span.profile__text--playlist-amount`)
    }

    get songName() {
        return $$(`${this.songsForm} .SongList__artistInfo > div p:only-of-type`)
    }

    get songImage() {
        return $$(`${this.songsForm} [alt="song cover"]`)
    }

    get commentList() {
        return $$(`section .comments__list`)
    }

    get commentInput() {
        return $(`textarea#new-comment`)
    }

    get leaveCommentButton() {
        return $(`button.comment-form__submit-btn`)
    }

    get commentorName() {
        return $$(`span.comment__author-name`)
    }

    get commentEmail() {
        return $$(`p.comment__author-email`)
    }
    
    get commentContent() {
        return $$(`p.comment__content`)
    }

    get commentDate() {
        return $$(`span.comment__age`)
    }

    get addSongButton() {
        return $(`div.addsong svg`)
    }

    get addSongList() {
        return $$(`${this.addSongsForm} .addsong-item.addsong-item`)
    }

    get addSongName() {
        return $$(`${this.addSongsForm} .addsong-item.addsong-item	p:only-child`)
    }

    get addSongArtistName() {
        return $$(`.addsong-item p:nth-of-type(2)`)
    }

    get addSongAlbumName() {
        return $$(`${this.addSongsForm} .addsong-item div p:nth-last-of-type(2)`)
    }

    get songInput() {
        return $(`${this.addSongsForm} input[type="text"]`)
    }

    get songSearchButton() {
        return $(`${this.addSongsForm} button[type="submit"] svg`)
    }

    get addSongToPlaylistButton() {
        return $(`${this.addSongsForm} .addsong-item-icon`)
    }

    get rightArrowPaginator() {
        return $(`${this.addSongsForm} [data-right-arrow-id="pagination-right-arrow"]`)
    }

    get leftArrowPaginator() {
        return $(`${this.addSongsForm} [data-left-arrow-id="pagination-left-arrow"]`)
    }

    get closeAddSongsWindowButton() {
        return $(`${this.addSongsForm} button [alt="button to close modal"]`)
    }

    async deleteLastAddedSong() {
        await this.songMenu[await this.songMenu.length-1].click();
        await this.removeSongButton[await this.removeSongButton.length-1].click();
        await this.confirmDeletionButton.click();
    }

    get closeAddSongsWindowButton() {
        return $(`${this.addSongsForm} button [alt="button to close modal"]`)
    }

    get commentErrorMessage() {
        return $(`p.comment-form__error-msg`)
    }

    get playlistMenuDeleteButton() {
        return $(`${this.profileMenu} .profile-menu__delete`)
    }

    get playlistMenuEditButton() {
        return $(`${this.profileMenu} .profile-menu__edit`)
    }

    get privateButton() {
        return $(`${this.profileMenu} .profile-menu__change-type--private`)
    }

    get sharedButton() {
        return $(`${this.profileMenu} .profile-menu__change-type--shared`)
    }

    get publicButton() {
        return $(`${this.profileMenu} .profile-menu__change-type--public`)
    }

    get playlistType() {
        return $(`${this.playlistForm} .profile__playlist-type`)
    }

    get playlistTypes() {
        return $$(`${this.playlistForm} div.profile__dropdown-menu .profile-menu li`);
    }

    get changePlaylistTypeButton() {
        return $(`//dialog/button[text()="Change"]`)
    }

}