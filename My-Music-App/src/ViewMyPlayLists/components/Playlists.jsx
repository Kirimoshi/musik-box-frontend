import React, { useEffect, useState } from "react";
import axios from "axios";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";

import "../styles/playlists.css";
import { constants } from "../constants";

export default function Playlists() {
  const [playlistData, setPlaylistData] = useState([]);
  const [openModel, setOpenModel] = useState(null);
  const handleClick = (x) => {
    if (x === openModel) {
      setOpenModel(null);
    } else {
      setOpenModel(x);
    }
  };

  const fetchPlaylistsData = async () => {
    const data = await axios
      .get(constants.GET_API_URL, {
        params: { page: 1 },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((response) => {
        return response.data.data;
      });
    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlaylistsData();
      setPlaylistData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="playlist-songlist">
      <div className="playlist-songsContainer">
        {playlistData &&
          playlistData.map((playlistItem) => (
            <div
              className={`playlist-song ${
                openModel === playlistItem.id ? "displayTop" : ""
              }`}
              key={playlistItem.id}
            >
              <div className="playlist-imageBox-artistinfo">
                <img
                  src={`http://127.0.0.1:3000/uploads/store/${playlistItem.attributes.logo.id}`}
                  alt="song preview"
                  className="playlist-song-image"
                />
                <div className="playlist-artistInfo">
                  <p className="artistinfo-playlistname">
                    {playlistItem.attributes.name}
                  </p>
                  <div className="artistinfo-playlistsongs">
                    {playlistItem.attributes.first_ten_songs.data &&
                      playlistItem.attributes.first_ten_songs.data.map(
                        (song, index) => {
                          if (
                            index !==
                            playlistItem.attributes.first_ten_songs.data
                              .length -
                              1
                          )
                            return (
                              <p>
                                {song.attributes.title +
                                  ` (` +
                                  song.attributes.artist_name +
                                  `),`}
                              </p>
                            );
                          else
                            return (
                              <p>
                                {song.attributes.title +
                                  ` (` +
                                  song.attributes.artist_name +
                                  `)`}
                              </p>
                            );
                        }
                      )}
                  </div>
                </div>
              </div>
              <BsThreeDotsVertical
                className="playlist-vertical-menu"
                onClick={() => {
                  handleClick(playlistItem.id);
                }}
              />
              {openModel === playlistItem.id && (
                <div className="playlist-delete-icon-modal">
                  <div className="playlist-modal-first-element">
                    <RiDeleteBin6Line />
                    <p>Delete Playlist</p>
                  </div>
                  <div className="playlist-modal-second-element">
                    <FiEdit2 />
                    <p>Edit</p>
                  </div>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
