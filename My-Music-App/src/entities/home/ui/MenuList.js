import React from 'react';
import { MdMusicNote } from 'react-icons/md';
import { BiShareAlt } from 'react-icons/bi';
import { RiPlayListFill } from 'react-icons/ri';
import { FaUserFriends } from 'react-icons/fa';
import PropTypes from 'prop-types';
import paths from '../../../router/paths';

const { myPlaylists, publicPlaylists, sharedPlaylists, friends } = paths;

const MenuList = [
  {
    id: 1,
    icon: <MdMusicNote />,
    name: 'My Playlists',
    isAuthOnly: true,
    path: myPlaylists,
  },
  {
    id: 2,
    icon: <BiShareAlt />,
    name: 'Shared Playlists',
    isAuthOnly: true,
    path: sharedPlaylists,
  },
  {
    id: 3,
    icon: <RiPlayListFill />,
    name: 'Public Playlists',
    isAuthOnly: false,
    path: publicPlaylists,
  },
  {
    id: 4,
    icon: <FaUserFriends />,
    name: 'Friends',
    isAuthOnly: true,
    path: friends,
    shoudRenderCounter: true,
  },
];

MenuList.propTypes = {
  id: PropTypes.number.isRequired,
  icon: PropTypes.element.isRequired,
  name: PropTypes.string.isRequired,
  isAuthOnly: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
};
export default MenuList;
