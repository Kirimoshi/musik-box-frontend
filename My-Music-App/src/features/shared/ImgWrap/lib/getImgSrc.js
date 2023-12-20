import {
  ENABLE_LOCAL_API,
  IMAGE_PREFIX,
  UPLOADS_URL,
} from '../../../../store/constants';
import {
  DEFAULT_ALBUM_COVER,
  DEFAULT_PLAYLIST_COVER,
  DEFAULT_USER_AVATAR,
  FALLBACK_TYPES,
  IMAGE_SIZES,
  UNKNOWN_PICTURE_TYPE,
} from '../constants/constants';

/**
 * This function returns fallback image source based on the passed fallback type
 * to be used in background-image css property or any property that accepts image source
 * @param {String} fallbackType Fallback image type, plz use `FALLBACK_TYPES` from `constants`
 * @returns {String} Image url
 */
const getFallbackSrc = (fallbackType) => {
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
  return fallbackSrc;
};

/**
 * This function returns image source based on the passed object
 * to be used in background-image css property or any property that accepts image source
 *
 * @param {Object | null} srcObj Image object from backend in form `{ id: 'id', storage: 'storage', derivatives: { small: 'url', medium: 'url', large: 'url', micro?: 'url' } }`
 * @param {String} fallbackType Fallback image type, plz use `FALLBACK_TYPES` from `constants`
 * @param {String} size Image size to be used, default is `IMAGE_SIZES.ORIGINAL`, plz use `IMAGE_SIZES` from `constants`
 * @returns {String} Image url
 */
export const getImgSrc = (
  srcObj,
  fallbackType,
  size = IMAGE_SIZES.ORIGINAL
) => {
  if (!srcObj) {
    return getFallbackSrc(fallbackType).JPG;
  }

  const { id, storage, derivatives } = srcObj;

  if (ENABLE_LOCAL_API && id && storage)
    return `${UPLOADS_URL}/${storage}/${id}`;

  const newDerivatives = { ...derivatives, [IMAGE_SIZES.ORIGINAL]: id };
  if (!derivatives[IMAGE_SIZES.MICRO])
    newDerivatives[IMAGE_SIZES.MICRO] = derivatives[IMAGE_SIZES.SMALL];

  return IMAGE_PREFIX + '/' + newDerivatives[size];
};
