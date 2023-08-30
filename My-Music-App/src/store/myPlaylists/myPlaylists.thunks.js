import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import moment from "moment";
import { MY_PLAYLISTS_URL, PLAYLISTS_URL } from "../constants";
import { parseLikesDislikes } from "../helpers";

// Fetch page of ten My Playlist Data Thunk
export const fetchPageOfMyPlaylists = createAsyncThunk(
  "myPlaylistsSlice/fetchPageOfMyPlaylists",
  async (page, { getState }) => {
    const accessToken = getState().user.accessToken;
    try {
      const response = await axios({
        url: `${MY_PLAYLISTS_URL}?page=${page}`,
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
  state.songs = action.payload.playlists.included;
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

// Fetch single instance of My Playlist Thunk
export const fetchSingleMyPlaylist = createAsyncThunk(
  "myPlaylistsSlice/fetchSingleMyPlaylist",
  async (playlistId, { getState }) => {
    const accessToken = getState().user.accessToken;
    try {
      const response = await axios({
        url: `${PLAYLISTS_URL}/${playlistId}`,
        headers: {
          Accept: "*/*",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(
        "file: myPlaylists.thunks.js:89 ~ response.data:",
        response.data
      );
      return response.data;
    } catch (error) {
      throw error.response.data.errors;
    }
  }
);
export const fetchSingleMyPlaylistPending = (state) => {
  state.loading = true;
  state.error = null;
};
export const fetchSingleMyPlaylistFulfilled = (state, action) => {
  state.loading = false;
  const {
    data: {
      id: playlistId,
      attributes: {
        created_on: createdOnZ,
        updated_on: updatedOnZ,
        name: playlistName,
        playlist_type: playlistType,
        logo,
        description,
        number_likes_dislikes: numberLikesDislikes,
      },
    },
    included,
  } = action.payload;
  const { likes, dislikes } = parseLikesDislikes(numberLikesDislikes);
  const songs = included.filter((item) => item.type === "song");
  const ownerInfo = included.filter((item) => item.type === "user")[0];
  state.currentPlaylist.playlistInfo = {
    playlistId,
    createdOn: moment(createdOnZ).format("DD MMM YYYY"),
    updatedOn: moment(updatedOnZ).format("DD MMM YYYY"),
    playlistName,
    playlistType,
    logo,
    description,
    likes,
    dislikes,
  };
  state.currentPlaylist.ownerInfo = {
    email: ownerInfo.attributes.email,
    registerDate: moment(ownerInfo.attributes.register_date).format(
      "DD MMM YYYY"
    ),
    playlistsOwned: ownerInfo.attributes.playlists_owned,
  };
  state.currentPlaylist.songs = songs;
};
export const fetchSingleMyPlaylistRejected = (state, action) => {
  state.loading = false;
  state.error = action.error.message;
};
