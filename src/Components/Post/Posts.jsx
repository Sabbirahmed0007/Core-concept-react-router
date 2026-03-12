import React from 'react';
import { useLoaderData } from 'react-router';
import PostCard from './PostCard';
import Post from './Post';

const Posts = () => {


    const  {posts}  = useLoaderData();
    console.log(posts);
    
    
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-center justify-center'>
                {
                    posts.map(post=><Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;