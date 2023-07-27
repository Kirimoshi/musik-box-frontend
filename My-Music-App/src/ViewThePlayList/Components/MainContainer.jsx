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

export default function MainContainer() {
  const [openModel, setOpenModel] = useState(false);
  const [addSongModal, setAddSongModal] = useState(false);
  const [playlistStore, setPlaylistStore] = useState(null);
  const { id } = useParams();

  const fetchPlaylistData = async () => {
    const data = await axios
      .get(constants.playlistAPI_URL + id, {
        params: { id: id },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((response) => {
        return response.data;
      });
    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlaylistData();
      setPlaylistStore(data);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddSongModal = () => {
    setAddSongModal(!addSongModal);
  };
  return (
    <div
      className={`maincontainer ${addSongModal ? "maincontainer-pointer" : ""}`}
    >
      <div className="profiledetails">
        <div className="email">
          {/* {playlistStore?.included[0]?.attributes !== undefined && playlistStore.included[0].attributes.email } */}
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
        <img
          src={constants.store_URL + playlistStore?.data?.attributes?.logo.id}
          alt=""
          className="img2"
        ></img>
        <BsThreeDotsVertical
          className="vertical-menu"
          onClick={() => {
            setOpenModel((prev) => !prev);
          }}
        />
        {openModel && <Modal />}
        <button className="playlist-type-btn">Public</button>
      </div>
      <div className="playlistdetails">
        <p className="playlistname">{playlistStore?.data?.attributes?.name}</p>
        <p className="playlistcontent">
          {playlistStore?.data?.attributes?.description?.substring(0, 30) +
            "..."}
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
          <AddSongsToPlaylists handleAddSongModal={handleAddSongModal} />
        )}
      </div>
      <div className="songsList" data-testid="song-list">
        <SongList playlistStore={playlistStore} />
      </div>
      <Comment data-testid="comment-list" />
    </div>
  );
}
