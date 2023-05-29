import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    // console.log(user?.photoURL);
    const handleLogOut = () => {
        logOut()
    }
    return (
        <div className='bg-color'>
            <div className='relative flex items-center justify-around px-4 py-5 mx-auto  lg:px-8'>
                <Link
                    to='/'
                >

                    <div className='text-3xl lg:text-4xl font-bold tracking-wide text-white '>
                        The Chef's Corner
                    </div>
                </Link>
                <ul className='items-center hidden space-x-8 lg:flex'>
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to='/blog'

                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            Blog
                        </NavLink>
                    </li>
                </ul>
                <div className='lg:hidden'>
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
                    >

                        {
                            user?.photoURL ?
                                <img
                                    src={user?.photoURL}
                                    alt="User Profile"
                                    className="w-10 h-10 rounded-full"
                                /> : <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                                    <path
                                        fill='currentColor'
                                        d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                                    />
                                    <path
                                        fill='currentColor'
                                        d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                                    />
                                    <path
                                        fill='currentColor'
                                        d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                                    />
                                </svg>

                        }
                    </button>
                    {isMenuOpen && (
                        <div className='absolute z-10 top-0 left-0 w-full p-5'>
                            <div className='p-5 bg-white border rounded shadow-sm'>
                                <div className='flex items-center justify-between mb-4'>
                                    <div>
                                        <Link
                                            to='/'
                                        >

                                            <div className='text-lg font-bold tracking-wide text-gray-800'>
                                                The Chef's Corner
                                            </div>
                                        </Link>
                                    </div>
                                    <div>
                                        <button
                                            onClick={() => setIsMenuOpen(false)}
                                            className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                                        >
                                            <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                                                <path
                                                    fill='currentColor'
                                                    d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className='space-y-4'>
                                        <li>
                                            <Link
                                                to='/'
                                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                                            >
                                                Home
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                to='/blog'
                                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                                            >
                                                Blog
                                            </Link>
                                        </li>
                                        {!user ? <li>
                                            <Link
                                                to='/account/login'
                                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                                            >
                                                Login
                                            </Link>
                                        </li> :
                                            <li onClick={handleLogOut}>
                                                <Link
                                                    className={({ isActive }) => (isActive ? 'active' : 'default')}
                                                >
                                                    Logout
                                                </Link>
                                            </li>}
                                        <li>
                                            <Link
                                                to='/account/register'
                                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                                            >
                                                Register
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex items-center lg:gap-5">
                    {user ?
                        <button onClick={handleLogOut} type='button' className='btn-outlined hidden lg:flex'>
                            Logout
                        </button> :
                        <Link to={"/account/login"}><button type='button' className='btn-outlined hidden lg:flex'>
                            Login
                        </button></Link>
                    }
                    {
                        user?.photoURL &&
                        <img
                            src={user?.photoURL}
                            alt="User Profile"
                            className="w-10 h-10 rounded-full hidden lg:flex"
                            data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName} data-tooltip-place="right"
                        />                 
                    }
                    <Tooltip id="my-tooltip"/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;