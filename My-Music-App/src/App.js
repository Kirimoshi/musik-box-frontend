import React from "react";
import "./SignUp/style.css";
import { SignUp } from "./SignUp/components/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<h1>Home</h1>}/>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
