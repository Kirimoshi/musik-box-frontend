import React, { useState } from "react";
import { AiOutlineSearch, AiFillPlusCircle } from "react-icons/ai";

import { CreateNewPlaylist } from "../../CreateNewPlaylist/components/CreateNewPlaylist";
import "../styles/maincontainer.css";
import Playlists from "./Playlists";

export default function MainContainer() {
  const [createNewPlaylistModal, setCreateNewPlaylistModal] = useState(false);
  const handleModalSubmit = () => {
    setCreateNewPlaylistModal(false);
  };
  return (
    <div className="playlist-container">
      <div className="playlist-contents">
        <div className="playlist-header">My Playlist</div>
        <div className="playlist-search-wrapper">
          <input
            className="playlist-search"
            type="search"
            placeholder="Type something"
          />
          <AiOutlineSearch className="playlist-search-img" />
        </div>
        <div className="newplaylist-wrapper">
          <AiFillPlusCircle
            onClick={() => setCreateNewPlaylistModal(true)}
            data-testid="newplaylist-btn"
            className="newplaylist-btn"
          />
          <div className="newplaylist-txt">New playlist</div>
        </div>
        <div className="division" />
        {createNewPlaylistModal && CreateNewPlaylist && (
          <CreateNewPlaylist handleModalSubmit={handleModalSubmit} />
        )}
        <Playlists />
      </div>
    </div>
  );
}
