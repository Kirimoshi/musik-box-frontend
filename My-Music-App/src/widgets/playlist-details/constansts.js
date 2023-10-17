const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

export const constants = {
  playlistAPI_URL: BASE_API_URL + '/api/v1/playlists/',
  store_URL: BASE_API_URL + '/uploads/store/',
  commentMinLength: 10,
  commentMaxLength: 1000,
  timeOut: 60000,
  timerLength: 2,
};
