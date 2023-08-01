import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./user/user.reducer";
import { myPlaylistsReducer } from "./myPlaylists/myPlaylists.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  myPlaylistsSlice: myPlaylistsReducer,
});
