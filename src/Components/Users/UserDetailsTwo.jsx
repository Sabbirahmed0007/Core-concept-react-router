import React, { use } from 'react';

const UserDetailsTwo = ({ userPromise }) => {

    const user = use(userPromise);
    console.log(user);

    const { age, firstName, maidenName, lastName, username, gender, } = user
    
    
    return (
        <div>
            <p>{firstName} { maidenName} {lastName} ({username}) </p>
            <h1>Age: {age}</h1>
            <p>Gender: {gender} </p>
        </div>
    );
};

export default UserDetailsTwo;