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
    commentsInfo: {
      comments: [],
      metadata: {},
    },
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
        thunks.addSongToPlaylist.pending,
        thunks.addSongToPlaylistPending
      )
      .addCase(
        thunks.addSongToPlaylist.fulfilled,
        thunks.addSongToPlaylistFulfilled
      )
      .addCase(
        thunks.addSongToPlaylist.rejected,
        thunks.addSongToPlaylistRejected
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
      )
      .addCase(
        thunks.fetchPlaylistComments.pending,
        thunks.fetchPlaylistCommentsPending
      )
      .addCase(
        thunks.fetchPlaylistComments.fulfilled,
        thunks.fetchPlaylistCommentsFulfilled
      )
      .addCase(
        thunks.fetchPlaylistComments.rejected,
        thunks.fetchPlaylistCommentsRejected
      )
      .addCase(
        thunks.addCommentToPlaylist.pending,
        thunks.addCommentToPlaylistPending
      )
      .addCase(
        thunks.addCommentToPlaylist.fulfilled,
        thunks.addCommentToPlaylistFulfilled
      )
      .addCase(
        thunks.addCommentToPlaylist.rejected,
        thunks.addCommentToPlaylistRejected
      );
  },
});

export const { setCurrentPlaylist } = playlistDetailsSlice.actions;

export const playlistDetailsReducer = playlistDetailsSlice.reducer;
