import React, { useEffect } from "react";
import Home from "./Home/Home";
import { SignUp } from "./SignUp/components/SignUp";
import { Login } from "./SignIn/components/Login";
import { default as ViewMyPlayLists } from "./ViewMyPlayLists/components/MyPlayListPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { rehydrateTokens } from "./store/user/user.reducer";
import { refreshUser } from "./store/user/user.thunks";
import { userSelector } from "./store/user/user.selector";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const {
    isRemembered,
    isAuthenticated,
    accessToken,
    accessExpiresAt,
    refreshToken,
    refreshExpiresAt,
  } = useSelector(userSelector);

  // Step 1 Rehydrate tokens from localStorage, run once on start
  useEffect(() => {
    dispatch(rehydrateTokens());
  }, [dispatch]);

  // Step 2
  // if user checked "remember me" checkbox and it currently NOT logged in, then we need to try
  // 2.1 check if tokens are expired
  // 2.2 if expired, then refresh tokens
  // 2.3 if not expired and access token is valid, then raise isAuthenticated flag (but how to check if token is valid?)
  // we don`t have such endpoint, so I still use refresh thunk

  useEffect(() => {
    // if we dont have refresh token, then we can`t refresh access token and can`t login
    if (!refreshToken || !refreshExpiresAt) return;

    const isRefreshExpied = refreshToken
      ? new Date(refreshExpiresAt) < new Date()
      : true;
    // if refresh token is expired, then we can`t refresh access token
    if (isRefreshExpied) return;

    const isAccessExpied = accessToken
      ? new Date(accessExpiresAt) < new Date()
      : true;
    // if access token is expired, then we need to refresh it, but if user is already authenticated, then we dont need to refresh it
    if (isAccessExpied && !isAuthenticated) {
      dispatch(refreshUser());
    }
    // login if all good (both tokens are valid, isRemeber - true and user is not authenticated)
    if (!isAccessExpied && !isAuthenticated && isRemembered) {
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
  ]);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<Login />} />
          <Route
            path="/ViewMyPlaylists/ViewThePlaylist/:id"
            element={<ViewMyPlayLists />}
          />
          <Route path="/ViewMyPlaylists" element={<ViewMyPlayLists />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
