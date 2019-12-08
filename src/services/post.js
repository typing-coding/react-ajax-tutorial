import axios from 'axios';

// var client_id = 'ZTbGxg0EAhq3DDBJEJbi';
// var client_secret = 'qy02BL1xrc';

export function getPost(postId){
    return axios.get('https://jsonplaceholder.typicode.com/posts/' + postId);
}

export function getComments(postId){
    return axios.get('https://jsonplaceholder.typicode.com/posts/${postId}/comments');
}
