import React, { useEffect, useState } from "react";
import { AiOutlineSearch, AiFillPlusCircle } from "react-icons/ai";

import { CreateOrModifyPlaylist } from "../../CreateOrModifyPlaylist/components/CreateOrModifyPlaylist";
import "../styles/maincontainermyplaylists.css";
import Playlists from "./Playlists";
import MainContainer from "../../ViewThePlayList/Components/MainContainer";

export default function MainContainerMyPlaylists() {
  const [createNewPlaylistModal, setCreateNewPlaylistModal] = useState(false);
  const [showThePlaylist, setShowThePlaylist] = useState(false);
  const handleCreatePlaylistModal = () => {
    setCreateNewPlaylistModal(!createNewPlaylistModal);
  };
  const handleViewThePlaylist = () => {
    setShowThePlaylist(true);
  };
  useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    if (location.pathname == "/viewmyplaylists") {
      setShowThePlaylist(false);
    } else if (
      // eslint-disable-next-line no-restricted-globals
      location.pathname.includes("/ViewMyPlaylists/ViewThePlaylist/")
    ) {
      setShowThePlaylist(true);
    }
    // eslint-disable-next-line no-restricted-globals
  });
  return (
    <>
      {showThePlaylist && <MainContainer />}
      <div
        className={
          showThePlaylist
            ? `hidden`
            : `playlist-container ${
                createNewPlaylistModal ? "playlst-conatiner-pointer" : ""
              }`
        }
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
          <Playlists handleViewThePlaylist={handleViewThePlaylist} />
        </div>
      </div>
    </>
  );
}
