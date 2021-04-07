import React from 'react'
import CommentItem from './CommentItem.js'

function CommentList({comments}){
    const commentItems = comments.map((comment) => {   return <CommentItem user={comment.user} comment={comment.comment} />})
return (
    <div>
    <h2>{comments.length} Comments</h2>
    <p>
        {commentItems}
    </p>
    </div>
   

)

}

export default CommentList