import React from 'react';
import aboutImg from '../../assets/about_img.jpg'

const AboutSection = () => {
    return (
        <div className='my-container flex flex-col lg:flex-row gap-6 justify-center px-3'>
            <img src={aboutImg} alt="" />
            <div className='lg:max-w-xl space-y-6'>
                <h2 className='font-bold text-4xl'><span className='text-amber-600'>Welcome At</span> <br /> WESTROT RESTAURANT</h2>
                <div className='space-y-6 text-gray-800'>
                    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim anim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum doore eu fgiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim anim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum doore eu fgiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;