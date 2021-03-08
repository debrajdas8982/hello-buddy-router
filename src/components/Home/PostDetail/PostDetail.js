import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

const PostDetail = () => {

const {id} = useParams();
const [post, setPost] = useState({});
const [comments, setComments]= useState([]);
useEffect(()=> {
const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
fetch(url)
.then(Response=>Response.json())
.then(data=> setPost(data))
}, [id]);

useEffect(()=>{
const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
fetch(url)
.then(Response=>Response.json())
.then(data=> setComments(data))
}, [id])
    return (
        <div>
           <h3>This is post detail: {id}</h3> 
           <p>user Posted: {post.id}</p>
           <p>title: {post.title}</p>
           <p> Post body: {post.body}</p>
           <p>Numbers of comments: {comments.length}</p>
           {
               comments.map(comment=><Comment comment= {comment}></Comment>)
           }
        </div>
    );
};

export default PostDetail;