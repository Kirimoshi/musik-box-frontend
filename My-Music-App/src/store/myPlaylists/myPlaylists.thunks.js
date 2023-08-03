import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MY_PLAYLIST_URL } from "../constants";

// Fetch My Playlist Data Thunk
export const fetchMyPlaylistData = createAsyncThunk(
  "myPlaylistsSlice/fetchMyPlaylistData",
  async (page, { getState }) => {
    const accessToken = getState().user.accessToken;

    const headersList = {
      Accept: "*/*",
      Authorization: `Bearer ${accessToken}`,
    };

    const reqOptions = {
      url: `${MY_PLAYLIST_URL}?page=${page}&include=songs`,
      method: "GET",
      headers: headersList,
    };
    try {
      const response = await axios.request(reqOptions);
      return response.data;
    } catch (error) {
      throw error.response.data.errors;
    }
  }
);
export const fetchMyPlaylistDataPending = (state) => {
  state.loading = true;
  state.error = null;
};
export const fetchMyPlaylistDataFulfilled = (state, action) => {
  state.loading = false;
  state.myPlaylists = action.payload.data;
  state.songs = action.payload.included;
};
export const fetchMyPlaylistDataRejected = (state, action) => {
  state.loading = false;
  state.error = action.error.message;
};

// Delete My Playlist Thunk
export const deleteMyPlaylist = createAsyncThunk(
  "myPlaylistsSlice/deleteMyPlaylist",
  async (playlistId, { getState }) => {
    const accessToken = getState().user.accessToken;

    const headersList = {
      Accept: "*/*",
      Authorization: `Bearer ${accessToken}`,
    };

    const reqOptions = {
      url: `${MY_PLAYLIST_URL}/${playlistId}`,
      method: "DELETE",
      headers: headersList,
    };
    try {
      const response = await axios.request(reqOptions);
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
