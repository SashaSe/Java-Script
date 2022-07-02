import React from "react";
import "./App.css";
import Header from "./components/header";
import NavBar from "./components/nav-bar";
import ProfileContent from "./components/profile-content";

const App = () => {
  return (
      <div className="app-wrapper">
          <Header/>
          <NavBar/>
          <ProfileContent/>
      </div>
);
}

export default App;
