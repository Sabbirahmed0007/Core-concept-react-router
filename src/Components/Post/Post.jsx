import { ArrowLeftCircle, ThumbsDown, ThumbsUp } from 'lucide-react';
import React from 'react';
import { Link,  } from 'react-router';

const Post = ( {post}) => {
    

    
    
    const { id, title, reactions } = post;


   
    

    return (
        <div className=' w-80 lg:w-full mx-auto p-4  rounded-2xl shadow-2xl text-center'>
            
            <h1 className='text-xl text-left font-semibold h-16'>{title.slice(0, 33)}..</h1>
            <div className='flex gap-3 items-center justify-center my-2'>
                <p className='flex items-center gap-1'><ThumbsUp></ThumbsUp>{reactions.likes}</p>
                <p className='flex items-center justify-center gap-1 '><ThumbsDown></ThumbsDown>{reactions.dislikes}</p>
            </div>
            <div>
                <Link to={`/posts/${id}`} className='btn my-2'>Details</Link>
            </div>
            
            
        </div>
    );
};

export default Post;