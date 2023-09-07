export const API_URL = "http://127.0.0.1:3000/api/v1";
export const LOGIN_URL = "http://127.0.0.1:3000/api/v1/login";
export const REFRESH_URL = "http://127.0.0.1:3000/api/v1/refresh";
export const LOGOUT_URL = "http://127.0.0.1:3000/api/v1/logout";
export const MY_PLAYLISTS_URL = "http://127.0.0.1:3000/api/v1/my/playlists";
export const PUBLIC_PLAYLIST_URL = "http://127.0.0.1:3000/api/v1/playlists";
export const UPLOADS_URL = "http://127.0.0.1:3000/uploads";
export const DEFAULT_PLAYLIST_COVER =
  "http://127.0.0.1:3000/uploads/store/dfafa56c933ede4657132b7d9ee42df8.jpg";
export const USER_CRED = { displayName: "Olsheer", email: "email@.com" };

export const STATE_STATUSES = {
  IDLE: "idle",
  PROGRESS: "progress",
  SUCCESS: "success",
  FAILED: "failed",
};

export const PLAYLIST_TYPES = {
  PUBLIC: "public",
  PRIVATE: "private",
  SHARED: "shared",
};

export const FETCH_PLAYLISTS_TYPES = {
  MY: "my_playlists",
  PUBLIC: "public",
  SHARED: "shared",
};
