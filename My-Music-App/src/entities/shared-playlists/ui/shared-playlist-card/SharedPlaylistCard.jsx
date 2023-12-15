import React, { useCallback } from 'react';

import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { RiDislikeLine } from 'react-icons/ri';
import {
  PublicPlaylistCardContainer as SharedPlaylistCardContainer,
  PublicPlaylistCardImage as SharedPlaylistCardImage,
  PublicPlaylistCardName as SharedPlaylistCardName,
  PublicPlaylistCardRating as SharedPlaylistCardRating,
  PublicPlaylistCardSongs as SharedPlaylistCardSongs,
  PublicPlaylistCardTextWrapper as SharedPlaylistCardTextWrapper,
  RatingContainer,
} from '../../../public-playlists/ui/public-playlist-card/PublicPLaylistCard.styles';

import { capitalizeWords, parseLikesDislikes } from '../../../../store/helpers';
import paths from '../../../../router/paths';
import { BiHeart } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { userPlaylistsReactionsSelector } from '../../../../store/user-playlists-reactions/user-playlists-reactions.selector';
import {
  FALLBACK_TYPES,
  IMAGE_SIZES,
} from '../../../../features/shared/ImgWrap/constants/constants';

export function SharedPlaylistCard({ playlist }) {
  const navigate = useNavigate();
  const { id, name, logo, first_ten_songs, number_likes_dislikes, owner } =
    playlist;
  const { likes, dislikes } = parseLikesDislikes(number_likes_dislikes);
  const handleNavigate = useCallback(() => {
    navigate(`${paths.sharedPlaylistDetails}/${id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  const userPlaylistsReactions = useSelector(userPlaylistsReactionsSelector);
  const { isLiked, isDisliked } = userPlaylistsReactions.find(
    ({ playlistId }) => playlistId === id
  ) ?? { isLiked: false, isDisliked: false };

  return (
    <SharedPlaylistCardContainer
      onClick={handleNavigate}
      className='shared-playlist-card__wrapper'
    >
      <SharedPlaylistCardImage
        srcObj={logo}
        size={IMAGE_SIZES.MEDIUM}
        fallbackType={FALLBACK_TYPES.PLAYLIST}
        alt={`song preview for ${name}`}
        className='shared-playlist-card__image'
      />
      <SharedPlaylistCardTextWrapper>
        <SharedPlaylistCardName className='shared-playlist-card__name'>
          {name}
        </SharedPlaylistCardName>
        <p className='shared-playlist-card__created-by'>
          Created by: {capitalizeWords(owner)}
        </p>
        <SharedPlaylistCardSongs data-songlist-id={`playlist-${id}-songs`}>
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
        </SharedPlaylistCardSongs>
      </SharedPlaylistCardTextWrapper>
      <SharedPlaylistCardRating className='shared-playlist-card__rating'>
        <RatingContainer className='shared-playlist-card__rating-container'>
          <div className='shared-playlist-card__rating--dislike'>
            <span
              className='count'
              data-dislikes-id={`shared-playlist-dislikes-${id}`}
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
        <RatingContainer className='shared-playlist-card__rating-container'>
          <div className='shared-playlist-card__rating--like'>
            <span
              className='count'
              data-likes-id={`shared-playlist-likes-${id}`}
            >
              {likes}
            </span>
            <div className={isLiked ? 'reaction reaction__active' : 'reaction'}>
              <BiHeart />
            </div>
          </div>
        </RatingContainer>
      </SharedPlaylistCardRating>
    </SharedPlaylistCardContainer>
  );
}

SharedPlaylistCard.propTypes = {
  playlist: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    logo: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
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
