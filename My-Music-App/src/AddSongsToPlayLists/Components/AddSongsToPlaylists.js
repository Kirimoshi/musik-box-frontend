import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { IoAddSharp } from "react-icons/io5";
import { PiDotBold } from "react-icons/pi";

import closeLogo from "../closeLogo.svg";
import Songs from "../../ViewThePlayList/Components/Songs";
import "../styles.css";
export function AddSongsToPlaylists({ handleAddSongModal }) {
  return (
    <div className="addsongsToPlaylist-main">
      <div className="addsongs-header">
        <p>Songs</p>
        <p className="addsong-close-btn" onClick={handleAddSongModal}>
          <img src={closeLogo} alt="button to close modal" />
        </p>
      </div>
      <div className="addsongs-searchbar">
        <div className="searchbar-input-box">
          <input type="text" placeholder="Type something" />
        </div>
        <div className="searchbar-searchIcon">
          <IoSearchSharp className="searchIcon" />
        </div>
      </div>
      <div className="addsongs-main">
        <div className="addsongs-title-type">
          <p>Most Popular</p>
        </div>
        <div className="addsongs-songlist">
          {Songs &&
            Songs.map((song) => (
              <div className="addsong-item" key={song.id}>
                <div className="addsong-song-item-img">
                  <img
                    src={song.picture}
                    alt="song preview"
                    className="addsong-song-img"
                  />
                </div>
                <div className="addsong-artistInfo">
                  <div className="addsong-song-title">
                    <p>{song.title.substring(0, 10)}</p>
                  </div>
                  <div className="addsong-song-info">
                    <p>{song.artist.substring(0, 5)}</p>
                    <PiDotBold />
                    <p>{song.album.substring(0, 5)}</p>
                  </div>
                </div>
                <div>
                  <IoAddSharp className="addsong-item-icon" />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
