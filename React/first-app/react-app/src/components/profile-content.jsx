import React from "react";
import s from "./components-css/content.module.css";
import ProfilePic from "./profile-pic";

const ProfileContent = () => {
    return (
        <div className={s.content}>
            <ProfilePic/>
            <div className="post-container">
                <div className={s.item}>
                    <p>Post1</p>
                </div>
                <div className={s.item}>
                    <p>Post1</p>
                </div>
                <div className={s.item}>
                    <p>Post1</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileContent;