import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  MdKeyboardDoubleArrowUp,
  MdKeyboardDoubleArrowDown,
} from "react-icons/md";
import { Subtitle } from "../../../shared/Shared.styles";
import {
  PlaylistContainer,
  PlaylistCard,
  Cover,
  CardTitle,
  CardOwner,
  CardDescription,
  DescriptionCTA,
} from "./PlaylistsSmall.styles";
import { DEFAULT_PLAYLIST_COVER, UPLOADS_URL } from "../../../store/constants";

const MAX_CHARS = 25;

function DescriptionToggle({ isExpanded, onExpand, onCollapse }) {
  return (
    <DescriptionCTA onClick={isExpanded ? onCollapse : onExpand}>
      {isExpanded ? <MdKeyboardDoubleArrowDown /> : <MdKeyboardDoubleArrowUp />}
    </DescriptionCTA>
  );
}

function PlaylistsSmall({ playlists, subtitle }) {
  const [expandedPlaylistId, setExpandedPlaylistId] = useState(null);

  const handleMore = (playlistId) => () => {
    setExpandedPlaylistId(playlistId);
  };
  const handleLess = () => {
    setExpandedPlaylistId(null);
  };

  return (
    <div>
      <Subtitle>{subtitle}</Subtitle>
      <PlaylistContainer data-test-name="cards wraper">
        {playlists?.map(({ id, attributes: { name, description, logo } }) => {
          const isExpanded = expandedPlaylistId === id;
          const shouldRenderDescription = description !== null;
          const hasLongDescription =
            description && description.length >= MAX_CHARS;
          const coverUrl = logo
            ? `${UPLOADS_URL}/${logo.storage}/${logo.id}`
            : require("../../../shared/assets/default_playlist_cover.jpg");

          return (
            <PlaylistCard key={id} $isExpanded={isExpanded}>
              <Cover
                role="img"
                aria-label={`playlist ${name} cover`}
                $isExpanded={isExpanded}
                $coverUrl={coverUrl}
              />
              <CardTitle>{name}</CardTitle>
              <CardOwner>By: {`Owner`}</CardOwner>
              {hasLongDescription && (
                <DescriptionToggle
                  isExpanded={isExpanded}
                  onExpand={handleMore(id)}
                  onCollapse={handleLess}
                />
              )}
              {shouldRenderDescription && (
                <CardDescription $isExpanded={isExpanded}>
                  {description}
                </CardDescription>
              )}
            </PlaylistCard>
          );
        })}
      </PlaylistContainer>
    </div>
  );
}

PlaylistsSmall.propTypes = {
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
  subtitle: PropTypes.string.isRequired,
};
DescriptionToggle.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
  onExpand: PropTypes.func.isRequired,
  onCollapse: PropTypes.func.isRequired,
};

export default PlaylistsSmall;
