import React, { useState } from 'react'
import CommentList from "./CommentList.js";



function VideoCard({video}){
    const [upVotes, setUpVotes] = useState(video.upvotes)
    function handleUpVotes(event) {
      setUpVotes(upVotes + 1)
    }
    const [downVotes, setDownVotes] = useState(video.downvotes)
    function handleDownVotes(event){
      setDownVotes(downVotes + 1)
    }

    const [toggleComments, setToggleComments] = useState(true)
    function handleToggleComment(event){
      setToggleComments(!toggleComments)
    }

    return (<div>
         <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameborder="0"
        allowfullscreen
        title={video.title}
      />
      <h1>{video.title}</h1>
      <p>{video.views} Views | Uploaded {video.createdAt}
        </p>
        <button onClick={handleUpVotes}>{upVotes}👍</button>
        <button onClick={handleDownVotes}>{downVotes}👎</button>
        <button onClick={handleToggleComment}>{toggleComments ? "Hide" : "Show"} Comments</button> {toggleComments &&  <CommentList comments={video.comments}/>}
    </div>
    )

}

export default VideoCard