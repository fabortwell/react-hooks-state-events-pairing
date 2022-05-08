import React from "react";


function Header({ views, date, upvotes, downvotes, increaseLikes, increaseDislikes }) {
  
    return (
      <div className="Header">     
        <h1>React Today and Tomorrow and 90% Cleaner React With Hooks</h1>
        <div>
            <span>{views} Views |</span>
            <span> Uploaded {date}</span>
        </div>
        <br></br>
        <div>
        <span>
            <button onClick={increaseLikes}>{upvotes}👍</button>
            <button onClick={increaseDislikes}>{downvotes}👎</button>
        </span>
        </div>
        <br></br>
      </div>
    );
  }






export default Header