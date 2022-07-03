import React from "react";
import s from "./components-css/header.module.css";

const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Wikimedia-logo.png"></img>
        </header>
    )
}

export default Header;