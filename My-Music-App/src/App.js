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

  useEffect(() => {
    dispatch(rehydrateTokens()); // Rehydrate tokens from localStorage, run once on start
  }, [dispatch]);

  useEffect(() => {
    if (!isRemembered) return; // if user is not remembered, then we dont need to check anything related to login

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
      return;
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
