import React from "react";
import { AiOutlineSearch, AiFillPlusCircle } from "react-icons/ai";

import "../styles/maincontainer.css";
import SongList from "./SongList";

export default function MainContainer() {
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
            data-testid="newplaylist-btn"
            className="newplaylist-btn"
          />
          <div className="newplaylist-txt">New playlist</div>
        </div>
        <div className="division" />
        <SongList />
      </div>
    </div>
  );
}
