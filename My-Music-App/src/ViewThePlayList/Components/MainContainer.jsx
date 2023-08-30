import React, { useState, useEffect } from "react";
import { IoIosAdd } from "react-icons/io";
import { BiHeart } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiDislikeLine } from "react-icons/ri";
import { useParams } from "react-router-dom";

import "../Styles/maincontainer.css";
import SongList from "./SongList";
import Modal from "./Modal";
import Comment from "./Comment";
import { AddSongsToPlaylists } from "../../AddSongsToPlayLists/Components/AddSongsToPlaylists";
import { PlaylistTypeConfirmation } from "./PlaylistTypeConfirmation";

import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../store/user/user.selector";
import { DEFAULT_PLAYLIST_COVER, UPLOADS_URL } from "../../store/constants";
import { currentPlaylistSelector } from "../../store/myPlaylists/myPlaylists.selector";
import { fetchSingleMyPlaylist } from "../../store/myPlaylists/myPlaylists.thunks";

function MainContainer() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(userSelector);

  const [openModel, setOpenModel] = useState(false);
  const [addSongModal, setAddSongModal] = useState(false);
  const [myState, setMyState] = useState(false);
  const [playlistType, setPlaylistType] = useState("Public");
  const [confirmationDialog, setConfirmationDialog] = useState(false);
  const [dialogSubmit, setDialogSubmit] = useState("Public");
  const { id: navigateId } = useParams();

  const {
    playlistInfo: {
      playlistId,
      createdOn,
      updatedOn,
      playlistName,
      playlistType: playlistPrivacyType,
      logo,
      description,
      likes,
      dislikes,
    },
    ownerInfo: { email, registerDate, playlistsOwned },
  } = useSelector(currentPlaylistSelector);

  const shouldRenderDescription = description !== null;
  const coverUrl = logo
    ? `${UPLOADS_URL}/${logo.storage}/${logo.id}`
    : DEFAULT_PLAYLIST_COVER;

  const handleAddSongModal = () => {
    setAddSongModal(!addSongModal);
  };

  const handleConfirmationDialog = (type, value) => {
    if (type === "submit") setPlaylistType(value);
    setConfirmationDialog(false);
  };

  const handlePlaylistType = (value) => {
    if (playlistType !== "Shared") {
      setConfirmationDialog(true);
      setDialogSubmit(value);
    }
  };

  useEffect(() => {
    if (!isAuthenticated || !navigateId) return;
    dispatch(fetchSingleMyPlaylist(navigateId));
  }, [dispatch, navigateId, isAuthenticated]);
  // TODO: we need some kind of loader, but for now prevent render until we get the data
  return (
    playlistId === navigateId && (
      <div
        className={`maincontainer ${
          addSongModal ? "maincontainer-pointer" : ""
        }`}
      >
        <div className="profiledetails">
          <div className="email">{email}</div>
          <div className="otherdetails">
            <div className="otherdetails1">Here since: {registerDate}</div>
            <div className="otherdetails2">
              Amount of playlists: {playlistsOwned}
            </div>
          </div>
        </div>
        <div className="playlistimage">
          <img
            src={coverUrl}
            alt={`Playlist ${playlistName === null ? "" : playlistName} cover`}
            className="img2"
          />
          <BsThreeDotsVertical
            className="vertical-menu"
            onClick={() => {
              setOpenModel((prev) => !prev);
            }}
          />
          {openModel && <Modal handlePlaylistType={handlePlaylistType} />}
          <button className="playlist-type-btn">{playlistPrivacyType}</button>
        </div>
        <div className="playlistdetails">
          <p className="playlistname">{playlistName}</p>
          <p className="playlistcontent">
            {shouldRenderDescription && description.substring(0, 30) + "..."}
          </p>
          <div className="created-updated">
            <p>Created:{createdOn}</p>
            <p>Updated:{updatedOn === null ? "Never" : updatedOn}</p>
          </div>
        </div>
        <div className="likedislike">
          <div className="dislike">
            {dislikes}
            <RiDislikeLine />
          </div>
          <div className="like">
            {likes}
            <BiHeart />
          </div>
        </div>
        <div className="addsong">
          <IoIosAdd className="circle-icon" onClick={handleAddSongModal} />
          <p className="addsong-name">Add Song</p>
          {addSongModal && AddSongsToPlaylists && (
            <AddSongsToPlaylists
              handleAddSongModal={handleAddSongModal}
              modalPlaylistId={playlistId}
              setMyState={setMyState}
              myState={myState}
            />
          )}
        </div>
        {confirmationDialog && (
          <PlaylistTypeConfirmation
            dialogSubmit={dialogSubmit}
            handleConfirmationDialog={handleConfirmationDialog}
          />
        )}
        <div className="songsList" data-testid="song-list">
          <SongList />
        </div>
        <Comment data-testid="comment-list" />
      </div>
    )
  );
}

export default MainContainer;
