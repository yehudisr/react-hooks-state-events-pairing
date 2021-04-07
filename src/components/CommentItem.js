import React from 'react'


function CommentItem({comment, user}){
return(
    <div>
        <p>{user}</p>
        <p>{comment}</p>
    </div>

)

}

export default CommentItem;