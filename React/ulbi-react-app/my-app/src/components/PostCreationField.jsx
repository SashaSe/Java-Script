import React, {useState} from 'react';
// import PostCreation from "./PostCreation";
// import buttonHandler from './PostCreation'



const PostCreationField = () => {
    function btnOnClick() {
        let finalText
        text = finalText
        console.log(finalText)
    }

    let [text,setText] = useState("")
    const button = <button className="newPostBtn" onClick={btnOnClick}>Create New Post</button>
    let input = <input type="text" onChange={event => setText(event.target.value)}/>
    return (
        <div className="postCreation">
            {input}
            {button}
            {/*<button className="newPostBtn" onClick={buttonHandler(text)}>Create New Post</button>*/}
        </div>
    );
};

export default PostCreationField;