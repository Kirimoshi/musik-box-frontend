import React, { useEffect } from "react";
import Home from "./Home/Home";
import { SignUp } from "./SignUp/components/SignUp";
import { Login } from "./SignIn/components/Login";
import { default as ViewMyPlayLists } from "./ViewMyPlayLists/components/MyPlayListPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { rehydrateTokens } from "./store/user/user.reducer";
import { isRememberedSelector } from "./store/user/user.selector";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const isRemembered = useSelector(isRememberedSelector);
  const accessExpiresAt = useSelector((state) => state.user.accessExpiresAt);

  // rehydrate tokens from localStorage, run once on start
  useEffect(() => {
    dispatch(rehydrateTokens());
  }, [dispatch]);
  // if user checked "remember me" checkbox, then we need to try
  // - refresh tokens if they are expired
  // - login user if tokens are valid
  useEffect(() => {
    if (isRemembered) {
      dispatch(rehydrateTokens());
    }
  }, [dispatch, isRemembered]);

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
