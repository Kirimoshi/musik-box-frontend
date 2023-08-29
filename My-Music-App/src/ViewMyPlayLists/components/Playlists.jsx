import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";

import "../styles/playlists.css";
import { CreateOrModifyPlaylist } from "../../CreateOrModifyPlaylist/components/CreateOrModifyPlaylist";

import {
  Menu,
  MenuItemDivider,
  MenuItemDelete,
  MenuItemEdit,
} from "./Playlists.styles";

import ModalDialog from "../../shared/ModalDialog";

import { useSelector, useDispatch } from "react-redux";
import { myPlaylistsSelector } from "../../store/myPlaylists/myPlaylists.selector";
import { deleteMyPlaylist } from "../../store/myPlaylists/myPlaylists.thunks";
import { DEFAULT_PLAYLIST_COVER, UPLOADS_URL } from "../../store/constants";

export default function Playlists({ handleViewThePlaylist }) {
  const dispatch = useDispatch();
  const myPlaylists = useSelector(myPlaylistsSelector);

  const [modifyId, setModifyId] = useState(null);
  const [openModel, setOpenModel] = useState(null);
  const [modifyPlaylistModal, setModifyPlaylistModal] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false); // Current state of delete modal
  const [idPlaylistsItemToDelete, setIdPlaylistsItemToDelete] = useState(null); // Store id seperate for readablity and transfer to modal delete

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

  const handleDeletePlaylistsItem = (playlistsItemId) => () => {
    setIdPlaylistsItemToDelete(playlistsItemId);
    handleOpenModal();
  };

  const handleOpenModal = () => setIsModalOpen(true);

  const handleCloseModal = () => setIsModalOpen(false);

  const handlerRemove = () => {
    if (!idPlaylistsItemToDelete) return;
    dispatch(deleteMyPlaylist(idPlaylistsItemToDelete));
    setOpenModel(null);
  };
  const handleNavigate = (id) => () => {
    handleViewThePlaylist();
    navigate(`/ViewMyPlaylists/ViewThePlaylist/${id}`);
  };

  return (
    <>
      <ModalDialog
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
      {modifyPlaylistModal && (
        <CreateOrModifyPlaylist
          modalValue="Edit Playlist"
          modalPlaylistId={modifyId}
          handleCreateOrModifyPlaylistModal={handleModifyPlaylistModal}
        />
      )}

      <div className="playlist-songlist">
        <div className="playlist-songsContainer">
          {myPlaylists.map(
            ({
              id,
              attributes: {
                logo,
                name,
                first_ten_songs: { data: firstTenSongs },
              },
            }) => {
              return (
                <div
                  className={`playlist-song ${
                    openModel === id ? "displayTop" : ""
                  }`}
                  key={id}
                >
                  <div
                    className="playlist-imageBox-artistinfo"
                    onClick={handleNavigate(id)}
                  >
                    <img
                      src={
                        logo
                          ? `${UPLOADS_URL}/${logo.storage}/${logo.id}`
                          : DEFAULT_PLAYLIST_COVER
                      }
                      alt="song preview"
                      className="playlist-song-image"
                    />
                    <div className="playlist-artistInfo">
                      <p className="artistinfo-playlistname">{name}</p>
                      <div className="artistinfo-playlistsongs">
                        {firstTenSongs.map((song, index) => {
                          let playlistSongslength = firstTenSongs.length - 1;
                          return (
                            <p key={song.id}>
                              {song.attributes.title +
                                ` (` +
                                song.attributes.artist_name +
                                `)` +
                                (index === playlistSongslength ? "" : ",")}
                              <span className="song-space" />
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <BsThreeDotsVertical
                    className="playlist-vertical-menu"
                    onClick={() => {
                      handleClick(id);
                    }}
                  />
                  {openModel === id && (
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
                </div>
              );
            }
          )}
        </div>
      </div>
    </>
  );
}
