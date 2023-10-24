import React, { useCallback } from 'react';

import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { RiDislikeLine } from 'react-icons/ri';
import { AiOutlineHeart } from 'react-icons/ai';
import {
  PublicPlaylistCardContainer as SharedPlaylistCardContainer,
  PublicPlaylistCardImage as SharedPlaylistCardImage,
  PublicPlaylistCardLikes as SharedPlaylistCardLikes,
  PublicPlaylistCardName as SharedPlaylistCardName,
  PublicPlaylistCardSongs as SharedPlaylistCardSongs,
  PublicPlaylistCardTextWrapper as SharedPlaylistCardTextWrapper,
} from '../../../public-playlists/ui/public-playlist-card/PublicPLaylistCard.styles';

import { capitalizeWords, parseLikesDislikes } from '../../../../store/helpers';
import constants from '../../../public-playlists/constants/constants';
import paths from '../../../../router/paths';

export function SharedPlaylistCard({ playlist }) {
  const navigate = useNavigate();
  const { id, name, logo, first_ten_songs, number_likes_dislikes, owner } =
    playlist;
  const reactions = parseLikesDislikes(number_likes_dislikes);
  const handleNavigate = useCallback(() => {
    navigate(`${paths.sharedPlaylistDetails}/${id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <SharedPlaylistCardContainer
      onClick={handleNavigate}
      className='shared-playlist-card__wrapper'
    >
      <SharedPlaylistCardImage
        src={
          logo
            ? constants.store_URL + logo.id
            : require('../../../../shared/assets/default_playlist_cover.jpg')
        }
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
      <SharedPlaylistCardLikes>
        <div className='count-wrapper'>
          <span
            className='count'
            data-dislikes-id={`shared-playlist-dislikes-${id}`}
          >
            {reactions.dislikes}
          </span>
          <span className='btn btn-dislike'>
            <RiDislikeLine />
          </span>
        </div>
        <div className='count-wrapper'>
          <span className='count' data-likes-id={`shared-playlist-likes-${id}`}>
            {reactions.likes}
          </span>
          <span className='btn btn-like'>
            <AiOutlineHeart />
          </span>
        </div>
      </SharedPlaylistCardLikes>
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
