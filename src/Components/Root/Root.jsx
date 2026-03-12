import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';

const Root = () => {


    // const navigation = useNavigation();
    // const isNavigating = Boolean(navigation.location);

    return (
        <div>
            <Header></Header>

            <div className='my-10'>
               {/* {
                  isNavigating?<span className=' flex items-center justify-center my-20 animate-spin'>Loading...</span>:<Outlet></Outlet>
               } */}
                <Outlet></Outlet>
            
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;