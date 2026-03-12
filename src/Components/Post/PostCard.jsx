import React from 'react';
import { ArrowLeft, ThumbsDown, ThumbsUp } from 'lucide-react';
import { useLoaderData, useNavigate } from 'react-router';

const PostCard = () => {


    const post = useLoaderData()
    const navigate= useNavigate()

    console.log(post);
    
    
    const {  title, tags, views, reactions ,body} = post;

    // const tag = tags.map(tag => tag);
    // console.log(tag);
    const viewInk= parseInt(views/1000) 
    const viewInH = Math.ceil((views & 1000)/100)
    // console.log(viewInH, viewInk);
    const ultimateViews= `${viewInk}.${viewInH}`
    
    const handleGoBack = () => {

        navigate(-1);
        
    }
    

    return (
        <div className=' w-96 lg:w-full mx-auto p-4  rounded-2xl shadow-2xl'>
            <div>
                <button onClick={handleGoBack} className='btn btn-sm btn-warning'><ArrowLeft></ArrowLeft></button>
            </div>
            <h1 className='text-lg font-semibold my-2 h-14 overflow-hidden'>{title} </h1>
            <p className='text-sm h-44 overflow-auto'>{ body}</p>
            <p >{tags.map(tag => <h1 key={tag.id} className=' badge badge-soft badge-info  mx-1 my-2'>{tag}</h1>)}</p>
            <div className='flex justify-between my-2'>
                <p>{ultimateViews}k Views</p>
                <div className='flex gap-3 items-center justify-center'>
                    <p className='flex items-center gap-1'><ThumbsUp></ThumbsUp>{ reactions.likes}</p>
                    <p className='flex items-center justify-center gap-1 '><ThumbsDown></ThumbsDown>{ reactions.dislikes}</p>
                </div>
            </div>
        </div>
    );
};

export default PostCard;