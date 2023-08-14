import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import { BsThreeDotsVertical } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";

import "../Styles/songlist.css";
import { constants } from "../constansts";

import { useSelector } from "react-redux";
import { userSelector } from "../../store/user/user.selector";
import { MY_PLAYLIST_URL } from "../../store/constants";

import ModalDialog from "../../shared/ModalDialog";

const fetchDeleteSongFromPlaylist = async (accessToken, playlistId, songId) => {
  const headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${accessToken}`,
  };
  const reqOptions = {
    url: `${MY_PLAYLIST_URL}/${playlistId}/playlist_songs/${songId}`,
    method: "DELETE",
    headers: headersList,
  };
  try {
    const response = await axios.request(reqOptions);
    return { data: response.data, songId };
  } catch (error) {
    throw error.response.data.errors;
  }
};

export default function SongList({ playlistStore }) {
  // state
  const { accessToken, isAuthenticated } = useSelector(userSelector);
  const [playlist, setPlaylist] = useState({});
  const [songs, setSongs] = useState([]);
  console.log("file: SongList.jsx:40 ~ SongList ~ songs:", songs);

  useEffect(() => {
    setPlaylist(playlistStore.data);
  }, [playlistStore.data]);

  useEffect(() => {
    setSongs(playlistStore.included.filter((song) => song.type === "song"));
  }, [playlistStore.included]);

  const [openModel, setOpenModel] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idSongToDelete, setIdSongToDelete] = useState(null);

  // Handlers
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlerRemove = () => {
    if (!idSongToDelete || !isAuthenticated) return;

    try {
      fetchDeleteSongFromPlaylist(accessToken, playlist.id, idSongToDelete);
      const newSongs = songs.filter((song) => song.id !== idSongToDelete);
      setSongs(newSongs);
    } catch (error) {
      console.error(error);
    }

    setOpenModel(null);
  };

  // call from delete song button
  const handleDeleteSong = (songId) => {
    setIdSongToDelete(songId);
    handleOpenModal();
  };
  // call from three dots vertical menu
  const verticalMenuToggle = (x) => {
    if (x === openModel) {
      setOpenModel(null);
    } else {
      setOpenModel(x);
    }
  };

  return (
    <div className="SongList">
      <div className="songsContainer">
        <ModalDialog
          options={{
            isModalOpen,
            actionButtonText: "Remove Song",
            closeButtonText: "Cancel",
            title:
              "Are you sure you want to remove this song from playlist? You will not be able to restore it.",
            onAction: handlerRemove,
            onClose: handleCloseModal,
          }}
        />
        {songs.map(
          ({
            id,
            attributes: {
              title,
              artist_name: artistName,
              cover: { id: coverFileName },
            },
          }) => (
            <div className={`songs ${openModel === id ? "top" : ""}`} key={id}>
              <div className={`song`}>
                <div className="imageBox-artistinfo">
                  <img
                    src={`${constants.store_URL}/${coverFileName} `}
                    alt="song cover"
                    className="image1"
                  />
                  <div className="artistInfo">
                    <p>{title}</p>
                    <p>{artistName?.join(", ")}</p>
                  </div>
                </div>
                <div className="songlist-vertical-menu">
                  <BsThreeDotsVertical
                    onClick={() => {
                      verticalMenuToggle(id);
                    }}
                  />

                  {openModel === id && (
                    <div className="delete-modal">
                      {
                        <div
                          onClick={() => handleDeleteSong(id)}
                          className="delete-tag"
                        >
                          <RiDeleteBin6Line className="delete-button" />
                          <span>Remove song from playlist</span>
                        </div>
                      }
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

SongList.propTypes = {
  playlistStore: PropTypes.shape({
    data: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
    included: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        attributes: PropTypes.shape({
          title: PropTypes.string,
          artist_name: PropTypes.arrayOf(PropTypes.string),
          cover: PropTypes.shape({
            id: PropTypes.string,
          }),
        }),
      })
    ),
  }),
};
