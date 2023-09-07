import { createSlice } from "@reduxjs/toolkit";
import * as thunks from "./myPlaylists.thunks";

const initialState = {
  loading: false,
  error: null,
  myPlaylists: [],
};

export const myPlaylistsSlice = createSlice({
  name: "myPlaylistsSlice",
  initialState: initialState,
  reducers: {
    setMyPlaylists: (state, action) => {
      state.myPlaylists = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        thunks.fetchPageOfMyPlaylists.pending,
        thunks.fetchPageOfMyPlaylistsPending
      )
      .addCase(
        thunks.fetchPageOfMyPlaylists.fulfilled,
        thunks.fetchPageOfMyPlaylistsFulfilled
      )
      .addCase(
        thunks.fetchPageOfMyPlaylists.rejected,
        thunks.fetchPageOfMyPlaylistsRejected
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

export const { setMyPlaylists } = myPlaylistsSlice.actions;

export const myPlaylistsReducer = myPlaylistsSlice.reducer;
