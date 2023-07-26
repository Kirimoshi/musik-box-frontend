import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../../RedirectAuthenticatedUsers/AuthenticatedUsers";

import { useSelector } from "react-redux";

import mockedSongs from "./Songs";
import "../Styles/songlist.css";
import { constants } from "../constansts";

import ModalDialog from "./ModalDialog";

export default function SongList({ playlistStore }) {
  // state

  const [openModel, setOpenModel] = useState(null);
  const [Songs, setSongs] = useState(structuredClone(mockedSongs));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idSongToDelete, setIdSongToDelete] = useState(null);

  const user = useSelector((state) => state.user);
  console.log("user:", user);

  // Handlers
  // Open modal handler just swith the state of modal inside Modal component
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  // This callback gonna be called when the user click on the cancel button
  // inside the modal, and this will update isModalOpen state to false
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // this callback will be called when the user click on the remove button
  const handlerRemove = () => {
    if (!idSongToDelete) return;
    const newSongs = Songs.filter((song) => song.id !== idSongToDelete);
    setSongs(newSongs);
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
        {playlistStore?.included?.slice(1).map((song) => (
          <div
            className={`songs ${openModel === song.id ? "top" : ""}`}
            key={song.id}
          >
            <div className={`song`}>
              <div className="imageBox-artistinfo">
                <img
                  src={
                    constants.store_URL +
                    playlistStore?.data?.attributes?.logo.id
                  }
                  alt="song preview"
                  className="image1"
                />
                <div className="artistInfo">
                  <p>{song.attributes.title}</p>
                  <p>{song.attributes.artist_name}</p>
                </div>
              </div>
              <div className="songlist-vertical-menu">
                <BsThreeDotsVertical
                  onClick={() => {
                    verticalMenuToggle(song.id);
                  }}
                />

                {openModel === song.id && (
                  <div className="delete-modal">
                    {
                      <div
                        onClick={() => handleDeleteSong(song.id)}
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
        ))}
      </div>
    </div>
  );
}
