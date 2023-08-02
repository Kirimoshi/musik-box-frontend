import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  myPlaylists: [],
  songs: [],
};

export const myPlaylistsSlice = createSlice({
  name: "myPlaylistsSlice",
  initialState: INITIAL_STATE,
  reducers: {
    setMyPlaylists: (state, action) => {
      state.myPlaylists = action.payload;
    },
    setSongs: (state, action) => {
      state.songs = action.payload;
    },
  },
});

export const { setMyPlaylists, setSongs } = myPlaylistsSlice.actions;

export const myPlaylistsReducer = myPlaylistsSlice.reducer;
