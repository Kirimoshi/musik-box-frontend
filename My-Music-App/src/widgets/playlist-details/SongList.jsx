import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { PiDotBold } from 'react-icons/pi';

import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from '../../store/user/user.selector';
import { UPLOADS_URL } from '../../store/constants';

import ModalDialog from '../../shared/ModalDialog';
import { playlistDetailsSelector } from '../../store/playlist-details/playlist-details.selector';
import { deleteSongFromPlaylist } from '../../store/playlist-details/playlist-details.thunks';
import {
  SongsContainer,
  SongItem,
  Song,
  SongCard,
  SongCover,
  SongArtistInfo,
  SongTitle,
  SongInfo,
  VerticalMenu,
  DeleteModal,
  DeleteTag,
  SongImgWrapper,
} from './SongList.styles';
import { capitalizeWords } from '../../store/helpers';

function SongList({ shouldRenderKebabMenu, shouldRenderAddedBy }) {
  // state
  const dispatch = useDispatch();
  const {
    isAuthenticated,
    credentials: { nickname },
  } = useSelector(userSelector);
  const { songs } = useSelector(playlistDetailsSelector);

  const [openModel, setOpenModel] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idSongToDelete, setIdSongToDelete] = useState(null);

  // Handlers
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlerRemove = () => {
    if (!idSongToDelete || !isAuthenticated) return;

    try {
      dispatch(deleteSongFromPlaylist(idSongToDelete));
    } catch (error) {
      console.error(error);
    }

    setOpenModel(null);
  };

  const handleDeleteSong = (songId) => {
    setIdSongToDelete(songId);
    handleOpenModal();
  };

  const verticalMenuToggle = (x) => {
    if (x === openModel) {
      setOpenModel(null);
    } else {
      setOpenModel(x);
    }
  };

  return (
    <div className='SongList'>
      <ModalDialog
        options={{
          isModalOpen,
          actionButtonText: 'Remove Song',
          closeButtonText: 'Cancel',
          title:
            'Are you sure you want to remove this song from playlist? You will not be able to restore it.',
          onAction: handlerRemove,
          onClose: handleCloseModal,
        }}
      />
      <SongsContainer>
        {songs.map(
          ({ id, attributes: { title, artists, cover, added_by, album } }) => {
            return (
              <SongItem key={id} data-song-id={id}>
                <Song>
                  <SongCard>
                    <SongImgWrapper>
                      <SongCover
                        src={
                          cover
                            ? `${UPLOADS_URL}/${cover.storage}/${cover.id}`
                            : require('../../shared/assets/default_song_cover.png')
                        }
                        alt='song cover'
                      />
                    </SongImgWrapper>
                    <SongArtistInfo className='SongList__artistInfo'>
                      <SongTitle>
                        <p>{title}</p>
                      </SongTitle>
                      <SongInfo>
                        <p>{album}</p>
                        <PiDotBold />
                        <p>{artists.join(', ')}</p>
                      </SongInfo>
                      {shouldRenderAddedBy && (
                        <SongInfo>
                          <p>Added by {capitalizeWords(added_by)}</p>
                        </SongInfo>
                      )}
                    </SongArtistInfo>
                  </SongCard>
                  <VerticalMenu>
                    {(shouldRenderKebabMenu ||
                      (shouldRenderAddedBy && nickname === added_by)) && (
                      <BsThreeDotsVertical
                        onClick={() => {
                          verticalMenuToggle(id);
                        }}
                      />
                    )}
                    {openModel === id && (
                      <DeleteModal>
                        {
                          <DeleteTag onClick={() => handleDeleteSong(id)}>
                            <RiDeleteBin6Line />
                            <span>Remove song from playlist</span>
                          </DeleteTag>
                        }
                      </DeleteModal>
                    )}
                  </VerticalMenu>
                </Song>
              </SongItem>
            );
          }
        )}
      </SongsContainer>
    </div>
  );
}

SongList.propTypes = {
  shouldRenderKebabMenu: PropTypes.bool.isRequired,
  shouldRenderAddedBy: PropTypes.bool.isRequired,
};

export default SongList;
