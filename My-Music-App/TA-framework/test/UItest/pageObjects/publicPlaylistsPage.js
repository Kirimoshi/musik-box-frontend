/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { BasePage } from "./basePage";

export class PublicPlaylistsPage extends BasePage {
    constructor() {
        super();
        this.url = `public-playlists`;
        this.playlistsContainer = `.public-playlists__list`;
    }
    
    get publicPlaylistsList() {
        return $(`${this.playlistsContainer}`).$$('.public-playlist-card__wrapper');
    }

    get publicPlaylistsItem() {
        return $(`${this.playlistsContainer}`).$('.public-playlist-card__wrapper');
    }

    get publicPlaylistNameList() {
        return $(`${this.playlistsContainer}`).$$('.public-playlist-card__name');
    }

    get publicPlaylistNameListItem() {
        return $('.public-playlist-card__name');
    }

    get publicPlaylistCreatedByLabels() {
        return $(`${this.playlistsContainer}`).$$('.public-playlist-card__created-by');
    }

    get publicPlaylistSongList() {
        return $(`${this.playlistsContainer}`).$$('p[data-songlist-id]');
    }

    get publicPlaylistSongListItem() {
        return $(`${this.playlistsContainer}`).$('p[data-songlist-id]').$$('span');
    }

    get publicPlaylistLikeButton() {
        return $(`${this.playlistsContainer}`).$$('[data-likes-id] + div.reaction');
    }

    get publicPlaylistLikeCounter() {
        return $(`${this.playlistsContainer}`).$$('span[data-likes-id]');
    }

    get publicPlaylistDislikeButton() {
        return $(`${this.playlistsContainer}`).$$('[data-dislikes-id] + div.reaction');
    }

    get publicPlaylistDislikeCounter() {
        return $(`${this.playlistsContainer}`).$$('span[data-dislikes-id]');
    }

    get searchBoxValueInput() {
        return $(`input[type='search']`);
    }

    get searchIcon() {
        return $('[data-search-id="search-bar-icon"]');
    }

    get sortIcon() {
        return $('div[data-sort-id=sort-icon]');
    }

    get sortMenu() {
        return $('#sortMenu');
    }

    get sortGroupNameByNameOfPlaylist() {
        return $('p=Name of playlist');
    }

    get sortByNameOfPlaylistAscendingOrderButton() {
        return $('label[for=playlist-name-asc]')
    }

    get sortByNameOfPlaylistDescendingOrderButton() {
        return $('label[for=playlist-name-desc]')
    }
    
    get sortGroupNameByComments() {
        return $('p=Comments');
    }

    get sortByCommentsAscendingOrderButton() {
        return $('label[for=comments-count-asc]')
    }

    get sortByCommentsDescendingOrderButton() {
        return $('label[for=comments-count-desc]')
    }
}