import React, { useEffect, useState, useCallback } from "react";
import { AiOutlineSearch, AiFillPlusCircle } from "react-icons/ai";
import { toast } from "react-toastify";

import "./maincontainermyplaylists.css";
import { useDispatch, useSelector } from "react-redux";
import { userSelector, errorSelector } from "../../store/user/user.selector";
import {
  myPlaylistErrorSelector,
  myPlaylistLoadingSelector,
} from "../../store/myPlaylists/myPlaylists.selector";
import {
  fetchPageOfMyPlaylists,
  addMyPlaylist,
} from "../../store/myPlaylists/myPlaylists.thunks";
import {
  Container,
  ContentWrapper,
  InputWrapper,
} from "../public-playlists/PublicPLaylists.styles";
import Header from "../../shared/ui/header/Header";
import InputComponent from "../../shared/ui/input/Input";
import MyPlaylistsList from "../../entities/my-playlists/ui/my-playlists-list/MyPlaylistsList";
import ModalForm from "../../features/my-playlists/ModalForm";
import {
  baseToastConfig,
  OneLineMessage,
} from "../../shared/Toasts";


function MyPlaylists() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(userSelector);
  const error = useSelector(errorSelector);
  const toastId = React.useRef(null);

  const playlistErr = useSelector(myPlaylistErrorSelector);
  const loading = useSelector(myPlaylistLoadingSelector);

  const [isCreatePlaylistCliked, setIsCreatePlaylistCliked] = useState(false);
  
  useEffect(() => {
    if (!isAuthenticated) return;
    dispatch(fetchPageOfMyPlaylists("1")); // TODO: "1" is a magic number for page of playlists, do we need implement pagination?
  }, [dispatch, isAuthenticated]);
  useEffect(() => {
    if (error) console.error(error);
  }, [error]);

  const notify = useCallback(() => {
    toastId.current = toast(
      <OneLineMessage message="Creating playlist..." />,
      baseToastConfig
    );
  }, []);
  
  const notifyError = useCallback(() => {
    toast.update(toastId.current, {
      type: toast.TYPE.ERROR,
      autoClose: 2000,
      render: (
        <OneLineMessage message="Oops, looks like something went wrong." />
      ),
    });
  }, []);

  const notifySuccess = useCallback(() => {
    toast.update(toastId.current, {
      type: toast.TYPE.SUCCESS,
      autoClose: 2000,
      render: <OneLineMessage message="Playlist successfully created :)" />,
    });
  }, []);

  useEffect(() => {
    if (isCreatePlaylistCliked && loading) {
      notify();
    }
    if (isCreatePlaylistCliked && !loading && playlistErr) {
      notifyError();
      setIsCreatePlaylistCliked(false);
    }
    if (isCreatePlaylistCliked && !loading && !playlistErr) {
      notifySuccess();
      setIsCreatePlaylistCliked(false);
    }
  }, [
    isCreatePlaylistCliked,
    loading,
    playlistErr,
    notify,
    notifyError,
    notifySuccess,
  ]);

  const [searchString, setSearchString] = useState("");
  const [isModalFormOpen, setIsModalFormOpen] = useState(false);

  const handleOpenForm = () => setIsModalFormOpen(true);

  const handleCloseForm = () => setIsModalFormOpen(false);

  const handlerCreatePlaylist = ({ formData }) => {
    setIsCreatePlaylistCliked(true);
    dispatch(addMyPlaylist(formData));
  };

  const handleSearchStringChange = (e) => {
    const newSearchString = e.target.value;
    setSearchString(newSearchString.trim().toLowerCase());
  };

  return (
    <>
      <Container>
        {isModalFormOpen && (
          <ModalForm
            className="modal__create-playlist"
            options={{
              isModalFormOpen,
              onAction: handlerCreatePlaylist,
              onClose: handleCloseForm,
              modalPlaylistId: null,
              playlist: null,
              modalTitle: "Create playlist",
              actionButtonText: "Create",
            }}
          />
        )}
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
              onClick={handleOpenForm}
              data-testid="newplaylist-btn"
              className="newplaylist-btn"
            />
            <div className="newplaylist-txt">New playlist</div>
          </div>
          <div className="division" />
          <MyPlaylistsList searchString={searchString} />
        </ContentWrapper>
      </Container>
    </>
  );
}

export default MyPlaylists;
