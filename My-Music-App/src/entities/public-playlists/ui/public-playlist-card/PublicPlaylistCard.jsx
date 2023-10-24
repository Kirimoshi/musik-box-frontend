import React, { useCallback } from 'react';

import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { RiDislikeLine } from 'react-icons/ri';
import { AiOutlineHeart } from 'react-icons/ai';
import {
  PublicPlaylistCardContainer,
  PublicPlaylistCardImage,
  PublicPlaylistCardName,
  PublicPlaylistCardSongs,
  PublicPlaylistCardTextWrapper,
  PublicPlaylistCardLikes,
} from './PublicPLaylistCard.styles';

import { capitalizeWords } from '../../../../store/helpers';
import { parseLikesDislikes } from '../../../../store/helpers';
import constants from '../../constants/constants';
import paths from '../../../../router/paths';

function PublicPlaylistCard({ playlist }) {
  const navigate = useNavigate();
  const { id, name, logo, first_ten_songs, number_likes_dislikes, owner } =
    playlist;
  const reactions = parseLikesDislikes(number_likes_dislikes);
  const handleNavigate = useCallback(() => {
    navigate(`${paths.publicPlaylistDetails}/${id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <PublicPlaylistCardContainer
      onClick={handleNavigate}
      className='public-playlist-card__wrapper'
    >
      <PublicPlaylistCardImage
        src={
          logo
            ? constants.store_URL + logo.id
            : require('../../../../shared/assets/default_playlist_cover.jpg')
        }
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
      <PublicPlaylistCardLikes>
        <div className='count-wrapper'>
          <span
            className='count'
            data-dislikes-id={`public-playlist-dislikes-${id}`}
          >
            {reactions.dislikes}
          </span>
          <span className='btn btn-dislike'>
            <RiDislikeLine />
          </span>
        </div>
        <div className='count-wrapper'>
          <span className='count' data-likes-id={`public-playlist-likes-${id}`}>
            {reactions.likes}
          </span>
          <span className='btn btn-like'>
            <AiOutlineHeart />
          </span>
        </div>
      </PublicPlaylistCardLikes>
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
