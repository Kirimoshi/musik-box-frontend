import React from 'react';
import PropTypes from 'prop-types';
import { UPLOADS_URL } from '../../../../store/constants';
import { capitalizeWords } from '../../../../store/helpers';
import { TopUserCardItem } from './TopUserCard.styles';

function TopUserCard({ profilePicture, nickname, textField }) {
  const profilePictureUrl = profilePicture
    ? `${UPLOADS_URL}/${profilePicture.storage}/${profilePicture.id}`
    : require('../../../../shared/assets/default_user_avatar_small.png');
  return (
    <TopUserCardItem className='top-users-card__container'>
      <figure>
        <img
          src={profilePictureUrl}
          alt={`${nickname} avatar`}
          className='top-users-card__avatar'
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
