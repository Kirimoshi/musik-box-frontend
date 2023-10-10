import { AdminPage } from "./adminPage";
import { AdminUsers } from "./page-adminUsers/adminUsers";
import { LoginPage } from "./page-login/loginPage";
import { NewAdminUser } from "./page-adminUsers/newAdminUserPage";
import { PlaylistComments } from "./page-playlistsComments/playlistCommentsPage";
import { EditAdminUser } from "./page-adminUsers/editAdminUserPage";
import { Artists } from "./page-artists/artistsPage";
import { NewArtist } from "./page-artists/newArtistPage";
import { CurrentArtist } from "./page-artists/currentArtistPage";
import { CurrentAdmin } from "./page-adminUsers/currentAdminUserPage";
import { EditArtist } from "./page-artists/editArtistPage";
import { Albums } from "./page-albums/albumsPage";
import { NewAlbum } from "./page-albums/newAlbumPage";
import { CurrentAlbum } from "./page-albums/currentAlbumPage";
import { EditAlbum } from "./page-albums/editAlbumPage";
import { Songs } from "./page-songs/songsPage";
import { NewSong } from "./page-songs/newSongPage";
import { CurrentSong } from "./page-songs/currentSongPage";
import { EditSong } from "./page-songs/editSongPage";
import { Playlists } from "./page-playlists/playlistsPage";
import { CurrentPlaylist } from "./page-playlists/currentPlaylistPage";
import { EditPlaylist } from "./page-playlists/editplaylistPage";
import { Genres } from "./page-genres/genresPage";
import { NewGenre } from "./page-genres/newGenrePage";

class Pages {
    constructor() {
        this.admin = new AdminPage();
        this.login = new LoginPage();
        this.playlist_comments = new PlaylistComments();
        this.admin_users = new AdminUsers();
        this.new_admin = new NewAdminUser();
        this.admin_edit = new EditAdminUser();
        this.artists = new Artists()
        this.new_artist = new NewArtist();
        this.current_artist = new CurrentArtist();
        this.current_admin = new CurrentAdmin();
        this.artist_edit = new EditArtist();
        this.albums = new Albums();
        this.new_album = new NewAlbum();
        this.current_album = new CurrentAlbum();
        this.album_edit = new EditAlbum();
        this.songs = new Songs();
        this.new_song = new NewSong();
        this.current_song = new CurrentSong();
        this.song_edit = new EditSong();
        this.playlists = new Playlists();
        this.playlist_edit = new EditPlaylist();
        this.current_playlist = new CurrentPlaylist();
        this.genres = new Genres();
        this.new_genre = new NewGenre();
    }
}
export default Pages = new Pages();