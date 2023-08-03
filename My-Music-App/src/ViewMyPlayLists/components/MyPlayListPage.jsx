import React, { useEffect } from "react";

import LeftMenu from "./LeftMenu";
import MainContainerMyPlaylists from "./MainContainerMyPlaylists";
import "../styles/myplaylistpage.css";
import Footer from "./Footer";
import "../styles/reset.css";

import { fetchMyPlaylistData } from "../../store/myPlaylists/myPlaylists.thunks";

import { useSelector, useDispatch } from "react-redux";
import { userSelector } from "../../store/user/user.selector";
import { errorSelector } from "../../store/myPlaylists/myPlaylists.selector";

function MyPlayListPage() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(userSelector);
  const error = useSelector(errorSelector);

  useEffect(() => {
    if (!isAuthenticated) return;
    dispatch(fetchMyPlaylistData("1")); // TODO: "1" is a magic number for page of playlists, i don't know where to get it from
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
