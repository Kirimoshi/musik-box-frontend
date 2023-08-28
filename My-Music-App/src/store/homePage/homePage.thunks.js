import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../constants";

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: "*/*",
  },
});
const endpoint = "/home_playlists";

//TODO: Redo this filter after backend team implement the correct query for slicing resopnse depending on the query
const sliceResponse = (response, num) => {
  const slicedResponse = response.data.playlists.data.filter((_, i) => i < num);
  return slicedResponse;
};

export const fetchPopularPlaylists = createAsyncThunk(
  "homePageSlice/fetchPopularPlaylists",
  async () => {
    try {
      const response = await axiosInstance.get(endpoint, {
        params: { query: "popular" },
      });
      return sliceResponse(response, 4);
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
  state.popularPlaylists = action.payload;
};
export const fetchPopularPlaylistsRejected = (state, action) => {
  state.loading = false;
  state.error = action.error.message;
};

export const fetchFeaturedPlaylists = createAsyncThunk(
  "homePageSlice/fetchFeaturedPlaylists",
  async () => {
    try {
      const response = await axiosInstance.get(endpoint, {
        params: { query: "featured" },
      });
      return sliceResponse(response, 6);
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
  state.featuredPlaylists = action.payload;
};
export const fetchFeaturedPlaylistsRejected = (state, action) => {
  state.loading = false;
  state.error = action.error.message;
};

export const fetchLatestPlaylists = createAsyncThunk(
  "homePageSlice/fetchLatestPlaylists",
  async () => {
    try {
      const response = await axiosInstance.get(endpoint, {
        params: { query: "last" },
      });
      return sliceResponse(response, 6);
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
  state.latestPlaylists = action.payload;
};
export const fetchLatestPlaylistsRejected = (state, action) => {
  state.loading = false;
  state.error = action.error.message;
};
