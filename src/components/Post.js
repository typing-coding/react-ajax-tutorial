import React from 'react';
import './Post.css';

import { CommentList } from './';

class Post extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            postInfo: {
                title: null,
                body: null,
                comments: []
            },
            direction: 'prev',
            animated: false
        }
    }
    componentWillReceiveProps(nextProps){
        const direction = this.props.postId > nextProps.postId ? 'prev' : 'next';
            if(this.props.postId !== nextProps.postId) {
                this.setState({
                    direction: direction,
                    animated: true
                });

                setTimeout(()=>{
                    this.setState({
                        postInfo: {
                            title: nextProps.title,
                            body: nextProps.body,
                            comments: nextProps.comments,
                        },
                        animated: false
                    });
                },2000);
                return;
            }else{
                this.setState({
                   postInfo: {
                       title: nextProps.title,
                       body: nextProps.body,
                       comments: nextProps.comments,
                   }
               });
            }


    }
    render(){
        const {postInfo, direction, animated} = this.state;

        const directionAnimation = animated ? (direction === 'prev' ? 'bounceOutRight' : 'bounceOutLeft') : (direction === 'prev' ? 'bounceInLeft' : 'bounceInRight');

        return (
            <div className={`Post animated ${directionAnimation}`}>
                <h1>{postInfo.title}</h1>
                <p>
                    {postInfo.body}
                </p>
                <CommentList comments={postInfo.comments}/>
            </div>
        )
    }
}

export default Post;
