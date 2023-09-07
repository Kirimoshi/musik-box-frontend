import React, { useCallback } from "react";

import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import { RiDislikeLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import {
  PublicPlaylistCardContainer,
  PublicPlaylistCardImage,
  PublicPlaylistCardInfo,
  PublicPlaylistCardName,
  PublicPlaylistCardSongs,
  PublicPlaylistCardTextWrapper,
  PublicPlaylistCardLikes,
} from "./PublicPLaylistCard.styles";

import constants from "../../constants/constants";
import { default as getLikesDislikesNumber } from "../../lib/helpers/getLikesDislikesNumber";
import paths from "../../../../router/paths";

function PublicPlaylistCard({ playlist, isAuth }) {
  const navigate = useNavigate();
  const { id, name, logo, first_ten_songs, number_likes_dislikes } = playlist;
  const reactions = getLikesDislikesNumber(number_likes_dislikes);
  const handleNavigate = useCallback(() => {
    navigate(`${paths.publicPlaylistDetails}/${id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <PublicPlaylistCardContainer onClick={handleNavigate}>
      <PublicPlaylistCardInfo>
        <PublicPlaylistCardImage
          src={constants.store_URL + logo.id}
          alt={`song preview for ${name}`}
        />
        <PublicPlaylistCardTextWrapper>
          <PublicPlaylistCardName>{name}</PublicPlaylistCardName>
          <p className="public-playlist-card_created-by">
            Created by: Playlist Owner
          </p>
          <PublicPlaylistCardSongs data-songlist-id={`playlist-songs-${id}`}>
            {first_ten_songs.map(
              ({ attributes: { title, artist_name } }, index) => {
                let playlistSongslength = first_ten_songs.length - 1;
                return `${title} (${artist_name.join(", ")})${
                  index === playlistSongslength ? "" : ", "
                }`;
              }
            )}
          </PublicPlaylistCardSongs>
        </PublicPlaylistCardTextWrapper>
      </PublicPlaylistCardInfo>
      {isAuth && reactions && (
        <PublicPlaylistCardLikes>
          <div className="count-wrapper">
            <span
              className="count"
              data-dislikes-id={`public-playlist-dislikes-${id}`}
            >
              {reactions.dislikes}
            </span>
            <span className="btn btn-dislike">
              <RiDislikeLine />
            </span>
          </div>
          <div className="count-wrapper">
            <span
              className="count"
              data-likes-id={`public-playlist-likes-${id}`}
            >
              {reactions.likes}
            </span>
            <span className="btn btn-like">
              <AiOutlineHeart />
            </span>
          </div>
        </PublicPlaylistCardLikes>
      )}
    </PublicPlaylistCardContainer>
  );
}

PublicPlaylistCard.propTypes = {
  isAuth: PropTypes.bool,
  playlist: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    logo: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
    first_ten_songs: PropTypes.arrayOf(
      PropTypes.shape({
        attributes: PropTypes.shape({
          title: PropTypes.string.isRequired,
          artist_name: PropTypes.arrayOf(PropTypes.string.isRequired),
        }).isRequired,
      })
    ).isRequired,
    number_likes_dislikes: PropTypes.string.isRequired,
  }).isRequired,
};

export default PublicPlaylistCard;
