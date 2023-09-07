import React, { useEffect } from "react";

import LeftMenu from "./LeftMenu";
import MainContainerMyPlaylists from "./MainContainerMyPlaylists";
import "../styles/myplaylistpage.css";
import Footer from "./Footer";
import "../styles/reset.css";

import { fetchPageOfMyPlaylists } from "../../store/myPlaylists/myPlaylists.thunks";

import { useSelector, useDispatch } from "react-redux";
import { userSelector } from "../../store/user/user.selector";
import { myPlaylistErrorSelector } from "../../store/myPlaylists/myPlaylists.selector";

function MyPlayListPage() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(userSelector);
  const error = useSelector(myPlaylistErrorSelector);

  useEffect(() => {
    if (!isAuthenticated) return;
    dispatch(fetchPageOfMyPlaylists("1")); // TODO: "1" is a magic number for page of playlists, do we need implement pagination?
  }, [dispatch, isAuthenticated]);

  useEffect(() => {
    if (error) console.error(error);
  }, [error]);

  return (
    <div className="myplaylist-container">
      <LeftMenu />
      <MainContainerMyPlaylists />
      <div className="background"></div>
      <Footer />
    </div>
  );
}

export default MyPlayListPage;
