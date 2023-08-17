import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { popularPlaylistsSelector } from "../../store/homePage/homePage.selector";

import { AiOutlineHeart } from "react-icons/ai";
import {
  MdKeyboardDoubleArrowUp,
  MdKeyboardDoubleArrowDown,
} from "react-icons/md";
import {
  PlaylistsContainer,
  PlaylistCard,
  CardTitle,
  CardLike,
  CardOwner,
  CardDescription,
  DescriptionCTA,
} from "./PopularPlaylists.styles";
import { Subtitle, Title } from "../Shared.styles";

import { fetchPopularPlaylists } from "../../store/homePage/homePage.thunks";

const MAX_CHARS = 99;

function PopularPlaylists() {
  const dispatch = useDispatch();
  const playlistData = useSelector(popularPlaylistsSelector);
  const [expandedPlaylistId, setExpandedPlaylistId] = useState(null);

  useEffect(() => {
    if (playlistData.length === 0) dispatch(fetchPopularPlaylists());
  }, [dispatch, playlistData]);

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

              logo: { id: coverUrl, storage },
            },
          }) => (
            <PlaylistCard
              $coverUrl={`http://127.0.0.1:3000/uploads/${storage}/${coverUrl}`}
              key={id}
              $isExpanded={expandedPlaylistId === id}
            >
              <CardTitle>{name}</CardTitle>
              {/* TODO: Add owner as backend team provide it */}
              <CardOwner>{`Created by: Playlist owner`}</CardOwner>{" "}
              <CardLike>
                <AiOutlineHeart />
              </CardLike>
              {expandedPlaylistId !== id && description.length >= MAX_CHARS && (
                <DescriptionCTA onClick={handleMore(id)}>
                  <MdKeyboardDoubleArrowUp />
                </DescriptionCTA>
              )}
              {expandedPlaylistId === id && description.length >= MAX_CHARS && (
                <DescriptionCTA onClick={handleLess}>
                  <MdKeyboardDoubleArrowDown />
                </DescriptionCTA>
              )}
              {description.length !== 0 && (
                <CardDescription
                  $isExpanded={expandedPlaylistId === id}
                  className="_playlist__desc"
                >
                  <p>{description}</p>
                </CardDescription>
              )}
            </PlaylistCard>
          )
        )}
      </PlaylistsContainer>
    </div>
  );
}

export default PopularPlaylists;
