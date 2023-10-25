import React, { useState, useRef, useEffect, useCallback } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import { IoAddSharp } from 'react-icons/io5';
import { PiDotBold } from 'react-icons/pi';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { baseToastConfig, OneLineMessage } from '../../shared/Toasts';
import closeLogo from '../../shared/assets/closeLogo.svg';
import defaultAlbumCover from '../../shared/assets/default_album_cover.jpg';
import { UPLOADS_URL } from '../../store/constants';
import { addSongToPlaylist } from '../../store/playlist-details/playlist-details.thunks';
import {
  playlistDetailsLoadingSelector,
  playlistDetailsErrorSelector,
} from '../../store/playlist-details/playlist-details.selector';
import {
  findSongs,
  removeSongFromList,
} from '../../store/addSongsModal/addSongsModal.thunks';
import {
  listOfSongsSelector,
  lastPageSelector,
} from '../../store/addSongsModal/addSongsModal.selector';

import {
  ModalContainer,
  Header,
  Title,
  CloseButton,
  CrossSvg,
  SearchBarWrapper,
  SearchBarInput,
  SearchBarIcon,
  AddSongsMain,
  AddSongsTitle,
  SongList,
  SongItem,
  SongImgWrapper,
  SongImg,
  SongArtistInfo,
  SongTitle,
  SongInfo,
  AddSongIcon,
  WarningMessage,
} from './AddSongsToPlaylists.styles';
import Pagination from '../../shared/Pagination';

function AddSongsToPlaylists({ options }) {
  const dispatch = useDispatch();
  const { isAddSongModalOpen, onClose, modalPlaylistId } = options;
  const toastId = React.useRef(null);
  const playlistErr = useSelector(playlistDetailsErrorSelector);
  const loading = useSelector(playlistDetailsLoadingSelector);
  const AddSongModalRef = useRef(null);

  // monitoring isOpen prop to open/close the modal
  useEffect(() => {
    if (isAddSongModalOpen) {
      AddSongModalRef.current.showModal();
    } else {
      AddSongModalRef.current.close();
    }
  }, [isAddSongModalOpen]);

  const songs = useSelector(listOfSongsSelector);
  const [searchSong, setSearchSong] = useState('');
  const [isAddSongCliked, setIsAddSongCliked] = useState(false);
  const [page, setPage] = useState(1);
  const perPage = 5;
  const last = useSelector(lastPageSelector);

  const handleSearch = (e) => {
    setSearchSong(e.target.value);
  };

  const handleFindSongs = async () => {
    dispatch(findSongs({ page, perPage, searchSong }));
  };

  const postSongsData = (id) => {
    const song = songs.find((song) => song.id === id);
    dispatch(
      addSongToPlaylist({ song_id: id, playlist_id: modalPlaylistId, song })
    );
    dispatch(removeSongFromList(id));
  };

  useEffect(() => {
    handleFindSongs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const notify = useCallback(() => {
    toastId.current = toast(
      <OneLineMessage message='Adding song...' />,
      baseToastConfig
    );
  }, []);

  const notifyError = useCallback((error) => {
    toast.update(toastId.current, {
      type: toast.TYPE.ERROR,
      autoClose: 2000,
      render: (
        <OneLineMessage
          message={
            error.message.includes('422')
              ? 'This song is already in the playlist.'
              : 'Oops, looks like something went wrong.'
          }
        />
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const notifySuccess = useCallback(() => {
    toast.update(toastId.current, {
      type: toast.TYPE.SUCCESS,
      autoClose: 2000,
      render: <OneLineMessage message='Successfully added to playlist :)' />,
    });
  }, []);

  useEffect(() => {
    if (isAddSongCliked && loading) {
      notify(playlistErr);
    }
    if (isAddSongCliked && !loading && playlistErr) {
      notifyError(playlistErr);
      setIsAddSongCliked(false);
    }
    if (isAddSongCliked && !loading && !playlistErr) {
      notifySuccess();
      setIsAddSongCliked(false);
    }
  }, [
    isAddSongCliked,
    loading,
    playlistErr,
    notify,
    notifyError,
    notifySuccess,
  ]);

  const handleAddSong = (id) => {
    setIsAddSongCliked(true);
    postSongsData(id);
  };
  const handleSearchSongs = (e) => {
    e.preventDefault();
    setPage(1);
    handleFindSongs();
  };

  const onPageChange = useCallback(
    (changeDirection) => {
      if (changeDirection === 'left' && page !== 1) {
        setPage(page - 1);
      }
      if (changeDirection === 'right' && page < last) {
        setPage(page + 1);
      }
    },
    [page, last]
  );

  return (
    <ModalContainer
      ref={AddSongModalRef}
      className='addSongsToPlaylistsModal__container'
    >
      <Header className='addsongs-header'>
        <Title>Songs</Title>
        <CloseButton onClick={onClose}>
          <CrossSvg src={closeLogo} alt='button to close modal' />
        </CloseButton>
      </Header>
      <SearchBarWrapper>
        <SearchBarInput
          type='text'
          placeholder='Type something'
          value={searchSong}
          onChange={handleSearch}
        />
        <SearchBarIcon type='submit' onClick={handleSearchSongs}>
          <IoSearchSharp size='24' />
        </SearchBarIcon>
      </SearchBarWrapper>
      <AddSongsMain>
        <AddSongsTitle>
          <p>
            {searchSong ? `Search query - "${searchSong}"` : 'Most Popular'}
          </p>
        </AddSongsTitle>
        <SongList className='addsongs-songlist'>
          {songs &&
            songs.map(({ id, attributes: { cover, title, artist } }) => (
              <SongItem className='addsong-item' key={id}>
                <SongImgWrapper className='addsong-song-item-img'>
                  <SongImg
                    src={
                      cover
                        ? `${UPLOADS_URL}/${cover.storage}/${cover.id}`
                        : defaultAlbumCover
                    }
                    alt='song preview'
                    className='addsong-song-img'
                  />
                </SongImgWrapper>
                <SongArtistInfo>
                  <SongTitle>
                    <p>{title}</p>
                  </SongTitle>
                  <SongInfo>
                    <p>artist {artist}</p>
                    <PiDotBold />
                    <p>album</p>
                  </SongInfo>
                </SongArtistInfo>
                <AddSongIcon>
                  <IoAddSharp
                    size='24'
                    className='addsong-item-icon'
                    onClick={() => handleAddSong(id)}
                  />
                </AddSongIcon>
              </SongItem>
            ))}
          {songs.length === 0 && (
            <WarningMessage>There is nothing left...</WarningMessage>
          )}
        </SongList>
        {last !== 1 && (
          <Pagination
            handleClick={onPageChange}
            isLeftActive={!loading && page !== 1}
            isRightActive={!loading && page < last}
            magrinBottom='0'
          />
        )}
      </AddSongsMain>
    </ModalContainer>
  );
}

AddSongsToPlaylists.propTypes = {
  options: PropTypes.shape({
    isAddSongModalOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    modalPlaylistId: PropTypes.string,
  }).isRequired,
};

export default AddSongsToPlaylists;
