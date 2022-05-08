import React, { useState} from "react";
import video from "../data/video.js";
import Header from "./Header.js"
import Body from "./Body.js"

function App() {
const [likes, setLikes] = useState(video.upvotes)
const [dislikes, setdislikes] = useState(video.downvotes)
const [isHidden, setHidden] = useState(false)


function increaseLikes(){
  setLikes(parseInt(likes)+1)
}

function increaseDislikes(){
  setdislikes(parseInt(dislikes)+1)
}
 function hideComments(){
   setHidden((isHidden) => !isHidden)
 }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Header views={video.views} 
        date={video.createdAt} 
        upvotes={likes} 
        downvotes={dislikes}
        increaseLikes={increaseLikes}
        increaseDislikes={increaseDislikes}/>
      <div>
        <button onClick={hideComments}>{isHidden? "Show Comments" : "Hide Comments"}</button>
      </div>
      <hr></hr>
      <Body hide={isHidden} comments={video.comments} />
    </div>
  );
}

export default App;