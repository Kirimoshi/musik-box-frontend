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

function MenuDropdownProfile({ handlePlaylistType, playlistId }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleDeletePlaylist = () => {
    dispatch(deleteMyPlaylist(playlistId));
  };

  return (
    <>
      <ModalDialog
        className="profile-dropdown-menu__modal--delete"
        options={{
          isModalOpen,
          actionButtonText: "Delete playlist",
          closeButtonText: "Cancel",
          title:
            "Are you sure you want to delete this playlist? You will not be able to restore it.",
          onAction: handleDeletePlaylist,
          onClose: handleCloseModal,
        }}
      />
      <MenuContainer className="profile-dropdown-menu">
        <MenuItem className="">
          <RiDeleteBin6Line /> Delete playlist
        </MenuItem>
        <MenuDivider />
        <MenuItem>
          <RiPencilFill /> Edit
        </MenuItem>
        <MenuDivider />
        <MenuItem onClick={handlePlaylistType("Private")}>
          Make Private
        </MenuItem>
        <MenuItem onClick={handlePlaylistType("Shared")}>Make Shared</MenuItem>
        <MenuItem onClick={handlePlaylistType("Public")}>Make Public</MenuItem>
      </MenuContainer>
    </>
  );
}

MenuDropdownProfile.propTypes = {
  handlePlaylistType: PropTypes.func.isRequired,
  playlistId: PropTypes.string.isRequired,
};

export default MenuDropdownProfile;
