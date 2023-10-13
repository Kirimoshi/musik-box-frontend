import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './user/user.reducer';
import { myPlaylistsReducer } from './myPlaylists/myPlaylists.reducer';
import { publicPlaylistsReducer } from './public-playlists/public-playlists.reducer';
import { homePageReducer } from './homePage/homePage.reducer';
import { sharedPlaylistsReducer } from './shared-playlists/shared-playlists.reducer';
import { playlistDetailsReducer } from './playlist-details/playlist-details.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  myPlaylistsSlice: myPlaylistsReducer,
  publicPlaylistsSlice: publicPlaylistsReducer,
  sharedPlaylistsSlice: sharedPlaylistsReducer,
  homePageSlice: homePageReducer,
  playlistDetailsSlice: playlistDetailsReducer,
});
