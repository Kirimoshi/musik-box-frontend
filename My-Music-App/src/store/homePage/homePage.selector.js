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

export const popularPlaylistsPaginationSelector = createSelector(
  homePageSelector,
  (homePageSlice) => homePageSlice.popularPlaylistsPaginationData
);

export const featuredPlaylistsSelector = createSelector(
  homePageSelector,
  (homePageSlice) => homePageSlice.featuredPlaylists
);

export const featuredPlaylistsPaginationSelector = createSelector(
  homePageSelector,
  (homePageSlice) => homePageSlice.featuredPlaylistsPaginationData
);

export const latestPlaylistsSelector = createSelector(
  homePageSelector,
  (homePageSlice) => homePageSlice.latestPlaylists
);

export const latestPlaylistsPaginationSelector = createSelector(
  homePageSelector,
  (homePageSlice) => homePageSlice.latestPlaylistsPaginationData
);
