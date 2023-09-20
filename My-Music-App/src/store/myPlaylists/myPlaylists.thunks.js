import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FETCH_PLAYLISTS_TYPES, MY_PLAYLISTS_URL } from "../constants";

// Fetch page of ten My Playlist Data Thunk
export const fetchPageOfMyPlaylists = createAsyncThunk(
  "myPlaylistsSlice/fetchPageOfMyPlaylists",
  async (page, { getState }) => {
    const accessToken = getState().user.accessToken;
    try {
      const response = await axios({
        url: `${MY_PLAYLISTS_URL}?playlist_type=${FETCH_PLAYLISTS_TYPES.MY}&page=${page}`,
        headers: {
          Accept: "*/*",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error.response.data.errors;
    }
  }
);
export const fetchPageOfMyPlaylistsPending = (state) => {
  state.loading = true;
  state.error = null;
};
export const fetchPageOfMyPlaylistsFulfilled = (state, action) => {
  state.loading = false;
  state.myPlaylists = action.payload.playlists.data;
};
export const fetchPageOfMyPlaylistsRejected = (state, action) => {
  state.loading = false;
  state.error = action.error.message;
};

// Delete My Playlist Thunk
export const deleteMyPlaylist = createAsyncThunk(
  "myPlaylistsSlice/deleteMyPlaylist",
  async (playlistId, { getState }) => {
    const accessToken = getState().user.accessToken;

    try {
      const response = await axios({
        url: `${MY_PLAYLISTS_URL}/${playlistId}`,
        method: "DELETE",
        headers: {
          Accept: "*/*",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return { data: response.data, playlistId };
    } catch (error) {
      throw error.response.data.errors;
    }
  }
);
export const deleteMyPlaylistPending = (state) => {
  state.loading = true;
  state.error = null;
};
export const deleteMyPlaylistFulfilled = (state, action) => {
  state.loading = false;

  state.myPlaylists = state.myPlaylists.filter(
    (playlist) => playlist.id !== action.payload.playlistId
  );
};
export const deleteMyPlaylistRejected = (state, action) => {
  state.loading = false;
  state.error = action.error.message;
};
