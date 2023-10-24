import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { IoIosAdd } from 'react-icons/io';
import { BiHeart } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { RiDislikeLine } from 'react-icons/ri';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { baseToastConfig, OneLineMessage } from '../../shared/Toasts';
import './maincontainer.css';
import {
  Container,
  ProfileContainer,
  ProfileCover,
  ProfileDescription,
  ProfileEmail,
  ProfilePlaylistName,
  ProfileRating,
  ProfileText,
  ProfileVerticalMenu,
} from './PlaylistDetails.styles';
import MenuDropdownProfile from '../../entities/playlist-details/menu-dropdown-profile/ui/MenuDropdownProfile';
import SongList from './SongList';
import CommentList from '../../entities/playlist-details/comment-list/ui/CommentList';
import { AddSongsToPlaylists } from '../../AddSongsToPlayLists/Components/AddSongsToPlaylists';

import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from '../../store/user/user.selector';
import {
  FETCH_PLAYLISTS_TYPES,
  PLAYLIST_PRIVACY_TYPES,
  UPLOADS_URL,
} from '../../store/constants';
import {
  playlistDetailsErrorSelector,
  playlistDetailsLoadingSelector,
  playlistDetailsSelector,
} from '../../store/playlist-details/playlist-details.selector';
import {
  editPlaylistDetails,
  fetchPlaylistDetails,
} from '../../store/playlist-details/playlist-details.thunks';
import ModalForm from '../../features/my-playlists/ModalForm';

function PlaylistDetails({ playlistTypeToDisplay }) {
  const dispatch = useDispatch();
  const { isAuthenticated, isRehydrated } = useSelector(userSelector);
  const toastId = React.useRef(null);
  const playlistErr = useSelector(playlistDetailsErrorSelector);
  const loading = useSelector(playlistDetailsLoadingSelector);
  const [isEditPlaylistCliked, setIsEditPlaylistCliked] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isModalFormOpen, setIsModalFormOpen] = useState(false);
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
  } = useSelector(playlistDetailsSelector);
  const shouldRenderKebabMenu =
    isAuthenticated && playlistTypeToDisplay === FETCH_PLAYLISTS_TYPES.MY;
  const shouldRenderDescription = description !== null;
  const shouldRenderAddSongButton =
    playlistTypeToDisplay !== FETCH_PLAYLISTS_TYPES.PUBLIC;
  const sharedPlaylistClass =
    playlistPrivacyType === PLAYLIST_PRIVACY_TYPES.SHARED
      ? 'profile__playlist-type--shared'
      : '';
  const coverUrl = logo
    ? `${UPLOADS_URL}/${logo.storage}/${logo.id}`
    : require('../../shared/assets/default_playlist_cover.jpg');

  const handleAddSongModal = () => {
    setAddSongModal(!addSongModal);
  };

  useEffect(() => {
    if (!navigateId || !playlistTypeToDisplay) return; // guard clause
    if (!isRehydrated && !isAuthenticated) return; // rehydrate still in progress, auth state not yet available
    dispatch(
      fetchPlaylistDetails({
        playlistId: navigateId,
        playlistTypeToDisplay,
      })
    );
  }, [
    dispatch,
    navigateId,
    isAuthenticated,
    playlistTypeToDisplay,
    isRehydrated,
  ]);

  const notify = useCallback(() => {
    toastId.current = toast(
      <OneLineMessage message='Editing playlist...' />,
      baseToastConfig
    );
  }, []);

  const notifyError = useCallback(() => {
    toast.update(toastId.current, {
      type: toast.TYPE.ERROR,
      autoClose: 2000,
      render: (
        <OneLineMessage message='Oops, looks like something went wrong.' />
      ),
    });
  }, []);

  const notifySuccess = useCallback(() => {
    toast.update(toastId.current, {
      type: toast.TYPE.SUCCESS,
      autoClose: 2000,
      render: <OneLineMessage message='Successfully added to playlist :)' />,
    });
  }, []);

  useEffect(() => {
    if (isEditPlaylistCliked && loading) {
      notify();
    }
    if (isEditPlaylistCliked && !loading && playlistErr) {
      notifyError();
      setIsEditPlaylistCliked(false);
    }
    if (isEditPlaylistCliked && !loading && !playlistErr) {
      notifySuccess();
      setIsEditPlaylistCliked(false);
    }
  }, [
    isEditPlaylistCliked,
    loading,
    playlistErr,
    notify,
    notifyError,
    notifySuccess,
  ]);

  function handleOpenForm() {
    setIsModalFormOpen(true);
  }

  const handleCloseForm = () => setIsModalFormOpen(false);
  const handlerEditPlaylist = (data) => {
    setIsEditPlaylistCliked(true);
    dispatch(editPlaylistDetails(data));
    setIsProfileMenuOpen(false);
  };

  // TODO: we need some kind of loader, but for now prevent render until we get the data
  return (
    playlistId === navigateId && (
      <Container className={`${addSongModal ? 'maincontainer-pointer' : ''}`}>
        {isModalFormOpen && (
          <ModalForm
            className='modal__edit-playlist'
            options={{
              isModalFormOpen,
              onAction: handlerEditPlaylist,
              onClose: handleCloseForm,
              modalPlaylistId: playlistId,
              playlist: {
                attributes: {
                  logo,
                  name: playlistName,
                  description,
                },
              },
              modalTitle: 'Edit playlist',
              actionButtonText: 'Edit',
            }}
          />
        )}
        <ProfileContainer className='playlist__profile'>
          <ProfileEmail className='profile__email'>{email}</ProfileEmail>
          <ProfileText className='profile__text--register'>
            Here since: {registerDate}
          </ProfileText>
          <ProfileText className='profile__text--playlist-amount'>
            Amount of playlists: {playlistsOwned}
          </ProfileText>
          <ProfileCover
            $coverUrl={coverUrl}
            role='img'
            aria-label={`Playlist "${
              playlistName === null ? '' : playlistName
            }" cover`}
            className='profile__playlist-cover'
          >
            <span className={`profile__playlist-type ${sharedPlaylistClass}`}>
              {playlistPrivacyType}
            </span>
            {/* Menu is not actually a child of image, but positioned relative to it */}
            {shouldRenderKebabMenu && (
              <ProfileVerticalMenu className='profile__dropdown-menu'>
                <BsThreeDotsVertical
                  className='vertical-menu'
                  onClick={() => {
                    setIsProfileMenuOpen((prev) => !prev);
                  }}
                />
                {isAuthenticated && isProfileMenuOpen && (
                  <MenuDropdownProfile
                    handleOpenForm={handleOpenForm}
                    playlistId={playlistId}
                    setIsProfileMenuOpen={setIsProfileMenuOpen}
                    shouldRenderTypeChange={playlistPrivacyType !== 'shared'}
                  />
                )}
              </ProfileVerticalMenu>
            )}
          </ProfileCover>
          <ProfilePlaylistName className='profile__playlist-name'>
            {playlistName}
          </ProfilePlaylistName>
          {shouldRenderDescription && (
            <ProfileDescription className='profile__description'>
              {description}
            </ProfileDescription>
          )}
          <ProfileText className='profile__text--created'>
            Created:&nbsp;{createdOn}
          </ProfileText>
          {updatedOn !== null && (
            <ProfileText className='profile__text--updated'>
              Updated:&nbsp;{updatedOn}
            </ProfileText>
          )}
          <ProfileRating className='profile__rating--dislike'>
            {dislikes}
            <RiDislikeLine />
          </ProfileRating>
          <ProfileRating className='profile__rating--like'>
            {likes}
            <BiHeart />
          </ProfileRating>
        </ProfileContainer>

        {/* After song refactoring in task EPMRDPEMAP-335 we need to move songs to corresponding entities folder */}
        {shouldRenderAddSongButton && (
          <div className='addsong'>
            <IoIosAdd className='circle-icon' onClick={handleAddSongModal} />
            <p className='addsong-name'>Add Song</p>
            {addSongModal && AddSongsToPlaylists && (
              <AddSongsToPlaylists
                handleAddSongModal={handleAddSongModal}
                modalPlaylistId={playlistId}
                setMyState={setMyState}
                myState={myState}
              />
            )}
          </div>
        )}
        <div className='songsList' data-testid='song-list'>
          <SongList shouldRenderKebabMenu={shouldRenderKebabMenu} />
        </div>
        <CommentList data-testid='comment-list' />
      </Container>
    )
  );
}

PlaylistDetails.propTypes = {
  playlistTypeToDisplay: PropTypes.string.isRequired,
};

export default PlaylistDetails;
