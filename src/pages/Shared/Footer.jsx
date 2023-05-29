import React from 'react';
import socialIcons from '../../assets/Group9969.png'

const Footer = () => {
    return (
        <div className='bg-slate-950'>
            <div className='my-container text-white space-y-10'>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
                    <div className='space-y-6 px-2'>
                        <h3 className='font-bold text-3xl'>The Chef's Corner</h3>
                        <p className='text-gray-500'>Unleash your inner chef with our delectable recipes and cooking tips. Elevate your culinary game with us and savor the flavors of life.</p>
                        <img src={socialIcons} alt="" />
                    </div>
                    <div className='space-y-4 pl-5'>
                        <h4 className='text-xl font-bold'>Opening Hours</h4>
                        <div className='text-gray-500 space-y-3'>
                            <p>Mon-Fri ....................... 10Am-8Pm</p>
                            <p>Saturday....................... 10Am-9Pm</p>
                            <p>Wednesday...................... 10Am-3Pm</p>
                        </div>
                    </div>
                    <div className='space-y-4 pl-5'>
                        <h4 className='text-xl font-bold'>Support</h4>
                        <div className='text-gray-500 space-y-3'>
                            <p>Help Desk</p>
                            <p>Sales</p>
                            <p>Become a Partner</p>
                            <p>New Business</p>
                        </div>
                    </div>
                    <div className='space-y-4 pl-5'>
                        <h4 className='text-xl font-bold'>Contact</h4>
                        <div className='text-gray-500 space-y-3'>
                            <p>British Columbia, Canada <br />
                                512B omexcity, India</p>
                            <p>+1 777 - 978 - 5570</p>
                            <p>
                                omeniacoffe@example.com <br />
                                coffeeorers@example.com
                            </p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='flex flex-col lg:flex-row gap-2 justify-between items-center text-gray-500'>
                    <p>@2023 The Chef's Corner. All Rights Reserved</p>
                    <p>Powered by The Chef's Corner</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;