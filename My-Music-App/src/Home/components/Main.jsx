import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import PlaylistsPopular from "./PlaylistsPopular";
import Pagination from "./Pagination";
import { MainContainer } from "./Main.styles";

import { fetchPopularPlaylists } from "../../store/homePage/homePage.thunks";
import { popularPlaylistsSelector } from "../../store/homePage/homePage.selector";

import {
  fetchPopularPlaylists,
  fetchFeaturedPlaylists,
  fetchLatestPlaylists,
} from "../../store/homePage/homePage.thunks";
import {
  popularPlaylistsSelector,
  featuredPlaylistsSelector,
  latestPlaylistsSelector,
} from "../../store/homePage/homePage.selector";
import PlaylistsSmall from "./PlaylistsSmall";

function Main() {
  const dispatch = useDispatch();
  const playlistsPopular = useSelector(popularPlaylistsSelector);
  const playlistsFeatured = useSelector(featuredPlaylistsSelector);
  const playlistsLatest = useSelector(latestPlaylistsSelector);

  useEffect(() => {
    dispatch(fetchPopularPlaylists());
    dispatch(fetchFeaturedPlaylists());
    dispatch(fetchLatestPlaylists());
  }, [dispatch]);

  // TODO: Pagination implementation will be based on additional queries to the backend
  // we will be able to send to API max number of playlists per page and page number
  const onClickLeft = () => {};
  const onClickRight = () => {};

  return (
    <>
      <MainContainer>
        <>
          <PlaylistsPopular playlists={playlistsPopular} />
          <Pagination
            onClickLeft={onClickLeft}
            onClickRight={onClickRight}
            isRightActive={true}
          />
        </>
        <>
          <PlaylistsSmall subtitle={"Featured"} playlists={playlistsFeatured} />
          <Pagination
            onClickLeft={onClickLeft}
            onClickRight={onClickRight}
            isRightActive={true}
          />
        </>
        <>
          <PlaylistsSmall subtitle={"Latest"} playlists={playlistsLatest} />
          <Pagination
            onClickLeft={onClickLeft}
            onClickRight={onClickRight}
            isRightActive={true}
          />
        </>
      </MainContainer>
    </>
  );
}

export default Main;
