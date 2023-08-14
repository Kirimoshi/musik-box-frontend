import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { userSelector } from "../../store/user/user.selector";

import { AiOutlineHeart } from "react-icons/ai";
import {
  PlaylistsContainer,
  PlaylistCard,
  CardTitle,
  CardLike,
  CardOwner,
  CardDescription,
  CardShowMore,
  CardShowLess,
} from "./PopularPlaylists.styles";
import { Subtitle, Title } from "../Shared.styles";

const fetchFeaturedPlaylists = async (accessToken) => {
  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${accessToken}`,
  };

  let reqOptions = {
    url: "http://127.0.0.1:3000/api/v1/home_playlists?query=popular",
    method: "GET",
    headers: headersList,
  };

  let response = await axios.request(reqOptions);
  return response.data;
};

function PopularPlaylists() {
  const { isAuthenticated, accessToken } = useSelector(userSelector);

  const [playlistData, setPlaylistData] = useState(null);
  const [expandedPlaylistId, setExpandedPlaylistId] = useState(null);

  const fetchPlaylists = async () => {
    try {
      const data = await fetchFeaturedPlaylists(accessToken);
      const first4playlists = data.playlists.data.filter((_, i) => i < 4);
      setPlaylistData(first4playlists);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!isAuthenticated) return;
    fetchPlaylists();
  }, [isAuthenticated]);

  const handleMore = (playlistId) => () => {
    setExpandedPlaylistId(playlistId);
  };
  const handleLess = () => {
    setExpandedPlaylistId(null);
  };

  return (
    <div>
      <Title>Playlists</Title>
      <Subtitle>Most popular</Subtitle>
      <PlaylistsContainer className="_playlists-wrapper">
        {playlistData?.map(
          ({
            id,
            attributes: {
              name,
              description,
              first_ten_songs: { data: firstTenSongs },
              logo: { id: coverUrl, storage },
            },
            ...rest
          }) => (
            <PlaylistCard
              $coverUrl={`http://127.0.0.1:3000/uploads/${storage}/${coverUrl}`}
              className="_playlist"
              key={id}
              $isExpanded={expandedPlaylistId === id}
            >
              <CardTitle className="_playlist__name">{name}</CardTitle>
              <CardOwner className="_playlist__owner">{`Created by: Playlist owner`}</CardOwner>
              <CardLike className="_playlist__like">
                <AiOutlineHeart />
              </CardLike>
              {expandedPlaylistId === id ? (
                <CardShowLess onClick={handleLess}>Less</CardShowLess>
              ) : (
                <CardShowMore onClick={handleMore(id)}>more</CardShowMore>
              )}
              <CardDescription
                $maxLines={expandedPlaylistId === id ? 5 : 2}
                $isExpanded={expandedPlaylistId === id}
                className="_playlist__desc"
              >
                <p>{description}</p>
              </CardDescription>
            </PlaylistCard>
          )
        )}
      </PlaylistsContainer>
    </div>
  );
}

export default PopularPlaylists;
