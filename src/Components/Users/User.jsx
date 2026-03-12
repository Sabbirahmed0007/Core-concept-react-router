import React, { Suspense, useState } from 'react';
import { Link } from 'react-router';
import UserDetailsTwo from './UserDetailsTwo';

const User = ({ user }) => {
    const { age, image, id, firstName } = user;
    
    const [showInfo, setShowInfo]=useState(false);
    // console.log(user);
    
    
    const userJson = async () => {
        const res = await fetch(`https://dummyjson.com/users/${id}`)
    
        return res.json();
    
            
    }
    
    const userPromise = userJson();
    console.log(userPromise);
    


    return (
        <div className='w-72 mx-auto text-center bg-amber-900 p-3 shadow-2xl rounded-3xl'>
            <img className='w-full object-cover' src={image} alt="" />
            <h1>Name: { firstName}</h1>
            <p>Age: {age}</p>
            <div>
                <Link to={`/users/${id}`} className='btn btn-secondary'>Show Info</Link>
                {/* -------------------------------- */}
                <Link onClick={() => setShowInfo(!showInfo)} className='btn btn-secondary'>{showInfo ? "Hide" : "Show"}</Link>
                <div>
                {
                        showInfo && <Suspense>
                            <UserDetailsTwo userPromise={userPromise}></UserDetailsTwo>
                    </Suspense>
                }

                </div>
            </div>
        </div>
    );
};

export default User;