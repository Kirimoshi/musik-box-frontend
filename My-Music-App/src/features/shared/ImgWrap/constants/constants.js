export const DEFAULT_USER_AVATAR = {
  AVIF: require('../../../../shared/assets/user-avatar/user-avatar.avif'),
  WEBP: require('../../../../shared/assets/user-avatar/user-avatar.webp'),
  JPG: require('../../../../shared/assets/user-avatar/user-avatar.jpg'),
  PNG: require('../../../../shared/assets/user-avatar/user-avatar.png'),
};

export const DEFAULT_PLAYLIST_COVER = {
  AVIF: require('../../../../shared/assets/playlist-cover/playlist-cover.avif'),
  WEBP: require('../../../../shared/assets/playlist-cover/playlist-cover.webp'),
  JPG: require('../../../../shared/assets/playlist-cover/playlist-cover.jpg'),
  PNG: require('../../../../shared/assets/playlist-cover/playlist-cover.png'),
};

export const DEFAULT_ALBUM_COVER = {
  AVIF: require('../../../../shared/assets/album-cover/album-cover.avif'),
  WEBP: require('../../../../shared/assets/album-cover/album-cover.webp'),
  JPG: require('../../../../shared/assets/album-cover/album-cover.jpg'),
  PNG: require('../../../../shared/assets/album-cover/album-cover.png'),
};

export const UNKNOWN_PICTURE_TYPE = {
  JPG: require('../../../../shared/assets/unknown-picture-type.jpg'),
};

/**
 * @description Image sizes for different types of images
 * @prop {string} ORIGINAL - original image size
 * @prop {string} LARGE - large image size
 * @prop {string} MEDIUM - medium image size
 * @prop {string} SMALL - small image size,
 * @prop {string} MICRO - thumbnail image size, exist for avatar only
 */
export const IMAGE_SIZES = {
  ORIGINAL: 'original', // TODO: implement as ID
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
  MICRO: 'micro', // exist for avatar only
};

/**
 * @description Fallback types for different types of images
 * @prop {string} PLAYLIST - playlist image fallback type
 * @prop {string} ALBUM - album image fallback type
 * @prop {string} USER - user image fallback type
 */
export const FALLBACK_TYPES = {
  PLAYLIST: 'playlist',
  ALBUM: 'album',
  USER: 'user',
};
