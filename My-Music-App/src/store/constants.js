export const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

export const API_URL = BASE_API_URL + '/api/v1';
export const LOGIN_URL = BASE_API_URL + '/api/v1/login';
export const REFRESH_URL = BASE_API_URL + '/api/v1/refresh';
export const LOGOUT_URL = BASE_API_URL + '/api/v1/logout';
export const MY_PLAYLISTS_URL = BASE_API_URL + '/api/v1/my/playlists';
export const PUBLIC_PLAYLIST_URL = BASE_API_URL + '/api/v1/playlists';
export const UPLOADS_URL = BASE_API_URL + '/uploads';
export const SONGS_URL = BASE_API_URL + '/api/v1/songs';

export const DEFAULT_USER_PICTURE =
  UPLOADS_URL + '/store/default_user_avatar_small.png';

export const STATE_STATUSES = {
  IDLE: 'idle',
  PROGRESS: 'progress',
  SUCCESS: 'success',
  FAILED: 'failed',
};

export const PLAYLIST_PRIVACY_TYPES = {
  PUBLIC: 'public',
  PRIVATE: 'private',
  SHARED: 'shared',
};

export const FETCH_PLAYLISTS_TYPES = {
  MY: 'my_playlists',
  PUBLIC: 'public',
  SHARED: 'shared',
};

export const FETCH_HOME_PLAYLISTS_TYPES = {
  LAST: 'last',
  POPULAR: 'popular',
  FEATURED: 'featured',
};

export const ERROR_RESPONSE_CODES = {
  UNAUTHORIZED: 401,
  UNPROCESSABLE_ENTITY: 422,
  NOT_FOUND: 404,
};

export const ERROR_RESPONSE_MESSAGES = {
  UNAUTHORIZED: '401 Unauthorized',
  UNPROCESSABLE_ENTITY: '422 Unprocessable Entity',
  NOT_FOUND: '404 Not Found',
};
