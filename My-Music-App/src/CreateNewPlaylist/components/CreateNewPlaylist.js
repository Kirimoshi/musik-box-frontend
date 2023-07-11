import React, { useState, useRef, useEffect } from "react";

import { IoIosAddCircle } from "react-icons/io";
import uploadImage from "../uploadImage.svg";
import closeLogo from "../closeLogo.svg";
import { Link } from "react-router-dom";
import "../styles.css";
import { validate } from "./CreateNewPlaylistValidation";
import { ConfirmationDialog } from "./ConfirmationDialog";
import { AddSongsToPlaylists } from "../../AddSongsToPlayLists/Components/AddSongsToPlaylists";

export const CreateNewPlaylist = ({ handleModalSubmit }) => {
  const imageInputRef = useRef(null);
  const initialValues = {
    playlistLogo: "",
    playlistName: "",
    description: "",
  };
  const [playlistDetails, setPlaylistDetails] = useState(initialValues);
  const [createPlaylistErrors, setCreatePlaylistErrors] = useState({});
  const [confirmationDialogModal, setConfirmationDialogModal] = useState(false);
  const [addSongModal, setAddSongModal]= useState(false);

  const handleConfirmationDialog = () => {
    setConfirmationDialogModal(true);
  };
  const handleModalDiscard = () => {
    setConfirmationDialogModal(false);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlaylistDetails({ ...playlistDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    setCreatePlaylistErrors(validate(playlistDetails));
  }, [playlistDetails]);

  const handleImageClick = () => {
    imageInputRef.current.click();
    setCreatePlaylistErrors({ ...createPlaylistErrors, playlistLogo: "" });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!createPlaylistErrors.playlistLogo) {
      setPlaylistDetails({ ...playlistDetails, playlistLogo: file });
    }
  };
  
  const handleAddSong=()=>{
    setAddSongModal(true);
  }

  const handleCloseAddSongModal=()=>{
    setAddSongModal(false);
  }

  return (
    <div className="createplaylist-main">
      <div className="createplaylist-header">
        <p>New playlist</p>
        <p
          className="createplaylist-close-btn"
          onClick={handleConfirmationDialog}
        >
          <img src={closeLogo} alt="button to close modal" />
        </p>
      </div>
      <div className="createplaylist-details">
        <form className="createplaylist-form" onSubmit={handleSubmit}>
          <div className="createplaylist-logo-item">
            <div className="createplaylist-logo" onClick={handleImageClick}>
              {playlistDetails.playlistLogo &&
              !createPlaylistErrors.playlistLogo ? (
                <img
                  src={URL.createObjectURL(playlistDetails.playlistLogo)}
                  alt="Playlist Logo"
                  className="actualImage"
                />
              ) : (
                <img
                  src={uploadImage}
                  alt="Playlist Logo"
                  className="defaultImage"
                />
              )}
              <input
                type="file"
                ref={imageInputRef}
                onChange={handleImageChange}
                style={{ display: "none" }}
                accept="image/jpeg, image/png, image/jpg, image/svg"
              />
            </div>
            <p className="createplaylist-error">
              {createPlaylistErrors.playlistLogo}
            </p>
          </div>
          <div className="createplaylist-playlistname-main">
            <label>Playlist name</label>
            <div className="createplaylist-name">
              <input
                type="text"
                name="playlistName"
                value={playlistDetails.playlistName}
                className="createplaylist-name-input"
                onChange={handleChange}
              ></input>
              <p className="createplaylist-error">
                {createPlaylistErrors.playlistName}
              </p>
            </div>
            {confirmationDialogModal && ConfirmationDialog && (
              <ConfirmationDialog
                handleModalSubmit={handleModalSubmit}
                handleModalDiscard={handleModalDiscard}
              />
            )}
          </div>
          <div className="createplaylist-description-main">
            <label>Description</label>
            <div className="createplaylist-description">
              <textarea
                type="text"
                name="description"
                rows="4"
                cols="50"
                value={playlistDetails.description}
                className="createplaylist-description-input"
                onChange={handleChange}
              />
              <p className="createplaylist-error">
                {createPlaylistErrors.description}
              </p>
            </div>
          </div>
          {addSongModal && AddSongsToPlaylists && <AddSongsToPlaylists handleCloseAddSongModal={handleCloseAddSongModal}/>}
          <div className="createplaylist-addsong">
            <Link>
              <IoIosAddCircle className="addsong-icon" onClick={handleAddSong}/>
            </Link>
            <p>Add Song</p>
          </div>
          <div className="createplaylist-form-submit">
            <button type="submit" className="createplaylist-create-btn">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
