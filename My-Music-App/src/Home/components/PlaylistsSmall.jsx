import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  MdKeyboardDoubleArrowUp,
  MdKeyboardDoubleArrowDown,
} from "react-icons/md";
import { Subtitle } from "../Shared.styles";
import {
  PlaylistContainer,
  PlaylistCard,
  Cover,
  CardTitle,
  CardOwner,
  CardDescription,
  DescriptionCTA,
} from "./PlaylistsSmall.styles";

const MAX_CHARS = 25;

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
        {playlists?.map(
          ({ id, attributes: { name, description, logo }, ...rest }) => (
            <PlaylistCard
              key={id}
              data-test-name="card"
              $isExpanded={expandedPlaylistId === id}
            >
              <Cover
                role="img"
                aria-label={`playlist ${name} cover`}
                data-test-name="picture"
                $isExpanded={expandedPlaylistId === id}
                // TODO add default image
                $coverUrl={
                  logo
                    ? `http://127.0.0.1:3000/uploads/${logo.storage}/${logo.id}`
                    : `path to default image`
                }
              >
                {/* <div data-test-name="icon"></div> */}
              </Cover>
              <CardTitle data-test-name="_title">{name}</CardTitle>
              <CardOwner data-test-name="_owner">By: {`Owner`}</CardOwner>
              {description.length !== 0 && description.length > MAX_CHARS && (
                <DescriptionCTA>
                  {expandedPlaylistId !== id ? (
                    <MdKeyboardDoubleArrowUp onClick={handleMore(id)} />
                  ) : (
                    <MdKeyboardDoubleArrowDown onClick={handleLess} />
                  )}
                </DescriptionCTA>
              )}
              {description.length !== 0 && (
                <CardDescription
                  $isExpanded={expandedPlaylistId === id}
                  data-test-name="_description"
                >
                  {description}
                </CardDescription>
              )}
            </PlaylistCard>
          )
        )}
      </PlaylistContainer>
    </div>
  );
}

PlaylistsSmall.propTypes = {
  subtitle: PropTypes.string.isRequired,
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

export default PlaylistsSmall;
