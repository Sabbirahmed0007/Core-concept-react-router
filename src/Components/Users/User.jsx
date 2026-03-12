import React from 'react';
import { Link } from 'react-router';

const User = ({ user }) => {
    

    // console.log(user);
    const { age, image, id , firstName } = user;
    


    return (
        <div className='w-72 mx-auto text-center bg-amber-900 p-3 shadow-2xl rounded-3xl'>
            <img className='w-full object-cover' src={image} alt="" />
            <h1>Name: { firstName}</h1>
            <p>Age: {age}</p>
            <div>
                <Link to={ `/users/${id}`} className='btn btn-secondary'>Details</Link>
            </div>
        </div>
    );
};

export default User;