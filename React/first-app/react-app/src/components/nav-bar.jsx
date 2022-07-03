import React from "react";
import s from "./components-css/navbar.module.css";

const NavBar = () => {
    return (
        <nav className={s.navBar}>
            <div className={s.item}>
                <a>Profile</a>
            </div>
            <div className={s.item}>
                <a>Messages</a>
            </div>
            <div className={s.item}>
                <a>News</a>
            </div>
            <div className={s.item}>
                <a>Music</a>
            </div>
        </nav>
    )
}

export default NavBar;