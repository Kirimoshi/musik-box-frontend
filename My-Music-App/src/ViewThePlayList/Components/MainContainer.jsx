import React, { useState, useEffect } from "react";
import { IoIosAdd } from "react-icons/io";
import { BiHeart } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiDislikeLine } from "react-icons/ri";
import { useParams } from "react-router-dom";

import "../Styles/maincontainer.css";
import {
  ProfilePlaylistName,
  ProfileContainer,
  ProfileCover,
  ProfileEmail,
  ProfileText,
  ProfileVerticalMenu,
  ProfileDescription,
  ProfileRating,
} from "./MainContainer.styles";
import MenuDropdownProfile from "./MenuDropdownProfile";
import SongList from "./SongList";
import Comment from "./Comment";
import { AddSongsToPlaylists } from "../../AddSongsToPlayLists/Components/AddSongsToPlaylists";

import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../store/user/user.selector";
import { DEFAULT_PLAYLIST_COVER, UPLOADS_URL } from "../../store/constants";
import { currentPlaylistSelector } from "../../store/myPlaylists/myPlaylists.selector";
import { fetchSingleMyPlaylist } from "../../store/myPlaylists/myPlaylists.thunks";

function MainContainer() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(userSelector);

  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [addSongModal, setAddSongModal] = useState(false);
  const [myState, setMyState] = useState(false);
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

  useEffect(() => {
    if (!isAuthenticated || !navigateId) return;
    dispatch(fetchSingleMyPlaylist(navigateId));
  }, [dispatch, navigateId, isAuthenticated]);
  // TODO: we need some kind of loader, but for now prevent render until we get the data
  return (
    playlistId === navigateId && (
      <main
        className={`maincontainer ${
          addSongModal ? "maincontainer-pointer" : ""
        }`}
      >
        <ProfileContainer className="playlist__profile">
          <ProfileEmail className="profile__email">{email}</ProfileEmail>
          <ProfileText className="profile__text--register">
            Here since: {registerDate}
          </ProfileText>
          <ProfileText className="profile__text--playlist-amount">
            Amount of playlists: {playlistsOwned}
          </ProfileText>
          <ProfileCover
            $coverUrl={coverUrl}
            role="img"
            aria-label={`Playlist "${
              playlistName === null ? "" : playlistName
            }" cover`}
            className="profile__playlist-cover"
          >
            <span className="profile__playlist-type">
              {playlistPrivacyType}
            </span>
            {/* Menu is not actually a child of image, but positioned relative to it */}
            <ProfileVerticalMenu className="profile__dropdown-menu">
              <BsThreeDotsVertical
                className="vertical-menu"
                onClick={() => {
                  setIsProfileMenuOpen((prev) => !prev);
                }}
              />
              {isAuthenticated && isProfileMenuOpen && (
                <MenuDropdownProfile
                  playlistId={playlistId}
                  setIsProfileMenuOpen={setIsProfileMenuOpen}
                  shoudRenderTypeChange={playlistPrivacyType !== "shared"}
                />
              )}
            </ProfileVerticalMenu>
          </ProfileCover>
          <ProfilePlaylistName className="profile__playlist-name">
            {playlistName}
          </ProfilePlaylistName>
          {shouldRenderDescription && (
            <ProfileDescription className="profile__description">
              {description}
            </ProfileDescription>
          )}
          <ProfileText className="profile__text--created">
            Created:&nbsp;{createdOn}
          </ProfileText>
          <ProfileText className="profile__text--updated">
            Updated:&nbsp;{updatedOn === null ? "Never" : updatedOn}
          </ProfileText>

          <ProfileRating className="profile__rating--dislike">
            {dislikes}
            <RiDislikeLine />
          </ProfileRating>
          <ProfileRating className="profile__rating--like">
            {likes}
            <BiHeart />
          </ProfileRating>
        </ProfileContainer>

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
        <div className="songsList" data-testid="song-list">
          <SongList />
        </div>
        <Comment data-testid="comment-list" />
      </main>
    )
  );
}

export default MainContainer;
