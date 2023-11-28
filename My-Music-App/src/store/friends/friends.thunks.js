import { createAsyncThunk } from '@reduxjs/toolkit';
import { FRIENDS_URL } from '../constants';
import axios from 'axios';

const PER_PAGE = 10; // TODO: this const exist for easier pagination testing, we need to remove it when story is done

export const fetchFriendsAccepted = createAsyncThunk(
  'friendsSlice/fetchFriendsAccepted',
  async (page = 1, { getState }) => {
    const accessToken = getState().user.accessToken;
    try {
      const response = await axios({
        url: `${FRIENDS_URL}?page=${page}&per_page=${PER_PAGE}`,
        headers: {
          Accept: '*/*',
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return {
        dataArr: response.data.friendships.data,
        paginationData: response.data.pagination_metadata,
      };
    } catch ({ response: { data } }) {
      throw data.error ?? data.errors;
    }
  }
);
export const fetchFriendsAcceptedPending = (state) => {
  state.loading = true;
  state.error = null;
};
export const fetchFriendsAcceptedFulfilled = (state, action) => {
  state.loading = false;
  state.friendsAccepted = action.payload.dataArr;
  state.friendsAcceptedPaginationData = action.payload.paginationData;
};
export const fetchFriendsAcceptedRejected = (state, action) => {
  state.loading = false;
  state.error = action.error.message;
};

export const fetchFriendsSent = createAsyncThunk(
  'friendsSlice/fetchFriendsSent',
  async (page = 1, { getState }) => {
    const accessToken = getState().user.accessToken;
    try {
      const response = await axios({
        url: `${FRIENDS_URL}/?direction=sent&page=${page}&per_page=${PER_PAGE}`,
        headers: {
          Accept: '*/*',
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return {
        dataArr: response.data.friendships.data,
        paginationData: response.data.pagination_metadata,
      };
    } catch ({ response: { data } }) {
      throw data.error ?? data.errors;
    }
  }
);
export const fetchFriendsSentPending = (state) => {
  state.loading = true;
  state.error = null;
};
export const fetchFriendsSentFulfilled = (state, action) => {
  state.loading = false;
  state.friendsSent = action.payload.dataArr;
  state.friendsSentPaginationData = action.payload.paginationData;
};
export const fetchFriendsSentRejected = (state, action) => {
  state.loading = false;
  state.error = action.error.message;
};

export const fetchFriendsRecived = createAsyncThunk(
  'friendsSlice/fetchFriendsRecived',
  async (page = 1, { getState }) => {
    const accessToken = getState().user.accessToken;
    try {
      const response = await axios({
        url: `${FRIENDS_URL}/?direction=received&page=${page}&per_page=${PER_PAGE}`,
        headers: {
          Accept: '*/*',
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return {
        dataArr: response.data.friendships.data,
        paginationData: response.data.pagination_metadata,
      };
    } catch ({ response: { data } }) {
      throw data.error ?? data.errors;
    }
  }
);
export const fetchFriendsRecivedPending = (state) => {
  state.loading = true;
  state.error = null;
};
export const fetchFriendsRecivedFulfilled = (state, action) => {
  state.loading = false;
  state.friendsRecived = action.payload.dataArr;
  state.friendsRecivedPaginationData = action.payload.paginationData;
};
export const fetchFriendsRecivedRejected = (state, action) => {
  state.loading = false;
  state.error = action.error.message;
};

export const fetchAcceptFriendship = createAsyncThunk(
  'friendsSlice/fetchAcceptFriendship',
  async (friendId, { getState }) => {
    const accessToken = getState().user.accessToken;
    try {
      const response = await axios({
        method: 'PUT',
        url: `${FRIENDS_URL}/${friendId}`,
        headers: {
          Accept: '*/*',
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch ({ response: { data } }) {
      throw data.error ?? data.errors;
    }
  }
);
export const fetchAcceptFriendshipPending = (state) => {
  state.loading = true;
  state.error = null;
};
export const fetchAcceptFriendshipFulfilled = (state, action) => {
  state.loading = false;
  state.successMessage = action.payload.message;
  state.shouldRefetchFriends = true;
};
export const fetchAcceptFriendshipRejected = (state, action) => {
  state.loading = false;
  state.error = action.error.message;
};

export const fetchDeleteFriendship = createAsyncThunk(
  'friendsSlice/fetchDeleteFriendship',
  async (friendId, { getState }) => {
    const accessToken = getState().user.accessToken;
    try {
      const response = await axios({
        method: 'DELETE',
        url: `${FRIENDS_URL}/${friendId}`,
        headers: {
          Accept: '*/*',
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return { deletedFriendId: friendId, message: response.data.message };
    } catch ({ response: { data } }) {
      throw data.error ?? data.errors;
    }
  }
);
export const fetchDeleteFriendshipPending = (state) => {
  state.loading = true;
  state.error = null;
};
export const fetchDeleteFriendshipFulfilled = (state, action) => {
  state.loading = false;
  state.friendsSent = state.friendsSent.filter(
    (friend) => friend.id !== action.payload.deletedFriendId
  );
  state.friendsAccepted = state.friendsAccepted.filter(
    (friend) => friend.id !== action.payload.deletedFriendId
  );
  state.friendsRecived = state.friendsRecived.filter(
    (friend) => friend.id !== action.payload.deletedFriendId
  );

  state.successMessage = 'Friendship deleted successfully';
  state.shouldRefetchFriends = true;
};
export const fetchDeleteFriendshipRejected = (state, action) => {
  state.loading = false;
  state.error = action.error.message;
};

export const fetchAddFriend = createAsyncThunk(
  'friendsSlice/fetchAddFriend',
  async (friendEmail, { getState }) => {
    const accessToken = getState().user.accessToken;
    try {
      const response = await axios({
        method: 'post',
        url: `${FRIENDS_URL}?email=${friendEmail}`,
        headers: {
          Accept: '*/*',
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log('file: friends.thunks.js:204 ~ error:', error);

      const errMsgArr = error?.response?.data?.errors?.details;

      if (errMsgArr !== undefined && Array.isArray(errMsgArr)) {
        console.error('Thunk addFriend error: ', errMsgArr.join(', '));
        throw [error?.code, ...errMsgArr].join(', ');
      }
      throw error;
    }
  }
);
export const fetchAddFriendPending = (state) => {
  state.addFriendLoading = true;
  state.addFriendError = null;
};
export const fetchAddFriendFulfilled = (state, action) => {
  state.addFriendLoading = false;
  state.shouldRefetchFriends = true;
};
export const fetchAddFriendRejected = (state, action) => {
  state.addFriendLoading = false;
  state.addFriendError = action.error.message;
};
