import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import PostCard from './PostCard';
import Post from './Post';
import { ArrowLeftCircle } from 'lucide-react';

const Posts = () => {

    const navigate = useNavigate();


    const  {posts}  = useLoaderData();
    console.log(posts);
    const handleNavigate = () => {
        navigate(-1);
        // navigate(`/posts/${id}`);

    }
       
    
    return (
        <div>
            <div className='text-left my-1'>
                <button onClick={handleNavigate} className='btn btn-neutral text-left '><ArrowLeftCircle></ArrowLeftCircle></button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-center justify-center'>
                {
                    posts.map(post=><Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;