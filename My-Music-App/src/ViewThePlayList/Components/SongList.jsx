import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";

import "../Styles/songlist.css";
import { constants } from "../constansts";

import ModalDialog from "../../shared/ModalDialog";

import { useDispatch } from "react-redux";

export default function SongList({ playlistStore }) {
  // state
  const dispatch = useDispatch();

  const [playlist, setPlaylist] = useState({});
  const [songs, setSongs] = useState([]);
  console.log("file: SongList.jsx:24 ~ SongList ~ songs:", songs);

  useEffect(() => {
    setPlaylist(playlistStore.data);
  }, [playlistStore.data]);

  useEffect(() => {
    setSongs(playlistStore.included.filter((song) => song.type === "song"));
  }, [playlistStore.included]);

  const [openModel, setOpenModel] = useState(null);
  // const [Songs, setSongs] = useState(structuredClone(mockedSongs));
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
    const newSongs = songs.filter((song) => song.id !== idSongToDelete);
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
                    <p>{artistName}</p>
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
