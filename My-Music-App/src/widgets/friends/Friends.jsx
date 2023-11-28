import React from 'react';
import {
  FriendsContainer,
  FriendsMenu,
  FriendsMenuItem,
  FriendsTitle,
  FriendsTitleContainer,
} from './Friends.styles';
import { Outlet } from 'react-router-dom';
import paths from '../../router/paths';
import AddFriend from '../../features/friends/ui/AddFriend';
// import FriendTest from './FriendTest';

const { friends, friendsMy, friendsSent, friendsRequest } = paths;

function Friends() {
  return (
    <FriendsContainer>
      <FriendsTitleContainer>
        <FriendsTitle>Friends</FriendsTitle>
        <AddFriend />
      </FriendsTitleContainer>
      {/* TODO: ADD user and friends test component, will be removed after add friends feature will be done.  */}
      {/* <FriendTest /> */}
      <FriendsMenu>
        <FriendsMenuItem to={`${friends}/${friendsSent}`}>
          Sent by me
        </FriendsMenuItem>
        <FriendsMenuItem to={`${friends}/${friendsRequest}`}>
          Friends request
        </FriendsMenuItem>
        <FriendsMenuItem to={`${friends}/${friendsMy}`}>
          My Friends
        </FriendsMenuItem>
      </FriendsMenu>
      <Outlet />
    </FriendsContainer>
  );
}

export default Friends;
