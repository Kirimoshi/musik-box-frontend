import Pages from "../AdminTest/pageObjects/pages";

const adminUserData = {
    "email": "admin@example.com",
    "password": "secreT!123"
}

const adminPagesUrl = {
    admin: Pages['admin'].url,
    admin_users: Pages['admin_users'].url,
    playlist_comments: Pages['playlist_comments'].url,
    login: Pages['login'].url,
    new_admin: Pages['new_admin'].url,
    admin_edit: Pages['admin_edit'].url,
    current_admin: Pages['current_admin'].url,
    artists: Pages['artists'].url,
    new_artist: Pages['new_artist'].url,
    current_artist: Pages['current_artist'].url,
    artist_edit: Pages['artist_edit'].url,
    albums: Pages['albums'].url,
    new_album: Pages['new_album'].url,
    current_album: Pages['current_album'].url,
    album_edit: Pages['album_edit'].url,
    songs: Pages['songs'].url,
    new_song: Pages['new_song'].url,
    current_song: Pages['current_song'].url,
    song_edit: Pages['song_edit'].url,
    playlists: Pages['playlists'].url,
    playlist_edit: Pages['playlist_edit'].url,
    current_playlist: Pages['current_playlist'].url,
    genres: Pages['genres'].url,
    new_genre: Pages['new_genre'].url
};

module.exports = {
    adminUserData,
    adminPagesUrl
}