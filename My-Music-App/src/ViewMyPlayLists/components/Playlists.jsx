import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";

import playlistData from "./PlaylistData";
import "../styles/playlists.css";

export default function Playlists() {
  const [openModel, setOpenModel] = useState(null);
  const handleClick = (x) => {
    if (x === openModel) {
      setOpenModel(null);
    } else {
      setOpenModel(x);
    }
  };
  return (
    <div className="SongList">
      <div className="songsContainer">
        {playlistData &&
          playlistData.map((playlistItem) => (
            <div className="songs" key={playlistItem.id}>
              <div className="song">
                <div className="imageBox-artistinfo">
                  <img
                    src={require(`../images/` + playlistItem.img)}
                    alt="song preview"
                    className="image1"
                  />
                  <div className="artistInfo">
                    <p className="artistinfo-playlistname">
                      {playlistItem.playlistName}
                    </p>
                    <div className="artistinfo-playlistsongs">
                      {playlistItem.songs &&
                        playlistItem.songs.map((song, index) => {
                          if (index !== playlistItem.songs.length - 1)
                            return (
                              <p>{song.title + ` (` + song.artist + `),`}</p>
                            );
                          else
                            return (
                              <p>{song.title + ` (` + song.artist + `)`}</p>
                            );
                        })}
                    </div>
                  </div>
                </div>
                <div className="vertical-menu">
                  <BsThreeDotsVertical
                    className="vertical-menu"
                    onClick={() => {
                      handleClick(playlistItem.id);
                    }}
                  />
                  {openModel === playlistItem.id && (
                    <div className="delete-icon-modal">
                      <div className="modal-first-element">
                        <RiDeleteBin6Line />
                        <p>Delete Playlist</p>
                      </div>
                      <div className="modal-second-element">
                        <FiEdit2 />
                        <p>Edit</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
