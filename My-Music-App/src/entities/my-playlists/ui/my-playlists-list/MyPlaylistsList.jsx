import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { pageOfMyPlaylistsSelector } from "../../../../store/myPlaylists/myPlaylists.selector";
import { deleteMyPlaylist } from "../../../../store/myPlaylists/myPlaylists.thunks";

import ModalDialog from "../../../../shared/ModalDialog";

import { BsThreeDotsVertical } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";

import { PublicPlaylistCardName as MyPlaylistsCardName } from "../../../public-playlists/ui/public-playlist-card/PublicPLaylistCard.styles";

import {
  Menu,
  MenuItemDelete,
  MenuItemDivider,
  MenuItemEdit,
  PlaylistMenuIcon,
  MyPlaylistsCardContainer,
  MyPlaylistsCardImage,
  MyPlaylistsCardTextWrapper,
  MyPlaylistsListContainer,
  MyPlaylistsCardSongs,
} from "./MyPlaylistsList.styles";

import { CreateOrModifyPlaylist } from "../../../../CreateOrModifyPlaylist/components/CreateOrModifyPlaylist";
import { UPLOADS_URL } from "../../../../store/constants";
import paths from "../../../../router/paths";

function MyPlaylistsList({ searchString }) {
  const dispatch = useDispatch();
  const myPlaylists = useSelector(pageOfMyPlaylistsSelector);

  const [modifyId, setModifyId] = useState(null);
  const [openModal, setOpenModal] = useState(null);
  const [modifyPlaylistModal, setModifyPlaylistModal] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false); // Current state of delete modal
  const [idPlaylistsItemToDelete, setIdPlaylistsItemToDelete] = useState(null); // Store id seperate for readablity and transfer to modal delete

  const navigate = useNavigate();

  // Add song behavior, will be refactored in corresponding task
  const handleModifyPlaylistModal = () => {
    handleMenuClick(openModal);
    setModifyPlaylistModal(!modifyPlaylistModal);
  };

  const handleMenuClick = (playlistId) => {
    if (playlistId === openModal) {
      setOpenModal(null);
    } else {
      setModifyId(playlistId);
      setOpenModal(playlistId);
    }
  };

  const handleDeletePlaylistsItem = (playlistsItemId) => () => {
    setIdPlaylistsItemToDelete(playlistsItemId);
    handleOpenModal();
  };

  const handleOpenModal = () => setIsModalOpen(true);

  const handleCloseModal = () => setIsModalOpen(false);

  const handlerRemove = () => {
    if (!idPlaylistsItemToDelete) return;
    dispatch(deleteMyPlaylist(idPlaylistsItemToDelete));
    setOpenModal(null);
  };
  const handleNavigate = (id) => () => {
    navigate(`${paths.myPlaylistDetails}/${id}`);
  };
  return (
    <>
      {/* Modal windows */}
      <ModalDialog
        className="modal__delete-playlist"
        options={{
          isModalOpen,
          actionButtonText: "Delete playlist",
          closeButtonText: "Cancel",
          title:
            "Are you sure you want to delete this playlist? You will not be able to restore it.",
          onAction: handlerRemove,
          onClose: handleCloseModal,
        }}
      />
      {/* TODO: Refactoring 'Edit playlist' will be done in task EPMRDPEMAP-750 */}
      <MyPlaylistsListContainer as="section" className="my-playlists__list">
        {modifyPlaylistModal && (
          <CreateOrModifyPlaylist
            modalValue="Edit Playlist"
            modalPlaylistId={modifyId}
            handleCreateOrModifyPlaylistModal={handleModifyPlaylistModal}
          />
        )}

        {myPlaylists
          .filter(({ attributes: { name } }) =>
            name.toLowerCase().includes(searchString)
          )
          .map(
            ({
              id,
              attributes: {
                logo,
                name,
                first_ten_songs: { data: songs },
              },
            }) => (
              <MyPlaylistsCardContainer
                key={id}
                as="figure"
                className="my-playlists__card"
                data-playlist-id={id}
                $top={openModal === id}
              >
                <MyPlaylistsCardImage
                  className="playlist-card__image"
                  src={
                    logo
                      ? `${UPLOADS_URL}/${logo.storage}/${logo.id}`
                      : require("../../../../shared/assets/default_playlist_cover.jpg")
                  }
                  alt={`song preview for ${name}`}
                  onClick={handleNavigate(id)}
                />
                <MyPlaylistsCardTextWrapper
                  as="figcaption"
                  onClick={handleNavigate(id)}
                >
                  <MyPlaylistsCardName className="playlist-card__title">
                    {name}
                  </MyPlaylistsCardName>
                  <MyPlaylistsCardSongs className="playlist-card__songs">
                    {songs.map(
                      ({ id, attributes: { title, artist_name } }, index) => {
                        let playlistSongslength = songs.length - 1;
                        return (
                          <span key={id} data-song-id={id}>
                            {`${title} (${artist_name.join(", ")})${
                              index === playlistSongslength ? "" : ", "
                            }`}
                          </span>
                        );
                      }
                    )}
                  </MyPlaylistsCardSongs>
                </MyPlaylistsCardTextWrapper>
                <PlaylistMenuIcon className="playlist-card__menu-icon">
                  <BsThreeDotsVertical
                    onClick={() => {
                      handleMenuClick(id);
                    }}
                  />
                </PlaylistMenuIcon>
                {openModal === id && (
                  <Menu>
                    <MenuItemDelete onClick={handleDeletePlaylistsItem(id)}>
                      <RiDeleteBin6Line />
                      <p>Delete Playlist</p>
                    </MenuItemDelete>
                    <MenuItemDivider />
                    <MenuItemEdit onClick={handleModifyPlaylistModal}>
                      <FiEdit2 />
                      <p>Edit</p>
                    </MenuItemEdit>
                  </Menu>
                )}
              </MyPlaylistsCardContainer>
            )
          )}
      </MyPlaylistsListContainer>
    </>
  );
}

MyPlaylistsList.propTypes = {
  searchString: PropTypes.string.isRequired,
};

export default MyPlaylistsList;
