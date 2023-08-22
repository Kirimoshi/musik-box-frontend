import { createSlice } from "@reduxjs/toolkit";
import * as thunks from "./homePage.thunks";

const initialState = {
  loading: false,
  error: null,
  popularPlaylists: [],
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
      );
  },
});

export const { setPopularPlaylists } = homePageSlice.actions;
export const homePageReducer = homePageSlice.reducer;
