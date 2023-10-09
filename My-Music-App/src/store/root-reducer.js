import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './user/user.reducer';
import { myPlaylistsReducer } from './myPlaylists/myPlaylists.reducer';
import { publicPlaylistsReducer } from './public-playlists/public-playlists.reducer';
import { homePageReducer } from './homePage/homePage.reducer';
import { playlistDetailsReducer } from './playlist-details/playlist-details.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  myPlaylistsSlice: myPlaylistsReducer,
  publicPlaylistsSlice: publicPlaylistsReducer,
  homePageSlice: homePageReducer,
  playlistDetailsSlice: playlistDetailsReducer,
});
