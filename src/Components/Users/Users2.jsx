import React, { use } from 'react';
import User from './User';

const Users2 = ({ userPromise }) => {
    
    const users = use(userPromise);
    const userss = users.users
    // console.log(users);
    

    return (
        <div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-center justify-center'>
                {
                    userss.map(user => <User user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users2;