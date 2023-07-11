import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";

import Songs from "./Songs";
import "../Styles/songlist.css";
export default function SongList() {
  const someThing = () => {
    console.log("hi");
  };
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
        {Songs &&
          Songs.map((song, index) => (
            <div className="songs" key={song.id}>
              <div className="song">
                <div className="imageBox-artistinfo">
                  <img
                    src={song.picture}
                    alt="song preview"
                    className="image1"
                  />
                  <div className="artistInfo">
                    <p>{song.title}</p>
                    <p>{song.artist}</p>
                  </div>
                </div>
                <div className="songlist-vertical-menu">
                  <BsThreeDotsVertical
                    onClick={() => {
                      handleClick(song.id);
                    }}
                  />
                  {openModel === song.id && (
                    <div className="delete-modal">
                      <div onClick={someThing} className="delete-tag">
                        <RiDeleteBin6Line className="delete-button" />
                        <p>Remove song from playlist</p>
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
