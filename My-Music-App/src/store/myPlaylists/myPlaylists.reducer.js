import { createSlice } from "@reduxjs/toolkit";
import * as thunks from "./myPlaylists.thunks";

const INITIAL_STATE = {
  loading: false,
  error: null,
  myPlaylists: [],
  currentPlaylist: {
    playlistInfo: {
      playlistId: null,
      createdOn: null,
      updatedOn: null,
      playlistName: null,
      playlistType: null,
      logo: null,
      description: null,
      likes: null,
      dislikes: null,
    },
    ownerInfo: {
      email: null,
      registerdate: null,
      playlistsOwned: null,
    },
    songs: [],
  },
};

export const myPlaylistsSlice = createSlice({
  name: "myPlaylistsSlice",
  initialState: INITIAL_STATE,
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
      )
      .addCase(
        thunks.fetchSingleMyPlaylist.pending,
        thunks.fetchSingleMyPlaylistPending
      )
      .addCase(
        thunks.fetchSingleMyPlaylist.fulfilled,
        thunks.fetchSingleMyPlaylistFulfilled
      )
      .addCase(
        thunks.fetchSingleMyPlaylist.rejected,
        thunks.fetchSingleMyPlaylistRejected
      )
      .addCase(
        thunks.deleteSongFromPlaylist.pending,
        thunks.deleteSongFromPlaylistPending
      )
      .addCase(
        thunks.deleteSongFromPlaylist.fulfilled,
        thunks.deleteSongFromPlaylistFulfilled
      )
      .addCase(
        thunks.deleteSongFromPlaylist.rejected,
        thunks.deleteSongFromPlaylistRejected
      )
      .addCase(
        thunks.changePlaylistType.pending,
        thunks.changePlaylistTypePending
      )
      .addCase(
        thunks.changePlaylistType.fulfilled,
        thunks.changePlaylistTypeFulfilled
      )
      .addCase(
        thunks.changePlaylistType.rejected,
        thunks.changePlaylistTypeRejected
      );
  },
});

export const { setMyPlaylists } = myPlaylistsSlice.actions;

export const myPlaylistsReducer = myPlaylistsSlice.reducer;
