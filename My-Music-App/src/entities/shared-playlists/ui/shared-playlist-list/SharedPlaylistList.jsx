import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { sharedPlaylistsSelector } from '../../../../store/shared-playlists/shared-playlists.selector';

import { SharedPlaylistCard } from '../shared-playlist-card/SharedPlaylistCard';

import { PublicPlaylistListContainer as SharedPlaylistListContainer } from '../../../public-playlists/ui/public-playlist-list/PublicPlaylistList.styles';

function SharedPlaylistList({ searchString }) {
  const sharedPlaylists = useSelector(sharedPlaylistsSelector);

  return (
    <SharedPlaylistListContainer className='shared-playlists__list'>
      {sharedPlaylists
        ?.filter(({ attributes: { name } }) =>
          name.toLowerCase().includes(searchString)
        )
        ?.map(
          ({
            id,
            attributes: {
              logo,
              name,
              first_ten_songs: { data },
              number_likes_dislikes,
              playlist_owner_nickname: owner,
            },
          }) => (
            <SharedPlaylistCard
              key={id}
              data-playlist-id={id}
              playlist={{
                id,
                logo,
                name,
                first_ten_songs: data,
                number_likes_dislikes,
                owner,
              }}
            />
          )
        )}
    </SharedPlaylistListContainer>
  );
}

SharedPlaylistList.propTypes = {
  searchString: PropTypes.string,
};

export default SharedPlaylistList;
