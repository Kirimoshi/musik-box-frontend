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
import { UPLOADS_URL } from "../../../store/constants";
import { capitalizeWords } from "../../../store/helpers";

const MAX_CHARS = 99;

function DescriptionToggle({ isExpanded, onExpand, onCollapse }) {
  return (
    <DescriptionCTA onClick={isExpanded ? onCollapse : onExpand}>
      {isExpanded ? <MdKeyboardDoubleArrowDown /> : <MdKeyboardDoubleArrowUp />}
    </DescriptionCTA>
  );
}
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
              logo,
              playlist_owner_nickname: owner,
            },
          }) => {
            const isExpanded = expandedPlaylistId === id;
            const shouldRenderDescription = description !== null;
            const hasLongDescription =
              description && description.length >= MAX_CHARS;
            const coverUrl = logo
              ? `${UPLOADS_URL}/${logo.storage}/${logo.id}`
              : require("../../../shared/assets/default_playlist_cover.jpg");

            return (
              <PlaylistCard
                $coverUrl={coverUrl}
                key={id}
                $isExpanded={isExpanded}
              >
                <CardTitle>{name}</CardTitle>
                <CardOwner>{`Created by: ${capitalizeWords(owner)}`}</CardOwner>
                <CardLike>
                  <AiOutlineHeart />
                </CardLike>
                {hasLongDescription && (
                  <DescriptionToggle
                    isExpanded={isExpanded}
                    onExpand={handleMore(id)}
                    onCollapse={handleLess}
                  />
                )}
                {shouldRenderDescription && (
                  <CardDescription $isExpanded={isExpanded}>
                    <p>{description}</p>
                  </CardDescription>
                )}
              </PlaylistCard>
            );
          }
        )}
      </PlaylistsContainer>
    </div>
  );
}

PlaylistsPopular.propTypes = {
  playlists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
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

DescriptionToggle.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
  onExpand: PropTypes.func.isRequired,
  onCollapse: PropTypes.func.isRequired,
};

export default PlaylistsPopular;
