import React from "react";
// import { SignUp } from "./SignUp/components/SignUp";
// import { Login } from "./SignIn/components/Login";
import MyPlayListPage from "./ViewThePlayList/Components/MyPlayListPage"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<h1>Home</h1>}/>
          {/* <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<Login/>}/> */}
          <Route path="/ViewThePlayList" element={<MyPlayListPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
