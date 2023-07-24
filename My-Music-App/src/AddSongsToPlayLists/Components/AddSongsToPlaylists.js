import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { IoAddSharp } from "react-icons/io5";
import { PiDotBold } from "react-icons/pi";
import axios from "axios";

import closeLogo from "../closeLogo.svg";
import media from "../media.jpg";
import "../styles.css";
import { constants } from "../Constants";
export const AddSongsToPlaylists = ({ handleAddSongModal }) => {
  const [songs, setSongs]= useState([]);
  const [searchSong, setSearchSong]= useState(null);

  const handleSearch=(e)=>{
    setSearchSong(e.target.value);
  }
  const fetchSongsData = async () => {
    await axios
      .get(constants.Songs_API_URL, {
        params :{page: 1, search: searchSong, include: "album"},
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((response) => {
        console.log(response);
        setSongs(response.data.songs.data);
      });
  };

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
          <input type="text" placeholder="Type something" value={searchSong} onChange={handleSearch}/>
        </div>
        <div className="searchbar-searchIcon">
          <IoSearchSharp className="searchIcon" onClick={fetchSongsData}/>
        </div>
      </div>
      <div className="addsongs-main">
        <div className="addsongs-title-type">
          <p>Most Popular</p>
        </div>
        <div className="addsongs-songlist">
          {songs &&
            songs.map((song) => (
              <div className="addsong-item" key={song.id}>
                <div className="addsong-song-item-img">
                  <img
                    src={media}
                    alt="song preview"
                    className="addsong-song-img"
                  />
                </div>
                <div className="addsong-artistInfo">
                  <div className="addsong-song-title">
                    <p>{song.attributes.title}</p>
                  </div>
                  <div className="addsong-song-info">
                    <p>{song.attributes.artist}</p>
                    <PiDotBold />
                    <p>album</p>
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
};
