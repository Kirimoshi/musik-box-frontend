import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  FETCH_PLAYLISTS_TYPES,
  MY_PLAYLISTS_URL,
  PUBLIC_PLAYLIST_URL,
} from '../constants';
import { formatDateDDmmmYYYY, parseLikesDislikes } from '../helpers';

export const fetchPlaylistDetails = createAsyncThunk(
  'playlistDetailsSlice/fetchPlaylistDetails',
  async ({ playlistId, playlistTypeToDisplay }, { getState }) => {
    const accessToken = getState().user.accessToken;
    try {
      if (playlistTypeToDisplay === FETCH_PLAYLISTS_TYPES.MY) {
        const response = await axios({
          url: `${PUBLIC_PLAYLIST_URL}/${playlistId}`,
          headers: {
            Accept: '*/*',
            Authorization: `Bearer ${accessToken}`,
          },
        });
        return response.data;
      }
      if (playlistTypeToDisplay === FETCH_PLAYLISTS_TYPES.PUBLIC) {
        const response = await axios({
          url: `${PUBLIC_PLAYLIST_URL}/${playlistId}`,
          headers: {
            Accept: '*/*',
          },
        });
        return response.data;
      }
      if (playlistTypeToDisplay === FETCH_PLAYLISTS_TYPES.SHARED) {
        const response = await axios({
          url: `${PUBLIC_PLAYLIST_URL}/${playlistId}`,
          headers: {
            Accept: '*/*',
            Authorization: `Bearer ${accessToken}`,
          },
        });
        return response.data;
      }
      throw new Error('Unknown playlist type');
    } catch (error) {
      throw error.response.data.errors;
    }
  }
);
export const fetchPlaylistDetailsPending = (state) => {
  state.loading = true;
  state.error = null;
};
export const fetchPlaylistDetailsFulfilled = (state, action) => {
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
  const songs = included.filter((item) => item.type === 'song');
  const ownerInfo = included.filter((item) => item.type === 'user')[0];
  state.playlistDetails.playlistInfo = {
    playlistId,
    createdOn: formatDateDDmmmYYYY(createdOnZ),
    updatedOn: formatDateDDmmmYYYY(updatedOnZ),
    playlistName,
    playlistType,
    logo,
    description,
    likes,
    dislikes,
  };
  state.playlistDetails.ownerInfo = {
    email: ownerInfo.attributes.email,
    registerDate: formatDateDDmmmYYYY(ownerInfo.attributes.register_date),
    playlistsOwned: ownerInfo.attributes.playlists_number,
  };
  state.playlistDetails.songs = songs;
};
export const fetchPlaylistDetailsRejected = (state, action) => {
  state.loading = false;
  state.error = action.error.message;
};

/**
 * @desc Changing playlist type alowed only for authorized users
 * @param {string} newPlaylistType - new playlist type from const PLAYLIST_PRIVACY_TYPES
 */
export const changePlaylistType = createAsyncThunk(
  'playlistDetailsSlice/changePlaylistType',
  async (newPlaylistType, { getState }) => {
    const accessToken = getState().user.accessToken;
    const playlistId =
      getState().playlistDetailsSlice.playlistDetails.playlistInfo.playlistId;
    try {
      const response = await axios({
        url: `${MY_PLAYLISTS_URL}/${playlistId}/playlist_type?playlist_type=${newPlaylistType}`,
        method: 'PUT',
        headers: {
          Accept: '*/*',
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return {
        newPlaylistType: response.data.data.attributes.playlist_type,
      };
    } catch (error) {
      if (error.response.status === 422)
        throw new Error('422 Unprocessable Entity');

      throw error.response.data.errors;
    }
  }
);
export const changePlaylistTypePending = (state) => {
  state.loading = true;
  state.error = null;
};
export const changePlaylistTypeFulfilled = (state, action) => {
  state.loading = false;
  state.playlistDetails.playlistInfo.playlistType =
    action.payload.newPlaylistType;
};
export const changePlaylistTypeRejected = (state, action) => {
  state.loading = false;
  state.error = action.error.message;
};

export const deleteSongFromPlaylist = createAsyncThunk(
  'playlistDetailsSlice/deleteSongFromPlaylist',
  async (idSongToDelete, { getState }) => {
    const accessToken = getState().user.accessToken;
    const playlistId =
      getState().playlistDetailsSlice.playlistDetails.playlistInfo.playlistId;
    try {
      const response = await axios({
        url: `${MY_PLAYLISTS_URL}/${playlistId}/playlist_songs/${idSongToDelete}`,
        method: 'DELETE',
        headers: {
          Accept: '*/*',
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return { data: response.data, idSongToDelete };
    } catch (error) {
      throw error.response.data.errors;
    }
  }
);
export const deleteSongFromPlaylistPending = (state) => {
  state.loading = true;
  state.error = null;
};
export const deleteSongFromPlaylistFulfilled = (state, action) => {
  state.loading = false;
  state.playlistDetails.songs = state.playlistDetails.songs.filter(
    //If all OK, no need to refetch fetchPlaylistDetails, just delete same song from state
    (song) => song.id !== action.payload.idSongToDelete
  );
};
export const deleteSongFromPlaylistRejected = (state, action) => {
  state.loading = false;
  state.error = action.error.message;
};
