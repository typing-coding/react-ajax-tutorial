import React from 'react';
import './Warning.css';
import './Animation.css';

const Warning = ({message, visible}) => {
    const content = (visible ?
    <div className="Warning-wrapper">
        <div className="Warning animated bounceIn">
            {message}
        </div>
    </div>
    : null)
    return (
        content
    )
}

export default Warning;
