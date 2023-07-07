import React from "react";
import "../Styles/maincontainer.css";
import { RiDislikeLine } from "react-icons/ri";
import { BiHeart } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import SongList from "./SongList";
import Modal from "./Modal";
import { IoIosAdd } from "react-icons/io";
import { useState } from "react";
import Comment from "./Comment";

export default function MainContainer() {
  const [openModel,setOpenModel]=useState(false);
  return (
    <div className="maincontainer">
      <div className="profiledetails">
        <div className="email">shevchuk@gmail.com</div>
        <div className="otherdetails">
          <div className="otherdetails1">Here since: 22 June 2023</div>
          <div className="otherdetails2">Amount of playlists: 3 </div>
        </div>
      </div>

      <div className="playlistimage">
        <img
          src={require("../images/image2.jpg")}
          alt=""
          className="img2"
        ></img>
        <BsThreeDotsVertical className="vertical-menu" onClick={()=>{
         setOpenModel((prev) => !prev);
        }} />
        {openModel && <Modal/>}
      </div>

      <div className="playlistdetails">
        <p className="playlistname">Mega Mix</p>
        <p className="playlistcontent">Good for training’s and so on... </p>
        <div className="created-updated">
          <p>Created: 23 June 2023</p>
          <p>Updated: 12 Jul 2023</p>
        </div>
      </div>
      <div className="likedislike">
        <div className="dislike">
          {4}
          <RiDislikeLine />
        </div>
        <div className="like">
          {1234}
          <BiHeart />
        </div>
      </div>
      <div className="addsong">
        <IoIosAdd className="circle-icon" />
        <p className="addsong">Add Song</p>
      </div>
      <div className="divider"></div>

      <div className="songsList" data-testid="song-list">
        <SongList />
      </div>
      <Comment data-testid='comment-list'/>
    </div>
  );
}
