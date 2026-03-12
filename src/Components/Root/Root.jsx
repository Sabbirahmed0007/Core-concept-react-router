import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div>
            <Header></Header>

            <div className='my-10'>

            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;