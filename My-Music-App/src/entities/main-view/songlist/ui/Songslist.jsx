import React from 'react';
import PropTypes from 'prop-types';

import { Subtitle } from '../../../../shared/Shared.styles';
import {
  Cover,
  CardTitle,
  PlaylistContainer as SongContainer,
} from '../../playlists-small/ui/PlaylistsSmall.styles';
import { CardAuthors, SonglistCard, SonglistTitle } from './Songslist.styles';
import { getImgSrc } from '../../../../features/shared/ImgWrap/lib/getImgSrc';
import {
  FALLBACK_TYPES,
  IMAGE_SIZES,
} from '../../../../features/shared/ImgWrap/constants/constants';

function Songslist({ songs, title = '', subtitle, className }) {
  return (
    <section className={className}>
      {title && <SonglistTitle>{title}</SonglistTitle>}
      <Subtitle>{subtitle}</Subtitle>
      <SongContainer
        className={`${subtitle
          ?.toLowerCase()
          .replaceAll(/\s/g, '-')}-songlist__container`}
      >
        {songs?.map(({ id, attributes: { artists, cover, title } }) => {
          const coverUrl = getImgSrc(
            cover,
            FALLBACK_TYPES.ALBUM,
            IMAGE_SIZES.MEDIUM
          );
          return (
            <SonglistCard
              key={id}
              className={`${subtitle
                ?.toLowerCase()
                .replaceAll(/\s/g, '-')}-songslist__card songslist-card`}
            >
              <Cover
                role='img'
                aria-label={`${title} song cover`}
                $coverUrl={coverUrl}
                className='songslist-card__cover'
              />
              <CardTitle className='playlist-card__title'>{title}</CardTitle>
              <CardAuthors className={`songslist-card__authors`}>
                {artists.join(', ')}
              </CardAuthors>
            </SonglistCard>
          );
        })}
      </SongContainer>
    </section>
  );
}

Songslist.propTypes = {
  songs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      attributes: PropTypes.shape({
        artists: PropTypes.arrayOf(PropTypes.string).isRequired,
        title: PropTypes.string.isRequired,
        cover: PropTypes.oneOfType([
          PropTypes.shape({
            id: PropTypes.string.isRequired,
            storage: PropTypes.string.isRequired,
          }),
          PropTypes.oneOf([null]).isRequired,
        ]),
      }),
    })
  ),
  title: PropTypes.string,
  subtitle: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Songslist;
