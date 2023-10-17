import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PlaylistsPopular from '../../entities/main-view/ui/PlaylistsPopular';
import PlaylistsSmall from '../../entities/main-view/ui/PlaylistsSmall';
import Pagination from '../../shared/Pagination';

import {
  popularPlaylistsSelector,
  featuredPlaylistsSelector,
  latestPlaylistsSelector,
  popularPlaylistsPaginationSelector,
  featuredPlaylistsPaginationSelector,
  latestPlaylistsPaginationSelector,
  homePageLoadingSelector,
} from '../../store/homePage/homePage.selector';

import {
  fetchPopularPlaylists,
  fetchFeaturedPlaylists,
  fetchLatestPlaylists,
} from '../../store/homePage/homePage.thunks';

function Main() {
  const dispatch = useDispatch();
  const playlistsPopular = useSelector(popularPlaylistsSelector);
  const popularPagination = useSelector(popularPlaylistsPaginationSelector);
  const playlistsFeatured = useSelector(featuredPlaylistsSelector);
  const featuredPagination = useSelector(featuredPlaylistsPaginationSelector);
  const playlistsLatest = useSelector(latestPlaylistsSelector);
  const latestPagination = useSelector(latestPlaylistsPaginationSelector);
  const loading = useSelector(homePageLoadingSelector);

  // Pagination
  const handlePaginationClick = (fetcher, pagination) => (direction) => {
    dispatch(
      fetcher(direction === 'left' ? pagination.page - 1 : pagination.page + 1)
    );
  };

  // Initial fetch
  useEffect(() => {
    dispatch(fetchPopularPlaylists());
    dispatch(fetchFeaturedPlaylists());
    dispatch(fetchLatestPlaylists());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Dispatch is not a dependency, it remains unchanged from the initialization of store.

  return (
    <>
      <PlaylistsPopular
        playlists={playlistsPopular}
        className='main-view__playlists--popular'
      />
      <Pagination
        handleClick={handlePaginationClick(
          fetchPopularPlaylists,
          popularPagination
        )}
        isLeftActive={!loading && popularPagination.page > 1}
        isRightActive={
          !loading && popularPagination.page < popularPagination.last
        }
        className='main-view__pagination--popular'
      />
      <PlaylistsSmall
        subtitle='Featured'
        playlists={playlistsFeatured}
        className='main-view__playlists--featured'
      />
      <Pagination
        handleClick={handlePaginationClick(
          fetchFeaturedPlaylists,
          featuredPagination
        )}
        isLeftActive={!loading && featuredPagination.page > 1}
        isRightActive={
          !loading && featuredPagination.page < featuredPagination.last
        }
        className={'main-view__pagination--featured'}
      />
      <PlaylistsSmall
        subtitle='Latest'
        playlists={playlistsLatest}
        className='main-view__playlists--latest'
      />
      <Pagination
        handleClick={handlePaginationClick(
          fetchLatestPlaylists,
          latestPagination
        )}
        isLeftActive={!loading && latestPagination.page > 1}
        isRightActive={
          !loading && latestPagination.page < latestPagination.last
        }
        className='main-view__pagination--latest'
      />
    </>
  );
}

export default Main;
