import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { MainContainer } from "./Main.styles";
import PlaylistsPopular from "./PlaylistsPopular";

import { fetchPopularPlaylists } from "../../store/homePage/homePage.thunks";
import { popularPlaylistsSelector } from "../../store/homePage/homePage.selector";

function Main() {
  const dispatch = useDispatch();
  const playlistsPopular = useSelector(popularPlaylistsSelector);

  useEffect(() => {
    dispatch(fetchPopularPlaylists());
  }, [dispatch]);

  return (
    <>
      <MainContainer>
        {playlistsPopular.length !== 0 && (
          <PlaylistsPopular playlists={playlistsPopular} />
        )}
      </MainContainer>
    </>
  );
}

export default Main;
