import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";

import "../styles/playlists.css";
import { constants } from "../constants";
import { CreateOrModifyPlaylist } from "../../CreateOrModifyPlaylist/components/CreateOrModifyPlaylist";

export default function Playlists({ handleViewThePlaylist }) {
  const [playlistData, setPlaylistData] = useState([]);
  const [modifyId, setModifyId] = useState(null);
  const [openModel, setOpenModel] = useState(null);
  const [modifyPlaylistModal, setModifyPlaylistModal] = useState(false);
  const navigate = useNavigate();
  const handleModifyPlaylistModal = () => {
    handleClick(openModel);
    setModifyPlaylistModal(!modifyPlaylistModal);
  };
  const handleClick = (x) => {
    if (x === openModel) {
      setOpenModel(null);
    } else {
      setModifyId(x);
      setOpenModel(x);
    }
  };
  const handleNavigate = (id) => {
    handleViewThePlaylist();
    navigate(`/ViewMyPlaylists/ViewThePlaylist/${id}`);
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
    <>
      {modifyPlaylistModal && (
        <CreateOrModifyPlaylist
          modalValue="Edit Playlist"
          modalPlaylistId={modifyId}
          handleCreateOrModifyPlaylistModal={handleModifyPlaylistModal}
        />
      )}

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
                <div
                  className="playlist-imageBox-artistinfo"
                  onClick={() => {
                    handleNavigate(playlistItem.id);
                  }}
                >
                  <img
                    src={constants.store_URL + playlistItem.attributes.logo.id}
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
                            let playlistSongslength =
                              playlistItem.attributes.first_ten_songs.data
                                .length - 1;
                            return (
                              <p>
                                {song.attributes.title +
                                  ` (` +
                                  song.attributes.artist_name +
                                  `)` +
                                  (index == playlistSongslength ? "" : ",")}
                                <span className="song-space" />
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
                    <div
                      className="playlist-modal-second-element"
                      onClick={handleModifyPlaylistModal}
                    >
                      <FiEdit2 />
                      <p>Edit</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
