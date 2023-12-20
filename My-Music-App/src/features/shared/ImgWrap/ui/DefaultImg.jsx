import React from 'react';
import PropTypes from 'prop-types';
import {
  DEFAULT_ALBUM_COVER,
  DEFAULT_PLAYLIST_COVER,
  DEFAULT_USER_AVATAR,
  FALLBACK_TYPES,
  UNKNOWN_PICTURE_TYPE,
} from '../constants/constants';

/**
 * Default image component
 *
 * @param {String} fallbackType - type of fallback image, plz use `FALLBACK_TYPES` constant
 * @param {String} alt - alt text
 * @param {Object} props - props to pass to `<img>` tag
 * @returns Default image of fallbackType
 */
function DefaultImg({ fallbackType, alt, ...props }) {
  let fallbackSrc;

  switch (fallbackType) {
    case FALLBACK_TYPES.USER:
      fallbackSrc = DEFAULT_USER_AVATAR;
      break;
    case FALLBACK_TYPES.ALBUM:
      fallbackSrc = DEFAULT_ALBUM_COVER;
      break;
    case FALLBACK_TYPES.PLAYLIST:
      fallbackSrc = DEFAULT_PLAYLIST_COVER;
      break;
    default:
      fallbackSrc = UNKNOWN_PICTURE_TYPE;
  }

  return <img src={fallbackSrc.JPG} alt={alt ? alt : ''} {...props} />;
}

DefaultImg.propTypes = {
  fallbackType: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default DefaultImg;
