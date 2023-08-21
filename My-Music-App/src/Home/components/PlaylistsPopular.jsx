import React, { useState } from "react";
import PropTypes from "prop-types";

import { AiOutlineHeart } from "react-icons/ai";
import {
  MdKeyboardDoubleArrowUp,
  MdKeyboardDoubleArrowDown,
} from "react-icons/md";
import {
  PlaylistsTitle,
  PlaylistsSubtitle,
  PlaylistsContainer,
  PlaylistCard,
  CardTitle,
  CardLike,
  CardOwner,
  CardDescription,
  DescriptionCTA,
} from "./PlaylistsPopular.styles";
import { UPLOADS_URL } from "../../store/constants";

const MAX_CHARS = 99;

function PlaylistsPopular({ playlists }) {
  const [expandedPlaylistId, setExpandedPlaylistId] = useState(null);

  const handleMore = (playlistId) => () => {
    setExpandedPlaylistId(playlistId);
  };
  const handleLess = () => {
    setExpandedPlaylistId(null);
  };

  return (
    <div>
      <PlaylistsTitle>Playlists</PlaylistsTitle>
      <PlaylistsSubtitle>Most popular</PlaylistsSubtitle>
      <PlaylistsContainer>
        {playlists?.map(
          ({
            id,
            attributes: {
              name,
              description,
              logo: { id: coverUrl, storage },
            },
          }) => (
            <PlaylistCard
              $coverUrl={`${UPLOADS_URL}/${storage}/${coverUrl}`}
              key={id}
              $isExpanded={expandedPlaylistId === id}
            >
              <CardTitle>{name}</CardTitle>
              {/* TODO: Add owner as backend team provide it */}
              <CardOwner>{`Created by: Playlist owner`}</CardOwner>
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
                <CardDescription $isExpanded={expandedPlaylistId === id}>
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

PlaylistsPopular.propTypes = {
  playlists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string,
      attributes: PropTypes.shape({
        description: PropTypes.string,
        name: PropTypes.string.isRequired,
        logo: PropTypes.shape({
          id: PropTypes.string,
          storage: PropTypes.string,
        }),
      }),
    })
  ),
};

export default PlaylistsPopular;
