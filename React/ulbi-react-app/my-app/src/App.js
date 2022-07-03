import React from "react";
import Counter from "./components/Counter";
import InputHandler from "./components/InputHandler";
import "./styles/app.css"
import Post from "./components/Post";
import PostCreationField from "./components/PostCreationField";
// import PostCreation from "./components/PostCreation";

function buttonHandler () {
    const button = document.getElementsByClassName("newPostBtn")
    console.log(button)
}

function App() {
  return (
    <div className="App">
        <PostCreationField/>
        {/*<Post post={{id: postId, title: postTitle, content: postContent}}/>*/}
        {/*<Post post={{id: 2, title: 'Second Post', content: 'SecondPostContent'}}/>*/}
    </div>
  );
}

export default App;
