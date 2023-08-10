import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HOMEPAGE_ENDPOINT_URL as url } from "../constants";

export const fetchPopularPlaylists = createAsyncThunk(
  "homePageSlice/fetchPopularPlaylists",
  async () => {
    const headersList = {
      Accept: "*/*",
    };
    const reqOptions = {
      url: `${url}?query=popular`,
      method: "GET",
      headers: headersList,
    };
    try {
      const response = await axios.request(reqOptions);
      //TODO: Remove this filter after backend team implement the correct query for slicing the playlists
      const first4playlists = response.data.playlists.data.filter(
        (_, i) => i < 4
      );
      // TODO: remove this after backend team fix the seed
      first4playlists[0].attributes.description = ""; // description is empty for the first playlist
      first4playlists[1].attributes.description = // description is too long for the second playlist
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique culpa quasi voluptate sapiente aspernatur ipsa incidunt velit harum optio commodi totam adipisci magnam recusandae officiis laboriosam fugit doloribus, ratione dolorum quam iure earum! Et quo error dolor harum assumenda molestiae quia voluptatem sit facere non totam, necessitatibus sequi. Blanditiis, unde?";
      first4playlists[2].attributes.description = // desctiption exactly 99 chars for the third playlist
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similiques culpa quasis voluptate?";
      return first4playlists;
    } catch (error) {
      if (error.response.data.error) throw error.response.data.error;
      throw error.response.data.errors;
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
    const headersList = {
      Accept: "*/*",
    };
    const reqOptions = {
      url: `${url}?query=popular`, // TODO change to featured when backend team fix the seed
      method: "GET",
      headers: headersList,
    };
    try {
      const response = await axios.request(reqOptions);
      const first6playlists = response.data.playlists.data.filter(
        (_, i) => i < 6
      );
      first6playlists[0].attributes.description = "";
      first6playlists[1].attributes.description = "Lorem ipsum dolor sitea ?";
      return first6playlists; // As backend team implemented query for slice by 6 i use filter right here
    } catch (error) {
      if (error.response.data.error) throw error.response.data.error;
      throw error.response.data.errors; // Ask backend team to consistent in error object naming
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
    const headersList = {
      Accept: "*/*",
    };
    const reqOptions = {
      url: `${url}?query=last`,
      method: "GET",
      headers: headersList,
    };
    try {
      const response = await axios.request(reqOptions);
      const first6playlists = response.data.playlists.data.filter(
        (_, i) => i < 6
      );
      first6playlists[0].attributes.description = "";
      first6playlists[1].attributes.description = "Lorem ipsum dolor sitea ?";
      return first6playlists; // As backend team implemented query for slice by 6 i use filter right here
    } catch (error) {
      if (error.response.data.error) throw error.response.data.error;
      throw error.response.data.errors; // Ask backend team to consistent in error object naming
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
