import React from 'react';
import { Comment } from './';

const ComponentList = ({comments}) => {
    return (
        <ul className="ComponentList">
        {
            comments.map(function(currentValue,index){
                if(index<10){
                    return (
                        <Comment key={index} comment={currentValue} />
                    )
                }
            })
        }
        </ul>
    )
}

export default ComponentList;
