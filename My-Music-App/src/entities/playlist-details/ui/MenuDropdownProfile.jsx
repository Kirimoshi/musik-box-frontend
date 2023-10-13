import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { RiPencilFill, RiDeleteBin6Line } from 'react-icons/ri';

import {
  MenuContainer,
  MenuDivider,
  MenuItem,
} from './MenuDropdownProfile.styles';
import ModalDialog from '../../../shared/ModalDialog';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  PlaylistTypeChangeErrorMessage,
  PlaylistTypeChangePendingMessage,
  PlaylistTypeChangeSuccessMessage,
  baseToastConfig,
} from '../../../shared/Toasts';
import { deleteMyPlaylist } from '../../../store/myPlaylists/myPlaylists.thunks';
import { changePlaylistType } from '../../../store/playlist-details/playlist-details.thunks';
import { PLAYLIST_PRIVACY_TYPES } from '../../../store/constants';
import {
  playlistDetailsErrorSelector,
  playlistDetailsLoadingSelector,
} from '../../../store/playlist-details/playlist-details.selector';

function MenuDropdownProfile({
  playlistId,
  setIsProfileMenuOpen,
  shouldRenderTypeChange,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector(playlistDetailsLoadingSelector);
  const error = useSelector(playlistDetailsErrorSelector);
  const [isMenuItemClicked, setIsMenuItemClicked] = useState(false);
  const [modalOptions, setModalOptions] = useState({
    isModalOpen: false,
    actionButtonText: '',
    closeButtonText: '',
    title: '',
    onClose: () => {},
    onAction: () => {},
  });

  const toastId = useRef(null);
  const notify = useCallback(() => {
    toastId.current = toast(
      <PlaylistTypeChangePendingMessage />,
      baseToastConfig
    );
  }, []);
  const notifyError = useCallback(() => {
    toast.update(toastId.current, {
      type: toast.TYPE.ERROR,
      autoClose: 1000,
      render: <PlaylistTypeChangeErrorMessage />,
    });
  }, []);

  const notifySuccess = useCallback(() => {
    toast.update(toastId.current, {
      type: toast.TYPE.SUCCESS,
      autoClose: 1000,
      render: <PlaylistTypeChangeSuccessMessage />,
    });
  }, []);

  useEffect(() => {
    if (isMenuItemClicked && loading) {
      notify();
    }
    if (isMenuItemClicked && !loading && error) {
      notifyError();
      setIsMenuItemClicked(false);
    }
    if (isMenuItemClicked && !loading && !error) {
      notifySuccess();
      setIsMenuItemClicked(false);
      setIsProfileMenuOpen(false);
    }
  }, [
    error,
    isMenuItemClicked,
    loading,
    notify,
    notifyError,
    notifySuccess,
    setIsProfileMenuOpen,
  ]);

  const handleCloseModal = () =>
    setModalOptions({ ...modalOptions, isModalOpen: false });

  const handleDeletePlaylist = () => {
    dispatch(deleteMyPlaylist(playlistId));
    navigate('/');
  };

  const handleTypeChange = (type) => () => {
    setIsMenuItemClicked(true);
    dispatch(changePlaylistType(type));
  };

  const handleDeleteClick = () => {
    setModalOptions({
      isModalOpen: true,
      actionButtonText: 'Delete playlist',
      closeButtonText: 'Cancel',
      title:
        'Are you sure you want to delete this playlist? You will not be able to restore it.',
      onClose: handleCloseModal,
      onAction: handleDeletePlaylist,
    });
  };

  const handleTypeChangeClick = (type) => () => {
    setModalOptions({
      isModalOpen: true,
      actionButtonText: 'Change',
      closeButtonText: 'Cancel',
      title: `Are you sure you want to change this playlist to ${
        type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()
      }?`,
      onClose: handleCloseModal,
      onAction: handleTypeChange(type),
    });
  };

  return (
    <>
      <ModalDialog
        className='profile-menu__modal--delete'
        options={modalOptions}
      />
      <MenuContainer className='profile-menu'>
        <MenuItem onClick={handleDeleteClick} className='profile-menu__delete'>
          <RiDeleteBin6Line /> Delete playlist
        </MenuItem>
        <MenuDivider />
        <MenuItem className='profile-menu__edit'>
          <RiPencilFill /> Edit
        </MenuItem>
        {shouldRenderTypeChange && (
          <>
            <MenuDivider />
            <MenuItem
              onClick={handleTypeChangeClick(PLAYLIST_PRIVACY_TYPES.PRIVATE)}
              className='profile-menu__change-type--private'
            >
              Make Private
            </MenuItem>
            <MenuItem
              onClick={handleTypeChangeClick(PLAYLIST_PRIVACY_TYPES.SHARED)}
              className='profile-menu__change-type--shared'
            >
              Make Shared
            </MenuItem>
            <MenuItem
              onClick={handleTypeChangeClick(PLAYLIST_PRIVACY_TYPES.PUBLIC)}
              className='profile-menu__change-type--public'
            >
              Make Public
            </MenuItem>
          </>
        )}
      </MenuContainer>
    </>
  );
}

MenuDropdownProfile.propTypes = {
  playlistId: PropTypes.string.isRequired,
  setIsProfileMenuOpen: PropTypes.func.isRequired,
  shouldRenderTypeChange: PropTypes.bool.isRequired,
};

export default MenuDropdownProfile;
