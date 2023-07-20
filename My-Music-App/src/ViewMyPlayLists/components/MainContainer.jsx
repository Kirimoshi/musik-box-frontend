import React, { useState } from "react";
import { AiOutlineSearch, AiFillPlusCircle } from "react-icons/ai";

import { CreateOrModifyPlaylist } from "../../CreateOrModifyPlaylist/components/CreateOrModifyPlaylist";
import "../styles/maincontainer.css";
import Playlists from "./Playlists";

export default function MainContainer() {
  const [createNewPlaylistModal, setCreateNewPlaylistModal] = useState(false);
  const handleCreatePlaylistModal = () => {
    setCreateNewPlaylistModal(!createNewPlaylistModal);
  };
  return (
    <div
      className={`playlist-container ${
        createNewPlaylistModal ? "playlst-conatiner-pointer" : ""
      }`}
    >
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
            onClick={handleCreatePlaylistModal}
            data-testid="newplaylist-btn"
            className="newplaylist-btn"
          />
          <div className="newplaylist-txt">New playlist</div>
        </div>
        <div className="division" />
        {createNewPlaylistModal && (
          <CreateOrModifyPlaylist
            modalValue="New Playlist"
            modalPlaylistId={null}
            handleCreateOrModifyPlaylistModal={handleCreatePlaylistModal}
          />
        )}
        <Playlists />
      </div>
    </div>
  );
}
