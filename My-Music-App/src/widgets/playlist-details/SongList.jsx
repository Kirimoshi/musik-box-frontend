import React, { useState } from "react";
import PropTypes from "prop-types";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";

import "./songlist.css";

import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../store/user/user.selector";
import { UPLOADS_URL } from "../../store/constants";

import ModalDialog from "../../shared/ModalDialog";
import { playlistDetailsSelector } from "../../store/playlist-details/playlist-details.selector";
import { deleteSongFromPlaylist } from "../../store/playlist-details/playlist-details.thunks";

function SongList({ shoudRenderKebabMenu }) {
  // state
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(userSelector);
  const { songs } = useSelector(playlistDetailsSelector);

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
      dispatch(deleteSongFromPlaylist(idSongToDelete));
    } catch (error) {
      console.error(error);
    }

    setOpenModel(null);
  };

  const handleDeleteSong = (songId) => {
    setIdSongToDelete(songId);
    handleOpenModal();
  };

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
          ({ id, attributes: { title, artist_name: artistName, cover } }) => {
            return (
              <div
                className={`songs ${openModel === id ? "top" : ""}`}
                key={id}
                data-song-id={id}
              >
                <div className={`song`}>
                  <div className="imageBox-artistinfo">
                    <img
                      src={
                        cover
                          ? `${UPLOADS_URL}/${cover.storage}/${cover.id}`
                          : require("../../shared/assets/default_song_cover.png")
                      }
                      alt="song cover"
                      className="image1"
                    />
                    <div className="artistInfo">
                      <p>{title}</p>
                      <p>{artistName?.join(", ")}</p>
                    </div>
                  </div>
                  <div className="songlist-vertical-menu">
                    {shoudRenderKebabMenu && (
                      <BsThreeDotsVertical
                        onClick={() => {
                          verticalMenuToggle(id);
                        }}
                      />
                    )}

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
            );
          }
        )}
      </div>
    </div>
  );
}

SongList.propTypes = {
  shoudRenderKebabMenu: PropTypes.bool.isRequired,
};

export default SongList;
