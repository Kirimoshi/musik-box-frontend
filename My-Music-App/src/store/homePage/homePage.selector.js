import { createSelector } from '@reduxjs/toolkit';

const homePageSelector = (state) => state.homePageSlice;

export const homePageLoadingSelector = createSelector(
  homePageSelector,
  (homePageSlice) => homePageSlice.loading
);

export const popularPlaylistsSelector = createSelector(
  homePageSelector,
  (homePageSlice) => homePageSlice.popularPlaylists
);

export const featuredPlaylistsSelector = createSelector(
  homePageSelector,
  (homePageSlice) => homePageSlice.featuredPlaylists
);

export const latestPlaylistsSelector = createSelector(
  homePageSelector,
  (homePageSlice) => homePageSlice.latestPlaylists
);
