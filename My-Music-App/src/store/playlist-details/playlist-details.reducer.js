import { createSlice } from '@reduxjs/toolkit';
import * as thunks from './playlist-details.thunks';

const initialState = {
  loading: false,
  error: null,
  playlistDetails: {
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

export const playlistDetailsSlice = createSlice({
  name: 'playlistDetailsSlice',
  initialState: initialState,
  reducers: {
    setCurrentPlaylist: (state, action) => {
      state.playlistDetails = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        thunks.fetchPlaylistDetails.pending,
        thunks.fetchPlaylistDetailsPending
      )
      .addCase(
        thunks.fetchPlaylistDetails.fulfilled,
        thunks.fetchPlaylistDetailsFulfilled
      )
      .addCase(
        thunks.fetchPlaylistDetails.rejected,
        thunks.fetchPlaylistDetailsRejected
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
        thunks.editPlaylistDetails.pending,
        thunks.editPlaylistDetailsPending
      )
      .addCase(
        thunks.editPlaylistDetails.fulfilled,
        thunks.editPlaylistDetailsFulfilled
      )
      .addCase(
        thunks.editPlaylistDetails.rejected,
        thunks.editPlaylistDetailsRejected
      );
  },
});

export const { setCurrentPlaylist } = playlistDetailsSlice.actions;

export const playlistDetailsReducer = playlistDetailsSlice.reducer;
