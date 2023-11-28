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

const { friends, friendsMy, friendsSent, friendsRequest } = paths;

function Friends() {
  return (
    <FriendsContainer>
      <FriendsTitleContainer>
        <FriendsTitle>Friends</FriendsTitle>
        <AddFriend />
      </FriendsTitleContainer>
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
