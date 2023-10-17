import Pages from "../UItest/pageObjects/pages";

const newUserData = {
    "email": "Valid25@ukr.net",
    "password": "Qwer212@#"
}

const userData = {
    "email": "test.user@example.com",
    "password": "secreT!123"
}

const PagesUrl = {
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
    newUserData,
    PagesUrl,
    userData
}