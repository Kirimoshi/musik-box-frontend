import { createSlice } from "@reduxjs/toolkit";
import * as thunks from "./myPlaylists.thunks";

const INITIAL_STATE = {
  loading: false,
  error: null,
  myPlaylists: [],
  songs: [],
};

export const myPlaylistsSlice = createSlice({
  name: "myPlaylistsSlice",
  initialState: INITIAL_STATE,
  reducers: {
    setMyPlaylists: (state, action) => {
      state.myPlaylists = action.payload;
    },
    setSongs: (state, action) => {
      state.songs = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        thunks.fetchMyPlaylistData.pending,
        thunks.fetchMyPlaylistDataPending
      )
      .addCase(
        thunks.fetchMyPlaylistData.fulfilled,
        thunks.fetchMyPlaylistDataFulfilled
      )
      .addCase(
        thunks.fetchMyPlaylistData.rejected,
        thunks.fetchMyPlaylistDataRejected
      )
      .addCase(thunks.deleteMyPlaylist.pending, thunks.deleteMyPlaylistPending)
      .addCase(
        thunks.deleteMyPlaylist.fulfilled,
        thunks.deleteMyPlaylistFulfilled
      )
      .addCase(
        thunks.deleteMyPlaylist.rejected,
        thunks.deleteMyPlaylistRejected
      );
  },
});

export const { setMyPlaylists, setSongs } = myPlaylistsSlice.actions;

export const myPlaylistsReducer = myPlaylistsSlice.reducer;
