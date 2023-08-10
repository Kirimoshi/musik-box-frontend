import { createSelector } from "@reduxjs/toolkit";

const homePageSelector = (state) => state.homePageSlice;

export const homePageLoadingSelector = createSelector(
  homePageSelector,
  (homePageSlice) => homePageSlice.loading
);

export const popularPlaylistsSelector = createSelector(
  homePageSelector,
  (homePageSlice) => homePageSlice.popularPlaylists
);

export const featuredPlaylistsSelector = (state) =>
  state.homePageSlice.featuredPlaylists;

export const latestPlaylistsSelector = (state) =>
  state.homePageSlice.latestPlaylists;
