import React, { useState } from "react";
import PropTypes from "prop-types";
import { RiPencilFill, RiDeleteBin6Line } from "react-icons/ri";

import "../Styles/modal.css";
import {
  MenuContainer,
  MenuDivider,
  MenuItem,
} from "./MenuDropdownProfile.styles";
import ModalDialog from "../../shared/ModalDialog";
import { deleteMyPlaylist } from "../../store/myPlaylists/myPlaylists.thunks";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function MenuDropdownProfile({ handlePlaylistType, playlistId }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modalOptions, setModalOptions] = useState({
    isModalOpen: false,
    actionButtonText: "",
    closeButtonText: "",
    title: "",
    onClose: () => {},
    onAction: () => {},
  });

  // const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () =>
    setModalOptions({ ...modalOptions, isModalOpen: false });

  const handleDeletePlaylist = () => {
    dispatch(deleteMyPlaylist(playlistId));
    navigate("/");
  };

  const handleDeleteClick = () => {
    setModalOptions({
      isModalOpen: true,
      actionButtonText: "Delete playlist",
      closeButtonText: "Cancel",
      title:
        "Are you sure you want to delete this playlist? You will not be able to restore it.",
      onClose: handleCloseModal,
      onAction: handleDeletePlaylist,
    });
  };

  return (
    <>
      <ModalDialog
        className="profile-menu__modal--delete"
        options={modalOptions}
      />

      <MenuContainer className="profile-menu">
        <MenuItem onClick={handleDeleteClick} className="profile-menu__delete">
          <RiDeleteBin6Line /> Delete playlist
        </MenuItem>
        <MenuDivider />
        <MenuItem className="profile-menu__edit">
          <RiPencilFill /> Edit
        </MenuItem>
        <MenuDivider />
        <MenuItem
          onClick={handlePlaylistType("Private")}
          className="profile-menu__change-type--private"
        >
          Make Private
        </MenuItem>
        <MenuItem
          onClick={handlePlaylistType("Shared")}
          className="profile-menu__change-type--shared"
        >
          Make Shared
        </MenuItem>
        <MenuItem
          onClick={handlePlaylistType("Public")}
          className="profile-menu__change-type--public"
        >
          Make Public
        </MenuItem>
      </MenuContainer>
    </>
  );
}

MenuDropdownProfile.propTypes = {
  handlePlaylistType: PropTypes.func.isRequired,
  playlistId: PropTypes.string.isRequired,
};

export default MenuDropdownProfile;
