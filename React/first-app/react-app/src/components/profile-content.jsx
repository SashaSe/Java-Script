import React from "react";
import "./components-css/content.css";
import ProfilePic from "./profile-pic";

const ProfileContent = () => {
    return (
        <div className="content">
            <ProfilePic/>
            <div className="post-container">
                <div>
                    <p className="post-text">Post1</p>
                </div>
                <div>
                    <p className="post-text">Post1</p>
                </div>
                <div>
                    <p className="post-text">Post1</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileContent;