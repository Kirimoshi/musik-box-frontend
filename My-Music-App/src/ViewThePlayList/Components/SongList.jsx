import React, { useState, useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../../RedirectAuthenticatedUsers/AuthenticatedUsers";

import mockedSongs from "./Songs";
import "../Styles/songlist.css";

import ModalDialog from "./ModalDialog";

export default function SongList() {
  // state
  const navigate = useNavigate();
  const [loggedStatus, setLoggedStatus] = useState(false);

  const [openModel, setOpenModel] = useState(null);
  const [Songs, setSongs] = useState(structuredClone(mockedSongs));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idSongToDelete, setIdSongToDelete] = useState(null);

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
  // call from tree dots vertical menu
  const verticalMenuToggle = (x) => {
    if (x === openModel) {
      setOpenModel(null);
    } else {
      setOpenModel(x);
    }
  };

  // Effects
  // Acquire logged status
  useEffect(() => {
    isLoggedIn(loggedStatus, setLoggedStatus, navigate);
  }, [loggedStatus, setLoggedStatus, navigate]);
  // Mock logged status
  useEffect(() => {
    setLoggedStatus(true);
  }, []);

  // Element
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
        {Songs?.map((song) => (
          <div className="songs" key={song.id}>
            <div className={`song${openModel === song.id ? " top" : ""}`}>
              <div className="imageBox-artistinfo">
                <img src={song.picture} alt="song preview" className="image1" />
                <div className="artistInfo">
                  <p>{song.title}</p>
                  <p>{song.artist}</p>
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
                    {loggedStatus && (
                      <div
                        onClick={() => handleDeleteSong(song.id)}
                        className="delete-tag"
                      >
                        <RiDeleteBin6Line className="delete-button" />
                        <span>Remove song from playlist</span>
                      </div>
                    )}
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
