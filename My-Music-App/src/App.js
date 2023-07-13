import React from "react";
import { SignUp } from "./SignUp/components/SignUp";
import { Login } from "./SignIn/components/Login";
import {default as ViewThePlayList} from "./ViewThePlayList/Components/MyPlayListPage"
import {default as ViewMyPlayLists} from './ViewMyPlayLists/components/MyPlayListPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<h1>Home</h1>}/>
          <Route path="/SignUp" element={<SignUp />} /> 
          <Route path="/SignIn" element={<Login/>}/>
          <Route path="/ViewThePlaylist" element={<ViewThePlayList/>}/>
          <Route path="/ViewMyPlaylists" element={<ViewMyPlayLists/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
