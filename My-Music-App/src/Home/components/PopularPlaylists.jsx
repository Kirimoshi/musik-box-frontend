import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { userSelector } from "../../store/user/user.selector";

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
  CardShowMore,
  CardShowLess,
} from "./PopularPlaylists.styles";
import { Subtitle, Title } from "../Shared.styles";

const MAX_CHARS = 99;

const fetchPopularPlaylists = async (accessToken) => {
  let headersList = {
    Accept: "*/*",
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
      const data = await fetchPopularPlaylists(accessToken);
      const first4playlists = data.playlists.data.filter((_, i) => i < 4);
      console.log(
        "file: PopularPlaylists.jsx:49 ~ fetchPlaylists ~ first4playlists:",
        first4playlists
      );
      // description is empty for the first playlist
      first4playlists[0].attributes.description = "";
      // description is too long for the second playlist
      first4playlists[1].attributes.description =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique culpa quasi voluptate sapiente aspernatur ipsa incidunt velit harum optio commodi totam adipisci magnam recusandae officiis laboriosam fugit doloribus, ratione dolorum quam iure earum! Et quo error dolor harum assumenda molestiae quia voluptatem sit facere non totam, necessitatibus sequi. Blanditiis, unde?";
      // desctiption exactly 99 chars for the third playlist
      first4playlists[2].attributes.description =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique culpa quasi voluptate?ss";
      setPlaylistData(first4playlists);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPlaylists();
  }, []);

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
              {/* {console.log(description.length)} */}
              <CardTitle className="_playlist__name">{name}</CardTitle>
              <CardOwner className="_playlist__owner">{`Created by: Playlist owner`}</CardOwner>
              <CardLike className="_playlist__like">
                <AiOutlineHeart />
              </CardLike>
              {expandedPlaylistId !== id && description.length >= MAX_CHARS && (
                <CardShowMore onClick={handleMore(id)}>
                  <MdKeyboardDoubleArrowUp />
                </CardShowMore>
              )}
              {expandedPlaylistId === id && description.length >= MAX_CHARS && (
                <CardShowLess onClick={handleLess}>
                  <MdKeyboardDoubleArrowDown />
                </CardShowLess>
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
