import { createSelector } from "@reduxjs/toolkit";

const myPlaylistsSliceSelector = (state) => state.myPlaylistsSlice;

export const pageOfMyPlaylistsSelector = createSelector(
  myPlaylistsSliceSelector,
  (myPlaylistsSlice) => myPlaylistsSlice.myPlaylists
);

export const myPlaylistErrorSelector = createSelector(
  myPlaylistsSliceSelector,
  (myPlaylistsSlice) => myPlaylistsSlice.error
);

export const currentPlaylistSelector = createSelector(
  myPlaylistsSliceSelector,
  (myPlaylistsSlice) => myPlaylistsSlice.currentPlaylist
);
