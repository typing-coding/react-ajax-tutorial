import React from 'react';

const Comment = ({comment}) => {
    return (
        <li className="Comment">
            <p>
                <b>{comment.name}</b> {comment.body}
            </p>
        </li>
    )
}

export default Comment;
