import React, {useState} from 'react';
import Post from "./Post";


let finalText
let buttonPressed = false
console.log(buttonPressed)

const PostCreation = () => {
    function btnOnClick() {
        let enteredText
        enteredText = finalText
        buttonPressed = true
        console.log(buttonPressed)
    }

    let [text,setText] = useState("")
    finalText = text
    const button = <button className="newPostBtn" onClick={btnOnClick}>Create New Post</button>
    let input = <input type="text" onChange={event => setText(event.target.value)}/>

    while (!buttonPressed) {
        return (
            <div className="postCreation">
                {input}
                {button}
            </div>
        );
    }
        return (
            <div>
                <Post post = {{id: 1, title: 'test', content:finalText}}/>
            </div>
        );

};
export default PostCreation;