import React from 'react';
import { PostWrapper, Navigate, Post, Warning } from './';

import * as service from '../services/post';

class PostContainer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            postId: 1,
            fetching: false,
            post: {
                title: null,
                body: null
            },
            comments: [],
            visible: false,
            direction: 'left'
        }

        this.fetchPostInfo = this.fetchPostInfo.bind(this);
        this.handleNavigateClick = this.handleNavigateClick.bind(this);
    }
    componentDidMount(){
        this.fetchPostInfo(this.state.postId);
    }
    componentWillReceiveProps(nextProps){

    }
    fetchPostInfo = async (postId) => {
        this.setState({
            fetching: true
        });
 
        try{
            const post = await service.getPost(postId);
            const comments = await service.getComments(postId);

            const { title, body } = post.data;

            const commentLists = comments.data;

            this.setState({
                postId: postId,
                post: {
                    title,
                    body
                },
                fetching: false,
                comments: commentLists
            });
        }catch(e){
            this.setState({
                fetching: false
            });

            this.showWarning();

            console.log('error occurred',e);
        }

    }
    handleNavigateClick = (type) => {
        const postId = this.state.postId;

        if(type === "NEXT"){
            this.fetchPostInfo(postId+1);
        }else{
            this.fetchPostInfo(postId-1);
        }
    }
    showWarning = () => {
        this.setState({
            visible: true
        });

        // setTimeout(()=>{
        //     this.setState({
        //         visible: false
        //     });
        // },1500);
    }
    render(){
        const { postId, fetching, post, comments, direction } = this.state;
        const visible = true;
        return (
            <PostWrapper>
                <Navigate postId={postId} onClick={this.handleNavigateClick}/>
                <Post title={post.title} body={post.body} direction={direction} comments={comments}
                postId={postId}/>
                <Warning visible={this.state.visible} message="{}"/>
            </PostWrapper>
        )
    }
}

export default PostContainer;
