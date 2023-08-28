import React, { useState, useEffect } from "react";
import { IoIosAdd } from "react-icons/io";
import { BiHeart } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiDislikeLine } from "react-icons/ri";
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";

import "../Styles/maincontainer.css";
import SongList from "./SongList";
import Modal from "./Modal";
import Comment from "./Comment";
import { AddSongsToPlaylists } from "../../AddSongsToPlayLists/Components/AddSongsToPlaylists";
import { constants } from "../constansts";
import { PlaylistTypeConfirmation } from "./PlaylistTypeConfirmation";

import { useSelector } from "react-redux";
import { userSelector } from "../../store/user/user.selector";
import { DEFAULT_PLAYLIST_COVER, UPLOADS_URL } from "../../store/constants";

const playlistStoreEmpty = {
  data: {
    id: null,
    attributes: {
      created_on: null,
      description: null,
      logo: null,
      name: null,
      number_likes_dislikes: null,
      updated_on: null,
      playlist_type: null,
    },
    type: null,
  },
  included: [],
};

export default function MainContainer() {
  const [openModel, setOpenModel] = useState(false);
  const [addSongModal, setAddSongModal] = useState(false);
  const [playlistStore, setPlaylistStore] = useState(playlistStoreEmpty);
  const [myState, setMyState] = useState(false);
  const [playlistType, setPlaylistType] = useState("Public");
  const [confirmationDialog, setConfirmationDialog] = useState(false);
  const [dialogSubmit, setDialogSubmit] = useState("Public");
  const { id } = useParams();

  const { accessToken, isAuthenticated } = useSelector(userSelector);

  const {
    data: {
      id: playlistId,
      attributes: { description, logo, name },
    },
  } = playlistStore;
  console.log(
    "file: MainContainer.jsx:57 ~ MainContainer ~ playlistStore:",
    playlistStore
  );
  const shouldRenderDescription = description !== null;
  const coverUrl = logo
    ? `${UPLOADS_URL}/${logo.storage}/${logo.id}`
    : DEFAULT_PLAYLIST_COVER;

  const fetchPlaylistData = async () => {
    const data = await axios
      .get(constants.playlistAPI_URL + id, {
        params: { id: id },
        // TODO: there is some delay when we write/access localstorage, so i use accessToken from redux store, it always has the latest value
        // still we have to rewrite this to use thunk
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        return response.data;
      });
    return data;
  };

  useEffect(() => {
    if (!isAuthenticated) return;
    const fetchData = async () => {
      const data = await fetchPlaylistData();
      setPlaylistStore(data);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myState, isAuthenticated]);

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

  return (
    <div
      className={`maincontainer ${addSongModal ? "maincontainer-pointer" : ""}`}
    >
      <div className="profiledetails">
        <div className="email">
          {playlistStore?.included[0]?.attributes?.email}
        </div>
        <div className="otherdetails">
          <div className="otherdetails1">
            Here since:{" "}
            {moment(
              playlistStore?.included[0]?.attributes?.register_date
            ).format("DD MMM YYYY")}
          </div>
          <div className="otherdetails2">
            Amount of playlists:{" "}
            {playlistStore?.included[0]?.attributes?.playlists_number}{" "}
          </div>
        </div>
      </div>
      <div className="playlistimage">
        <img src={coverUrl} alt={`Playlist ${name} cover`} className="img2" />
        <BsThreeDotsVertical
          className="vertical-menu"
          onClick={() => {
            setOpenModel((prev) => !prev);
          }}
        />
        {openModel && <Modal handlePlaylistType={handlePlaylistType} />}
        <button className="playlist-type-btn">{playlistType}</button>
      </div>
      <div className="playlistdetails">
        <p className="playlistname">{playlistStore?.data?.attributes?.name}</p>
        <p className="playlistcontent">
          {shouldRenderDescription && description.substring(0, 30) + "..."}
        </p>
        <div className="created-updated">
          <p>
            Created:{" "}
            {moment(playlistStore?.data?.attributes?.created_on).format(
              "DD MMM YYYY"
            )}
          </p>
          <p>
            Updated:{" "}
            {moment(playlistStore?.data?.attributes?.updated_on).format(
              "DD MMM YYYY"
            )}
          </p>
        </div>
      </div>
      <div className="likedislike">
        <div className="dislike">
          {
            playlistStore?.data?.attributes?.number_likes_dislikes?.split(
              "/"
            )[0]
          }
          <RiDislikeLine />
        </div>
        <div className="like">
          {
            playlistStore?.data?.attributes?.number_likes_dislikes?.split(
              "/"
            )[1]
          }
          <BiHeart />
        </div>
      </div>
      <div className="addsong">
        <IoIosAdd className="circle-icon" onClick={handleAddSongModal} />
        <p className="addsong-name">Add Song</p>
        {addSongModal && AddSongsToPlaylists && (
          <AddSongsToPlaylists
            handleAddSongModal={handleAddSongModal}
            modalPlaylistId={playlistStore?.data?.id}
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
        {
          playlistId && <SongList playlistStore={playlistStore} /> // don`t render until we get the data
        }
      </div>
      <Comment data-testid="comment-list" />
    </div>
  );
}
