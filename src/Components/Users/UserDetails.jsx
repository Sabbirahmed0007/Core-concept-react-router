import React from 'react';
import { Link, useLoaderData,  } from 'react-router';

const UserDetails = () => {

    const user = useLoaderData();
    console.log(user);

    const {age, firstName, hair, image, maidenName, lastName, username, university, weight, gender,company}= user
    
    
    
    return (
        <div className='border-red-400 border-2 p-4 '>
            <h1 className='text-3xl font-semibold my-2'>Personal Info</h1>
            <div className='flex items-center justify-start gap-3'>
            <img className='w-16 rounded-full object-cover' src={image} alt="" />
            <h1>Name: {firstName} {maidenName} {lastName} ({username})  </h1>
                <p>( { gender} )</p>
            </div>
            <p>Age: {age} <span className='ml-5  '>Weight: { weight}</span></p>
            <p>Hair: {hair.color}</p>

            <h1 className='text-3xl font-semibold my-2'>Education </h1>
            <p>Studied in : {university} </p> 
            

            <h1 className='text-3xl font-semibold my-2'>Career</h1> 
            <div>
                <p> <span className='text-lg font-semibold'>Department: </span> {company.department}</p>
                <p>Designation: { company.title}</p>

            </div>
            

        </div>
    );
};

export default UserDetails;