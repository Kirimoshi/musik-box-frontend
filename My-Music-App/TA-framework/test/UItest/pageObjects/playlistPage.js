import { BasePage } from "./basePage";

export class PlaylistPage extends BasePage{
    constructor() {
        super();
        this.url = `details/`;
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

    get dialogWindowTitle () {
        return $(`${this.songsForm} dialog h3`)
    }

    get removeSongButton () {
        return $(`//div[@class="songsContainer"]/dialog/button[text()="Remove Song"]`)
    }

    get cancelDeletionSongButton () {
        return $(`//div[@class="songsContainer"]/dialog/button[text()="Cancel"]`)
    }
    get playlistTitle(){
        return $(`section span.profile__playlist-name`)
    }
   
    get playlistItem () {
        return $(`section div[role="img"]`)
    }
    get playlistDescription(){
        return $(`section span.profile__description`)
    }
    get playlistLikes(){
        return $(`section span.profile__rating--like`)
    }
     get playlistDislikes(){
        return $(`section span.profile__rating--dislike`)
    }
    get createdDate(){
        return $(`section span.profile__text--created`)
    }
    get updatedDate(){
        return $(`section span.profile__text--updated`)
    }
    get profileEmail(){
        return $(`section h3.profile__email`)
    }
    get registrationDate(){
        return $(`section span.profile__text--register`)
    }
    get amountNumber(){
        return $(`section span.profile__text--playlist-amount`)
    }
    get availabilityName(){
        return $(`.song .artistInfo p`)
        }
    get songImage(){
        return $$(`div.imageBox-artistinfo img`)     
           }
    get commentorName(){
        return $(`div.commentor-info .commentor-name`)     
               }
    get commentorComment(){
        return $(`div.commentor-comment p`)     
           }
}