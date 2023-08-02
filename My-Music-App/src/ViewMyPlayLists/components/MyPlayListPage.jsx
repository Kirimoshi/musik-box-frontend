import React, { useEffect } from "react";
import axios from "axios";

import LeftMenu from "./LeftMenu";
import MainContainerMyPlaylists from "./MainContainerMyPlaylists";
import "../styles/myplaylistpage.css";
import Footer from "./Footer";
import "../styles/reset.css";

import { useSelector, useDispatch } from "react-redux";
import { GET_MY_PLAYLIST_URL } from "../../store/constants";
import { userSelector } from "../../store/user/user.selector";
import {
  setMyPlaylists,
  setSongs,
} from "../../store/myPlaylists/myPlaylists.reducer";

const getMyPlaylistData = async (page, accessToken) => {
  const headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${accessToken}`,
  };

  const reqOptions = {
    url: `${GET_MY_PLAYLIST_URL}?page=${page}&include=songs`,
    method: "GET",
    headers: headersList,
  };

  const response = await axios.request(reqOptions);
  return response.data;
};

function MyPlayListPage() {
  const dispatch = useDispatch();
  const { accessToken, isAuthenticated } = useSelector(userSelector);

  useEffect(() => {
    if (!isAuthenticated) return;

    const fetchData = async () => {
      const responce = await getMyPlaylistData("1", accessToken); //TODO: 1 is magic number, ask mentor or backend team where to get this value
      dispatch(setMyPlaylists(responce.data));
      dispatch(setSongs(responce.included));
    };
    fetchData(); //TODO: add error handling, preferably using thunk approach
  }, [accessToken, dispatch, isAuthenticated]);

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
