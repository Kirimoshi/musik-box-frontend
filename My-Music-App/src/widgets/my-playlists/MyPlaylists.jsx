import React, { useEffect, useState } from "react";
import { AiOutlineSearch, AiFillPlusCircle } from "react-icons/ai";

import { CreateOrModifyPlaylist } from "../../CreateOrModifyPlaylist/components/CreateOrModifyPlaylist";
import "./maincontainermyplaylists.css";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../store/user/user.selector";
import { myPlaylistErrorSelector } from "../../store/myPlaylists/myPlaylists.selector";
import { fetchPageOfMyPlaylists } from "../../store/myPlaylists/myPlaylists.thunks";
import {
  Container,
  ContentWrapper,
  InputWrapper,
} from "../public-playlists/PublicPLaylists.styles";
import Header from "../../shared/ui/header/Header";
import InputComponent from "../../shared/ui/input/Input";
import MyPlaylistsList from "../../entities/my-playlists/ui/my-playlists-list/MyPlaylistsList";

function MyPlaylists() {
  // ------------------------------------------ PREVIOUS CODE ------------------------------------------
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(userSelector);
  const error = useSelector(myPlaylistErrorSelector);

  useEffect(() => {
    if (!isAuthenticated) return;
    dispatch(fetchPageOfMyPlaylists("1")); // TODO: "1" is a magic number for page of playlists, do we need implement pagination?
  }, [dispatch, isAuthenticated]);
  useEffect(() => {
    if (error) console.error(error);
  }, [error]);

  // TODO: Shoud we implement search functionality? There is no endpoint for it
  const [searchString, setSearchString] = useState("");
  const handleSearchStringChange = (e) => {
    const newSearchString = e.target.value;
    setSearchString(newSearchString.trim().toLowerCase());
  };

  // ------------------------------------------ UNREFACTORED CODE ------------------------------------------
  const [createNewPlaylistModal, setCreateNewPlaylistModal] = useState(false);
  const handleCreatePlaylistModal = () => {
    setCreateNewPlaylistModal(!createNewPlaylistModal);
  };

  return (
    <>
      <Container>
        <ContentWrapper>
          <Header title="My Playlists" />
          <InputWrapper>
            <InputComponent
              type={"search"}
              placeholder={"Type something"}
              name={"search-bar"}
              onChange={handleSearchStringChange}
              data-input-id="search-bar"
            />
            <AiOutlineSearch
              className="search-bar-icon"
              data-search-id="search-bar-icon"
            />
          </InputWrapper>
          <div className="newplaylist-wrapper">
            <AiFillPlusCircle
              onClick={handleCreatePlaylistModal}
              data-testid="newplaylist-btn"
              className="newplaylist-btn"
            />
            <div className="newplaylist-txt">New playlist</div>
          </div>
          <div className="division" />
          {createNewPlaylistModal && (
            <CreateOrModifyPlaylist
              modalValue="New Playlist"
              modalPlaylistId={null}
              handleCreateOrModifyPlaylistModal={handleCreatePlaylistModal}
            />
          )}
          <MyPlaylistsList searchString={searchString} />
        </ContentWrapper>
      </Container>
    </>
  );
}

export default MyPlaylists;
