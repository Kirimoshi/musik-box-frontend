import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

import { Subtitle, Title } from "../Shared.styles";

import playlistData from "../../shared/mockedPlaylistData";

import { PlaylistsContainer } from "./PopularPlaylists.styles";

function PopularPlaylists() {
  console.log("file: PopularPlaylists.jsx:5 ~ playlistData:", playlistData);
  return (
    <div>
      <Title>Playlists</Title>
      <Subtitle>Most popular</Subtitle>
      <PlaylistsContainer className="_playlists-wrapper">
        <div className="_playlist" $playlistImage={"pathToMocked"}>
          <div className="_playlist__name">Playlist name</div>
          <div className="_playlist__owner">{`Created by: ${"playlist owner"}`}</div>
          <AiOutlineHeart className="_playlist__like" />
          <div className="_playlist__songs">qwe,rty,uio,asd,dfg</div>
        </div>
      </PlaylistsContainer>
    </div>
  );
}

export default PopularPlaylists;
// AiOutlineHeart
