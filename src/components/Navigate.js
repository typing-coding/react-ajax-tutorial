import React from 'react';
import { Button } from 'semantic-ui-react';
import './Navigate.css'

const Navigate = ({postId, onClick}) => {
    return (
        <div className="Navigate">
            <Button
                color="teal"
                content="previous"
                icon="left arrow"
                labelPosition="left"
                onClick={
                    ()=>{
                        onClick('PREV');
                    }
                }
            />
        <div className="Navigate-page-num">{postId}</div>
            <Button
                color="teal"
                content="next"
                icon="right arrow"
                labelPosition="right"
                className="Navigate-right-button"
                onClick={
                    ()=>{
                        onClick('NEXT');
                    }
                }
            />
        </div>
    )
}

export default Navigate;
