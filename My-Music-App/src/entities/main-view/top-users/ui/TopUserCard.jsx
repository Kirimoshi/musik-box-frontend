import React from 'react';
import PropTypes from 'prop-types';
import { capitalizeWords } from '../../../../store/helpers';
import { TopUserCardItem } from './TopUserCard.styles';
import ImgWrap from '../../../../features/shared/ImgWrap/ui/ImgWrap';
import {
  FALLBACK_TYPES,
  IMAGE_SIZES,
} from '../../../../features/shared/ImgWrap/constants/constants';

function TopUserCard({ profilePicture, nickname, textField }) {
  return (
    <TopUserCardItem className='top-users-card__container'>
      <figure>
        <ImgWrap
          srcObj={profilePicture}
          alt={`${nickname} avatar`}
          className='top-users-card__avatar'
          fallbackType={FALLBACK_TYPES.USER}
          size={IMAGE_SIZES.MICRO}
        />

        <figcaption className='top-users-card__text-container'>
          <h5 className='top-users-card__nickname'>
            {nickname && capitalizeWords(nickname)}
          </h5>
          <p className='top-users-card__text-filed'>{textField}</p>
        </figcaption>
      </figure>
    </TopUserCardItem>
  );
}

TopUserCard.propTypes = {
  profilePicture: PropTypes.oneOfType([
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      storage: PropTypes.string.isRequired,
    }),
    PropTypes.oneOf([null]),
  ]),
  nickname: PropTypes.string.isRequired,
  textField: PropTypes.string.isRequired,
};

export default TopUserCard;
