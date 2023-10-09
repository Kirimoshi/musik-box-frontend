import React from 'react';

import { useSelector } from 'react-redux';
import { publicPlaylistsSelector } from '../../../../store/public-playlists/public-playlists.selector';

import PublicPlaylistCard from '../public-playlist-card/PublicPlaylistCard';

import { PublicPlaylistListContainer } from './PublicPlaylistList.styles';

function PublicPlaylistList() {
  const publicPlaylists = useSelector(publicPlaylistsSelector);

  return (
    <PublicPlaylistListContainer className='public-playlists__list'>
      {publicPlaylists?.map(
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
          <PublicPlaylistCard
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
    </PublicPlaylistListContainer>
  );
}

export default PublicPlaylistList;
