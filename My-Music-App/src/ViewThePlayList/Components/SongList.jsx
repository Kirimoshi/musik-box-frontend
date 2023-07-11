import React, { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';

import Songs from './Songs';
import '../Styles/songlist.css';
export default function SongList() {
  // state
  const [openModel, setOpenModel] = useState(null);
  const [Songs, setSongs] = useState(structuredClone(mockedSongs));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idSongToDelete, setIdSongToDelete] = useState(null);

  // Handlers
  // Open modal handler just swith the state of modal inside Modal component
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  // This callback gonna be called when the user click on the cancel button
  // inside the modal, and this will update isModalOpen state to false
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // this callback will be called when the user click on the remove button
  const handlerRemove = () => {
    if (!idSongToDelete) return;
    console.log('idSongToDelete:', idSongToDelete);
    const newSongs = Songs.filter((song) => song.id !== idSongToDelete);
    setSongs(newSongs);
    setOpenModel(null);
  };

  // First call from SongList with the id of the song to delete
  const handleDeleteSong = (songId) => {
    console.log('songId:', songId);
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
  // Element
  return (
    <div className='SongList'>
      <div className='songsContainer'>
        {Songs &&
          Songs.map((song, index) => (
            <div className='songs' key={song.id}>
              <div className='song'>
                <div className='imageBox-artistinfo'>
                  <img src={song.picture} alt='song preview' className='image1' />
                  <div className='artistInfo'>
                    <p>{song.title}</p>
                    <p>{song.artist}</p>
                  </div>
                </div>
                <div className='songlist-vertical-menu'>
                  <BsThreeDotsVertical
                    onClick={() => {
                      handleClick(song.id);
                    }}
                  />
                  {openModel === song.id && (
                    <div className='delete-modal'>
                      <div onClick={someThing} className='delete-tag'>
                        <RiDeleteBin6Line className='delete-button' />
                        <p>Remove song from playlist</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
