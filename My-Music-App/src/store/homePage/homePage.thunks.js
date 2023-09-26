import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FETCH_HOME_PLAYLISTS_TYPES, PUBLIC_PLAYLIST_URL } from "../constants";

export const fetchPopularPlaylists = createAsyncThunk(
  "homePageSlice/fetchPopularPlaylists",
  async () => {
    try {
      const response = await axios({
        url: `${PUBLIC_PLAYLIST_URL}?type=${FETCH_HOME_PLAYLISTS_TYPES.POPULAR}&page=1&per_page=4`,
      });
      return {
        playlists: response.data.playlists.data,
        paginationData: response.data.pagination_metadata,
      };
    } catch ({ response: { data } }) {
      if (data.error) throw data.error;
      throw data.errors; //TODO: Ask backend team to be consistent in error object naming
    }
  }
);
export const fetchPopularPlaylistsPending = (state) => {
  state.loading = true;
  state.error = null;
};
export const fetchPopularPlaylistsFulfilled = (state, action) => {
  state.loading = false;
  state.popularPlaylists = action.payload.playlists;
  state.popularPlalistsPaginationData = action.payload.paginationData;
};
export const fetchPopularPlaylistsRejected = (state, action) => {
  state.loading = false;
  state.error = action.error.message;
};

export const fetchFeaturedPlaylists = createAsyncThunk(
  "homePageSlice/fetchFeaturedPlaylists",
  async () => {
    try {
      const response = await axios({
        url: `${PUBLIC_PLAYLIST_URL}?type=${FETCH_HOME_PLAYLISTS_TYPES.FEATURED}&page=1&per_page=6`,
      });

      return {
        playlists: response.data.playlists.data,
        paginationData: response.data.pagination_metadata,
      };
    } catch ({ response: { data } }) {
      if (data.error) throw data.error;
      throw data.errors;
    }
  }
);
export const fetchFeaturedPlaylistsPending = (state) => {
  state.loading = true;
  state.error = null;
};
export const fetchFeaturedPlaylistsFulfilled = (state, action) => {
  state.loading = false;
  state.featuredPlaylists = action.payload.playlists;
  state.featuredPlaylistsPaginationData = action.payload.paginationData;
};
export const fetchFeaturedPlaylistsRejected = (state, action) => {
  state.loading = false;
  state.error = action.error.message;
};

export const fetchLatestPlaylists = createAsyncThunk(
  "homePageSlice/fetchLatestPlaylists",
  async () => {
    try {
      const response = await axios({
        url: `${PUBLIC_PLAYLIST_URL}?type=${FETCH_HOME_PLAYLISTS_TYPES.LAST}&page=1&per_page=6`,
      });
      return {
        playlists: response.data.playlists.data,
        paginationData: response.data.pagination_metadata,
      };
    } catch ({ response: { data } }) {
      if (data.error) throw data.error;
      throw data.errors;
    }
  }
);
export const fetchLatestPlaylistsPending = (state) => {
  state.loading = true;
  state.error = null;
};
export const fetchLatestPlaylistsFulfilled = (state, action) => {
  state.loading = false;
  state.latestPlaylists = action.payload.playlists;
  state.latestPlaylistsPaginationData = action.payload.paginationData;
};
export const fetchLatestPlaylistsRejected = (state, action) => {
  state.loading = false;
  state.error = action.error.message;
};
