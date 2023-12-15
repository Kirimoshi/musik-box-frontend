import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  MdKeyboardDoubleArrowUp,
  MdKeyboardDoubleArrowDown,
} from 'react-icons/md';
import { Subtitle } from '../../../../shared/Shared.styles';
import {
  PlaylistContainer,
  PlaylistCard,
  Cover,
  CardTitle,
  CardOwner,
  CardDescription,
  DescriptionCTA,
} from './PlaylistsSmall.styles';
import { capitalizeWords } from '../../../../store/helpers';
import { getImgSrc } from '../../../../features/shared/ImgWrap/lib/getImgSrc';
import {
  FALLBACK_TYPES,
  IMAGE_SIZES,
} from '../../../../features/shared/ImgWrap/constants/constants';

const MAX_CHARS = 25;

function DescriptionToggle({ isExpanded, onExpand, onCollapse }) {
  return (
    <DescriptionCTA
      onClick={isExpanded ? onCollapse : onExpand}
      className={`playlist-card__CTA${
        isExpanded ? '--expanded' : '--collapsed'
      }`}
    >
      {isExpanded ? <MdKeyboardDoubleArrowDown /> : <MdKeyboardDoubleArrowUp />}
    </DescriptionCTA>
  );
}

function PlaylistsSmall({ playlists, subtitle, className }) {
  const [expandedPlaylistId, setExpandedPlaylistId] = useState(null);

  const handleMore = (playlistId) => () => {
    setExpandedPlaylistId(playlistId);
  };
  const handleLess = () => {
    setExpandedPlaylistId(null);
  };

  return (
    <section className={className}>
      <Subtitle>{subtitle}</Subtitle>
      <PlaylistContainer className={`${subtitle?.toLowerCase()}-playlists`}>
        {playlists?.map(
          ({
            id,
            attributes: {
              name,
              description,
              logo,
              playlist_owner_nickname: owner,
            },
          }) => {
            const isExpanded = expandedPlaylistId === id;
            const shouldRenderDescription = description !== null;
            const hasLongDescription =
              description && description.length >= MAX_CHARS;

            const coverUrl = getImgSrc(
              logo,
              FALLBACK_TYPES.PLAYLIST,
              IMAGE_SIZES.MEDIUM
            );

            return (
              <PlaylistCard
                key={id}
                $isExpanded={isExpanded}
                className={`${subtitle?.toLowerCase()}-playlists__card playlist-card`}
              >
                <Cover
                  role='img'
                  aria-label={`playlist ${name} cover`}
                  $isExpanded={isExpanded}
                  $coverUrl={coverUrl}
                  className='playlist-card__cover'
                />
                <CardTitle className='playlist-card__title'>{name}</CardTitle>
                <CardOwner className='playlist-card__owner'>
                  By: {capitalizeWords(owner)}
                </CardOwner>
                {hasLongDescription && (
                  <DescriptionToggle
                    isExpanded={isExpanded}
                    onExpand={handleMore(id)}
                    onCollapse={handleLess}
                  />
                )}
                {shouldRenderDescription && (
                  <CardDescription
                    $isExpanded={isExpanded}
                    className={`playlist-card__description${
                      isExpanded ? '--expanded' : '--collapsed'
                    }`}
                  >
                    {description}
                  </CardDescription>
                )}
              </PlaylistCard>
            );
          }
        )}
      </PlaylistContainer>
    </section>
  );
}

PlaylistsSmall.propTypes = {
  playlists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      attributes: PropTypes.shape({
        description: PropTypes.string,
        name: PropTypes.string.isRequired,
        logo: PropTypes.shape({
          id: PropTypes.string,
          storage: PropTypes.string,
        }),
      }),
    })
  ),
  subtitle: PropTypes.string.isRequired,
  className: PropTypes.string,
};
DescriptionToggle.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
  onExpand: PropTypes.func.isRequired,
  onCollapse: PropTypes.func.isRequired,
};

export default PlaylistsSmall;
