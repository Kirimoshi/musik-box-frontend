import React from "react";

import { useSelector } from "react-redux";
import { isAuthenticatedSelector } from "../../../../store/user/user.selector";
import { publicPlaylistsSelector } from "../../../../store/public-playlists/public-playlists.selector";

import PublicPlaylistCard from "../public-playlist-card/PublicPlaylistCard";

import { PublicPlaylistListContainer } from "./PublicPlaylistList.styles";

function PublicPlaylistList() {
  const publicPlaylists = useSelector(publicPlaylistsSelector);
  const isAuth = useSelector(isAuthenticatedSelector);

  return (
    <PublicPlaylistListContainer>
      {publicPlaylists?.map(
        ({
          id,
          attributes: {
            logo,
            name,
            first_ten_songs: { data },
            number_likes_dislikes,
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
            }}
            isAuth={isAuth}
          />
        )
      )}
    </PublicPlaylistListContainer>
  );
}

export default PublicPlaylistList;
