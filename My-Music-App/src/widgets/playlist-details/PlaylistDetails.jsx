import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { IoIosAdd } from 'react-icons/io';
import { BiHeart } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { RiDislikeLine } from 'react-icons/ri';
import { useParams } from 'react-router-dom';

import './maincontainer.css';
import {
  ProfilePlaylistName,
  ProfileContainer,
  ProfileCover,
  ProfileEmail,
  ProfileText,
  ProfileVerticalMenu,
  ProfileDescription,
  ProfileRating,
  Container,
} from './PlaylistDetails.styles';
import MenuDropdownProfile from '../../entities/playlist-details/ui/MenuDropdownProfile';
import SongList from './SongList';
import Comment from './Comment';
import { AddSongsToPlaylists } from '../../AddSongsToPlayLists/Components/AddSongsToPlaylists';

import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from '../../store/user/user.selector';
import {
  DEFAULT_PLAYLIST_COVER,
  FETCH_PLAYLISTS_TYPES,
  UPLOADS_URL,
} from '../../store/constants';
import { playlistDetailsSelector } from '../../store/playlist-details/playlist-details.selector';
import { fetchPlaylistDetails } from '../../store/playlist-details/playlist-details.thunks';

function PlaylistDetails({ playlistTypeToDisplay }) {
  const dispatch = useDispatch();
  const { isAuthenticated, isRehydrated } = useSelector(userSelector);
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
  } = useSelector(playlistDetailsSelector);
  const shoudRenderKebabMenu =
    isAuthenticated && playlistTypeToDisplay === FETCH_PLAYLISTS_TYPES.MY;
  const shouldRenderDescription = description !== null;
  const coverUrl = logo
    ? `${UPLOADS_URL}/${logo.storage}/${logo.id}`
    : DEFAULT_PLAYLIST_COVER;

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
  // TODO: we need some kind of loader, but for now prevent render until we get the data
  return (
    playlistId === navigateId && (
      <Container className={`${addSongModal ? 'maincontainer-pointer' : ''}`}>
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
            <span className='profile__playlist-type'>
              {playlistPrivacyType}
            </span>
            {/* Menu is not actually a child of image, but positioned relative to it */}
            {shoudRenderKebabMenu && (
              <ProfileVerticalMenu className='profile__dropdown-menu'>
                <BsThreeDotsVertical
                  className='vertical-menu'
                  onClick={() => {
                    setIsProfileMenuOpen((prev) => !prev);
                  }}
                />
                {isAuthenticated && isProfileMenuOpen && (
                  <MenuDropdownProfile
                    playlistId={playlistId}
                    setIsProfileMenuOpen={setIsProfileMenuOpen}
                    shoudRenderTypeChange={playlistPrivacyType !== 'shared'}
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
          <ProfileText className='profile__text--updated'>
            Updated:&nbsp;{updatedOn === null ? 'Never' : updatedOn}
          </ProfileText>

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
        <div className='songsList' data-testid='song-list'>
          <SongList shoudRenderKebabMenu={shoudRenderKebabMenu} />
        </div>
        <Comment data-testid='comment-list' />
      </Container>
    )
  );
}

PlaylistDetails.propTypes = {
  playlistTypeToDisplay: PropTypes.string.isRequired,
};

export default PlaylistDetails;
