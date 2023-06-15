import React from 'react';
import './style.css';
import { SignUp } from './components/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App () {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignUp/>}/>
          <Route path="/SignIn"/>
        </Routes>
      </div>
    </BrowserRouter>   
  );
}

export default App;
