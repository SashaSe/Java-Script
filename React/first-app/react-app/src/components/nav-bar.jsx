import React from "react";
import "./components-css/navbar.css";

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <div className="item">
                <a href="#">Profile</a>
            </div>
            <div className="item">
                <a href="#">Messages</a>
            </div>
            <div className="item">
                <a href="#">News</a>
            </div>
            <div className="item">
                <a href="#">Music</a>
            </div>
        </nav>
    )
}

export default NavBar;