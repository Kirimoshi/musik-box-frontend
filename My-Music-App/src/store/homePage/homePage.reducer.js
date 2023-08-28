import { createSlice } from "@reduxjs/toolkit";
import * as thunks from "./homePage.thunks";

const initialState = {
  loading: false,
  error: null,
  popularPlaylists: [],
  featuredPlaylists: [],
  latestPlaylists: [],
};

export const homePageSlice = createSlice({
  name: "homePageSlice",
  initialState: initialState,
  reducers: {
    setPopularPlaylists: (state, action) => {
      state.popularPlaylists = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        thunks.fetchPopularPlaylists.pending,
        thunks.fetchPopularPlaylistsPending
      )
      .addCase(
        thunks.fetchPopularPlaylists.fulfilled,
        thunks.fetchPopularPlaylistsFulfilled
      )
      .addCase(
        thunks.fetchPopularPlaylists.rejected,
        thunks.fetchPopularPlaylistsRejected
      )
      .addCase(
        thunks.fetchFeaturedPlaylists.pending,
        thunks.fetchFeaturedPlaylistsPending
      )
      .addCase(
        thunks.fetchFeaturedPlaylists.fulfilled,
        thunks.fetchFeaturedPlaylistsFulfilled
      )
      .addCase(
        thunks.fetchFeaturedPlaylists.rejected,
        thunks.fetchFeaturedPlaylistsRejected
      )
      .addCase(
        thunks.fetchLatestPlaylists.pending,
        thunks.fetchLatestPlaylistsPending
      )
      .addCase(
        thunks.fetchLatestPlaylists.fulfilled,
        thunks.fetchLatestPlaylistsFulfilled
      )
      .addCase(
        thunks.fetchLatestPlaylists.rejected,
        thunks.fetchLatestPlaylistsRejected
      );
  },
});

export const { setPopularPlaylists } = homePageSlice.actions;
export const homePageReducer = homePageSlice.reducer;
