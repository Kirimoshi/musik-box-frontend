import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PlaylistsPopular from '../../entities/main-view/ui/PlaylistsPopular';
import PlaylistsSmall from '../../entities/main-view/ui/PlaylistsSmall';
import Pagination from '../../shared/Pagination';

import {
  popularPlaylistsSelector,
  featuredPlaylistsSelector,
  latestPlaylistsSelector,
} from '../../store/homePage/homePage.selector';

import {
  fetchPopularPlaylists,
  fetchFeaturedPlaylists,
  fetchLatestPlaylists,
} from '../../store/homePage/homePage.thunks';

function Main() {
  const dispatch = useDispatch();
  const playlistsPopular = useSelector(popularPlaylistsSelector);
  const playlistsFeatured = useSelector(featuredPlaylistsSelector);
  const playlistsLatest = useSelector(latestPlaylistsSelector);

  useEffect(() => {
    dispatch(fetchPopularPlaylists());
    dispatch(fetchFeaturedPlaylists());
    dispatch(fetchLatestPlaylists());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Dispatch is not a dependency, it remains unchanged from the initialization of store.

  // TODO: Pagination implementation will be based on additional queries to the backend
  // we will be able to send to API max number of playlists per page and page number
  const onClickLeft = () => {};
  const onClickRight = () => {};

  return (
    <>
      <>
        <PlaylistsPopular playlists={playlistsPopular} />
        <Pagination onClickLeft={onClickLeft} onClickRight={onClickRight} />
      </>
      <>
        <PlaylistsSmall subtitle='Featured' playlists={playlistsFeatured} />
        <Pagination onClickLeft={onClickLeft} onClickRight={onClickRight} />
      </>
      <>
        <PlaylistsSmall subtitle='Latest' playlists={playlistsLatest} />
        <Pagination onClickLeft={onClickLeft} onClickRight={onClickRight} />
      </>
    </>
  );
}

export default Main;
