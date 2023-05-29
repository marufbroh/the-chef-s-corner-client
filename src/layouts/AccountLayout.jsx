import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar';
import Footer from '../pages/Shared/Footer';
import { ScrollRestoration } from "react-router-dom";

const AccountLayout = () => {
    return (
        <div>
            <Navbar />
            <div className='min-h-[calc(100vh-543px)]'>
                <Outlet></Outlet>
            </div>
            <Footer />
            <ScrollRestoration />
        </div>
    );
};

export default AccountLayout;