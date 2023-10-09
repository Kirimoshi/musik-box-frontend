import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { RouterProvider } from 'react-router-dom';

import { rehydrateTokens } from './store/user/user.reducer';
import { refreshUser } from './store/user/user.thunks';
import { userSelector } from './store/user/user.selector';
import { useDispatch, useSelector } from 'react-redux';
import router from './router/router';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const {
    isRemembered,
    isAuthenticated,
    isRehydrated,
    accessToken,
    accessExpiresAt,
    refreshToken,
    refreshExpiresAt,
  } = useSelector(userSelector);

  useEffect(() => {
    if (!isRehydrated) dispatch(rehydrateTokens());
  }, [dispatch, isRehydrated]);

  useEffect(() => {
    if (!isRemembered || !isRehydrated) return; // if user is not remembered, or rehydration not ready then we dont need to check anything related to login

    if (!refreshToken || !refreshExpiresAt) return; // if we dont have refresh token, then we can`t refresh access token and can`t login

    const isRefreshExpied = refreshToken
      ? new Date(refreshExpiresAt) < new Date()
      : true;
    if (isRefreshExpied) return; // if refresh token is expired, then we can`t refresh access token and can`t login

    const isAccessExpied = accessToken
      ? new Date(accessExpiresAt) < new Date()
      : true;

    if (isAccessExpied && !isAuthenticated) {
      dispatch(refreshUser()); // if access token is expired, then we need to refresh it, but if user is already authenticated, then we dont need to refresh it
      return;
    }
    // login if all good (both tokens are valid and user is not authenticated)
    if (!isAccessExpied && !isAuthenticated) {
      dispatch(refreshUser());
    }
  }, [
    accessExpiresAt,
    accessToken,
    dispatch,
    isAuthenticated,
    refreshExpiresAt,
    refreshToken,
    isRemembered,
    isRehydrated,
  ]);

  return (
    <div className='App'>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}
export default App;
