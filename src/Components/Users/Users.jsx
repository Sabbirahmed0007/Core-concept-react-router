import React from 'react';
import { useLoaderData } from 'react-router';
import User from './User';

const Users = () => {

    const { users } = useLoaderData();
    // console.log('Users', users);
    

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-center justify-center bg-amber-300 p-3 box-border'>
                {
                    users.map(user=><User user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;