import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from "./components/navbar";
import { Home } from "./components/pages/home";
import { About } from "./components/pages/about";
import { Profile } from "./components/pages/profile";
import { Alert } from "./components/alert";
import { AlertState } from "./context/alert/AlertState";
import { GithubState } from "./context/github/GithubState";

function App() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar/>
          <div className="container pt-4">
            <Alert alert={{text: 'Test alert'}}/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/profile" element={<Profile/>}/>
            </Routes>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
}

export default App;
