import React from "react";

import LeftMenu from "./LeftMenu";
import MainContainerMyPlaylists from "./MainContainerMyPlaylists";
import "../styles/myplaylistpage.css";
import Footer from "./Footer";
import "../styles/reset.css";

function MyPlayListPage() {
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
