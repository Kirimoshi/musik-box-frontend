export const myPlaylistsSelector = (state) =>
  state.myPlaylistsSlice.myPlaylists;

export const songsSelector = (state) => state.myPlaylistsSlice.songs; // This is an array of songs, mb we dont need this

export const errorSelector = (state) => state.myPlaylistsSlice.error;
