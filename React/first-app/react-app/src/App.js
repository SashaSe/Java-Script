import React from "react";
import "./App.css";
import Header from "./components/header";
import NavBar from "./components/nav-bar";
import Content from "./components/content";

const App = () => {
  return (
      <div className="app-wrapper">
          <Header/>
          <NavBar/>
          <Content/>
      </div>
);
}

export default App;
