import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { IMAGE_SIZES } from '../constants/constants';
import {
  ENABLE_LOCAL_API,
  IMAGE_PREFIX,
  UPLOADS_URL,
} from '../../../../store/constants';
import DefaultImg from './DefaultImg';

/**
 * Image wrapper component, to be used with srcObj from backend instead <img> tag
 *
 * @param {Object | null} srcObj Image object from backend in form `{ id: 'id', storage: 'storage', derivatives: { small: 'url', medium: 'url', large: 'url', micro?: 'url' } }`
 * @param {String} fallbackType Fallback image type, plz use `FALLBACK_TYPES` from `constants`
 * @param {String} size Image size to be used, default is `IMAGE_SIZES.ORIGINAL`, plz use `IMAGE_SIZES` from `constants`
 * @param {String} alt Alt text for image
 * @param {Object} props Props to be passed to `<img>` tag, like `{ className: 'my-class'}`
 *
 *
 * @returns `<img>` tag with specified size src or DefaultImg component
 */
function ImgWrap({
  srcObj,
  fallbackType,
  size = IMAGE_SIZES.ORIGINAL,
  alt,
  ...props
}) {
  const [imgSrc, setImgSrc] = useState(null);
  const [loadingError, setLoadingError] = useState(false);

  useEffect(() => {
    if (!srcObj) {
      setLoadingError(true);
      return;
    }

    setLoadingError(false);
    const { id, storage, derivatives } = srcObj;

    if (ENABLE_LOCAL_API && id && storage) {
      setImgSrc(`${UPLOADS_URL}/${storage}/${id}`);
      return;
    }

    const newDerivatives = { ...derivatives, [IMAGE_SIZES.ORIGINAL]: id };
    if (!derivatives[IMAGE_SIZES.MICRO])
      newDerivatives[IMAGE_SIZES.MICRO] = derivatives[IMAGE_SIZES.SMALL];

    setImgSrc(IMAGE_PREFIX + '/' + newDerivatives[size]);
  }, [fallbackType, size, srcObj]);

  const handleLoadingError = (e) => {
    setLoadingError(true);
    e.target.onerror = null;
  };

  if (imgSrc && !loadingError) {
    return (
      <img
        src={imgSrc}
        alt={!!alt ? alt : ''}
        onError={handleLoadingError}
        {...props}
      />
    );
  }

  if (!imgSrc || loadingError) {
    return <DefaultImg fallbackType={fallbackType} alt={alt} {...props} />;
  }
}

ImgWrap.propTypes = {
  srcObj: PropTypes.object,
  size: PropTypes.string,
  fallbackType: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default ImgWrap;
