import { BasePage } from "./basePage";

export class PlaylistPage extends BasePage {
    constructor() {
        super();
        this.url = `details/`;
        this.playlistForm = `section.playlist__profile`;
        this.songsForm = `div.songsContainer`;
    }
    get songMenu() {
        return $$(`${this.songsForm} .songlist-vertical-menu svg`);
    }

    get songsList() {
        return $$(`${this.songsForm} .songs`);
    }

    get removeSongFromPlaylistButton() {
        return $$(`${this.songsForm} .delete-modal`);
    }

    get dialogWindowSongTitle() {
        return $(`${this.songsForm} dialog h3`)
    }

    get removeSongButton() {
        return $(`//div[@class="songsContainer"]/dialog/button[text()="Remove Song"]`)
    }

    get cancelDeletionSongButton() {
        return $(`//div[@class="songsContainer"]/dialog/button[text()="Cancel"]`)
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

    get cancelDeletionPlaylistButton() {
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
        return $$(`${this.songsForm} .song .artistInfo`)
    }

    get songImage() {
        return $$(`${this.songsForm} div.imageBox-artistinfo img`)
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
    
    get commentContent() {
        return $$(`p.comment__content`)
    }

    get commentAge() {
        return $$(`span.comment__age`)
    }
}