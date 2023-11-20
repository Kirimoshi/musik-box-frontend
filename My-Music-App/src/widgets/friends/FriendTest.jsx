// PLZ Ignore this file. It's just for testing purposes and will be deleted after add friends feature will be done.

import React from 'react';
import { FRIENDS_URL } from '../../store/constants';
import axios from 'axios';
import { userSelector } from '../../store/user/user.selector';
import { useSelector } from 'react-redux';

const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;
const API_USERS_URL = BASE_API_URL + '/api/v1/users';

const NUM_OF_TEST_USERS = 15;

const generateTestUsers = (count) => {
  const baseUser = {
    password: 'secreT!123',
    password_confirmation: 'secreT!123',
  };

  const testUsers = Array.from({ length: count }, (_, index) => ({
    email: `testFriend${index}@example.com`,
    nickname: `testFriend${index}`,
    ...baseUser,
  }));

  return testUsers;
};

const testUsers = generateTestUsers(NUM_OF_TEST_USERS);
// console.log(testUsers);

const fetchCreateTestUsers = async () => {
  testUsers.forEach(async (user) => {
    try {
      const response = await axios({
        method: 'post',
        url: API_USERS_URL,
        headers: {
          Accept: '*/*',
          'Content-Type': 'application/json',
        },
        data: { user },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
  });
};

const fetchSendFriendsipToTestUsers = (accessToken) => {
  testUsers.forEach(async (user) => {
    try {
      const response = await axios({
        method: 'post',
        url: `${FRIENDS_URL}?email=${user.email}`,
        headers: {
          Accept: '*/*',
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(response.data);
    } catch (error) {}
  });
};

// FRIENDS_URL

// const fetchAcceptTestUsersFriendships = async () => {
//   testUsers.forEach(async (user) => {
//     try {
//       const response = await axios({});
//     } catch (error) {
//       console.error(error.response.data);
//     }
//   });
// };

// const friendTestHandler = () => {
//   console.log('friendTestHandler');
// };

const createTestUsersHandler = () => {
  fetchCreateTestUsers();
};
const sendFriendsipToTestUsersHandler = (accessToken) => {
  fetchSendFriendsipToTestUsers(accessToken);
};

function FriendTest() {
  const { accessToken } = useSelector(userSelector);

  return (
    <div>
      <button
        onClick={createTestUsersHandler}
      >{`Create ${NUM_OF_TEST_USERS} Test Users`}</button>
      <button onClick={() => sendFriendsipToTestUsersHandler(accessToken)}>
        Send Friendsip To Test Users
      </button>
    </div>
  );
}

export default FriendTest;
