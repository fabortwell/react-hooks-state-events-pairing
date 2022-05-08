import React from "react";
import Comments from "./Comments.js"

function Body({ comments, hide }) {
  if (!hide){
    return (
      <div className="Header">     
        <h2>2 Comments</h2>
        <div>
        {comments.map((comment)=>(
        <Comments key={comment.id} user={comment.user} comment={comment.comment}/> 
         ))}
         </div>
      </div>
    );
  } else return null
}
 



export default Body