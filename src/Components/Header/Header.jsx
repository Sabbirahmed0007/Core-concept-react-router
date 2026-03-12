import React from 'react';
import { Link, NavLink } from 'react-router';

const Header = () => {
    return (
        <div>
           
            <nav className='space-x-5 '>
                <NavLink className={({isActive, isPending})=> isActive? 'active text-red-500 btn btn-outline outline-red-400':isPending? 'pending': 'text-gray-500 btn btn-outline'} to={'/'}>Home</NavLink>
                <NavLink className={({ isActive, isPending }) => isActive ? 'active text-red-500 btn btn-outline outline-red-400' : isPending ? 'pending' : 'text-gray-500 btn btn-outline'} to={'/contact'}>Contact</NavLink>
                <NavLink className={({ isActive, isPending }) => isActive ? 'active text-red-500 btn btn-outline outline-red-400' : isPending ? 'pending' : 'text-gray-500 btn btn-outline'} to={'/products'}> Products</NavLink>
                <NavLink className={({ isActive, isPending }) => isActive ? 'active text-red-500 btn btn-outline outline-red-400' : isPending ? 'pending' : 'text-gray-500 btn btn-outline'} to={'/users'}> Users</NavLink>
                <NavLink className={({ isActive, isPending }) => isActive ? 'active text-red-500 btn btn-outline outline-red-400' : isPending ? 'pending' : 'text-gray-500 btn btn-outline'} to={'/users2'}> Users Again</NavLink>
                <NavLink className={({ isActive, isPending }) => isActive ? 'active text-red-500 btn btn-outline outline-red-400' : isPending ? 'pending' : 'text-gray-500 btn btn-outline'} to={'/posts'}> Posts</NavLink>
            </nav>
        </div>
    );  
};

export default Header;