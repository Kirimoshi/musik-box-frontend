import Pages from "../UItest/pageObjects/pages";

const userData = {
    "email": "Valid25@ukr.net",
    "password": "Qwer212@#"
}

const userPagesUrl = {
    home: Pages['home'].url,
    signUp: Pages['signUp'].url,
    signIn: Pages['signIn'].url,
    base: Pages['base'].url,
    playlists: Pages['playlists'].url,
    playlist: Pages['playlist'].url,
    publicPlaylists: Pages['publicPlaylists'].url,
    sharedPlaylists: Pages['sharedPlaylists'].url,
    friends: Pages['friends'].url
};

module.exports = {
    userData,
    userPagesUrl
}