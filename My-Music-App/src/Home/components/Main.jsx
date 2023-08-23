import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import PlaylistsPopular from "./PlaylistsPopular";
import Pagination from "./Pagination";
import { MainContainer } from "./Main.styles";

import { fetchPopularPlaylists } from "../../store/homePage/homePage.thunks";
import { popularPlaylistsSelector } from "../../store/homePage/homePage.selector";

function Main() {
  const dispatch = useDispatch();
  const playlistsPopular = useSelector(popularPlaylistsSelector);

  useEffect(() => {
    dispatch(fetchPopularPlaylists());
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
      </MainContainer>
    </>
  );
}

export default Main;
