export const myPlaylistsSelector = (state) =>
  state.myPlaylistsSlice.myPlaylists;

export const songsSelector = (state) => state.myPlaylistsSlice.songs;

export const errorSelector = (state) => state.myPlaylistsSlice.error;
