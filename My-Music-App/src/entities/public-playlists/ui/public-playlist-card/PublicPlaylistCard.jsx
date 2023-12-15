import React, { useCallback } from 'react';

import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { RiDislikeLine } from 'react-icons/ri';
import {
  PublicPlaylistCardContainer,
  PublicPlaylistCardImage,
  PublicPlaylistCardName,
  PublicPlaylistCardRating,
  PublicPlaylistCardSongs,
  PublicPlaylistCardTextWrapper,
  RatingContainer,
} from './PublicPLaylistCard.styles';

import { capitalizeWords, parseLikesDislikes } from '../../../../store/helpers';
import paths from '../../../../router/paths';
import { BiHeart } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { userPlaylistsReactionsSelector } from '../../../../store/user-playlists-reactions/user-playlists-reactions.selector';
import {
  FALLBACK_TYPES,
  IMAGE_SIZES,
} from '../../../../features/shared/ImgWrap/constants/constants';

function PublicPlaylistCard({ playlist }) {
  const navigate = useNavigate();
  const { id, name, logo, first_ten_songs, number_likes_dislikes, owner } =
    playlist;
  const { likes, dislikes } = parseLikesDislikes(number_likes_dislikes);
  const handleNavigate = useCallback(() => {
    navigate(`${paths.publicPlaylistDetails}/${id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  const userPlaylistsReactions = useSelector(userPlaylistsReactionsSelector);
  const { isLiked, isDisliked } = userPlaylistsReactions.find(
    ({ playlistId }) => playlistId === id
  ) ?? { isLiked: false, isDisliked: false };

  return (
    <PublicPlaylistCardContainer
      onClick={handleNavigate}
      className='public-playlist-card__wrapper'
    >
      <PublicPlaylistCardImage
        srcObj={logo}
        size={IMAGE_SIZES.MEDIUM}
        fallbackType={FALLBACK_TYPES.PLAYLIST}
        alt={`song preview for ${name}`}
        className='public-playlist-card__image'
      />
      <PublicPlaylistCardTextWrapper>
        <PublicPlaylistCardName className='public-playlist-card__name'>
          {name}
        </PublicPlaylistCardName>
        <p className='public-playlist-card__created-by'>
          Created by: {capitalizeWords(owner)}
        </p>
        <PublicPlaylistCardSongs data-songlist-id={`playlist-${id}-songs`}>
          {first_ten_songs.map(
            ({ id, attributes: { title, artist_name } }, index) => {
              let playlistSongsLength = first_ten_songs.length - 1;
              return (
                <span key={id} data-song-id={id}>
                  {`${title} (${artist_name.join(', ')})${
                    index === playlistSongsLength ? '' : ', '
                  }`}
                </span>
              );
            }
          )}
        </PublicPlaylistCardSongs>
      </PublicPlaylistCardTextWrapper>
      <PublicPlaylistCardRating className='public-playlist-card__rating'>
        <RatingContainer className='public-playlist-card__rating-container'>
          <div className='public-playlist-card__rating--dislike'>
            <span
              className='count'
              data-dislikes-id={`public-playlist-dislikes-${id}`}
            >
              {dislikes}
            </span>
            <div
              className={isDisliked ? 'reaction reaction__active' : 'reaction'}
            >
              <RiDislikeLine />
            </div>
          </div>
        </RatingContainer>
        <RatingContainer className='public-playlist-card__rating-container'>
          <div className='public-playlist-card__rating--like'>
            <span
              className='count'
              data-likes-id={`public-playlist-likes-${id}`}
            >
              {likes}
            </span>
            <div className={isLiked ? 'reaction reaction__active' : 'reaction'}>
              <BiHeart />
            </div>
          </div>
        </RatingContainer>
      </PublicPlaylistCardRating>
    </PublicPlaylistCardContainer>
  );
}

PublicPlaylistCard.propTypes = {
  playlist: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    logo: PropTypes.oneOfType([
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      }),
      PropTypes.oneOf([null]),
    ]),
    first_ten_songs: PropTypes.arrayOf(
      PropTypes.shape({
        attributes: PropTypes.shape({
          title: PropTypes.string.isRequired,
          artist_name: PropTypes.arrayOf(PropTypes.string.isRequired),
        }).isRequired,
      })
    ).isRequired,
    number_likes_dislikes: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
  }).isRequired,
};

export default PublicPlaylistCard;
