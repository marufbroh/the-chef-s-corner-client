import React, { useContext } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import banner1 from '../../assets/top-view-table-full-delicious-food-composition.jpg'
import banner2 from '../../assets/nutrition-vegetables-kitchenware.jpg'
import banner3 from '../../assets/douglas-lopez-LlPLQGgYuio-unsplash.jpg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Banner = () => {
    const {user} = useContext(AuthContext)
    return (
        <AwesomeSlider className='lg:h-[80vh]'>
            <div className='relative'>
                <img src={banner1} className='bg-cover blur-sm' alt="" />
                <div className='absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center flex-col text-center'>
                    <h1 className='text-4xl w-full lg:leading-tight lg:text-6xl lg:max-w-3xl title-text'>Welcome to Chef's Corner!!!</h1>
                    <p className='my-6 text-lg md:text-xl max-w-2/3 md:max-w-xl max-w-2xl text-white'>
                        Unleash your inner chef with our delectable recipes and cooking tips. Elevate your culinary game with us and savor the flavors of life.
                    </p>
                    {!user && <div className='hidden lg:flex justify-center gap-5'>
                        <Link to='/account/login'>
                            <button className="btn-primary btn-wide" type='submit'>Login</button>
                        </Link>
                        <Link to='/account/register'>
                            <button className="btn-primary btn-wide" type='submit'>Register</button>
                        </Link>
                    </div>}
                </div>
            </div>
            <div className='relative'>
                <img src={banner2} className='bg-cover blur-sm' alt="" />
                <div className='absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center flex-col text-center'>
                    <h1 className='text-4xl w-full lg:leading-tight lg:text-6xl lg:max-w-3xl title-text'>Welcome to Chef's Corner!!!</h1>
                    <p className='my-6 text-lg md:text-xl max-w-2/3 md:max-w-xl max-w-2xl text-white'>
                        Unleash your inner chef with our delectable recipes and cooking tips. Elevate your culinary game with us and savor the flavors of life.
                    </p>
                    {!user && <div className='hidden lg:flex justify-center gap-5'>
                        <Link to='/account/login'>
                            <button className="btn-primary btn-wide" type='submit'>Login</button>
                        </Link>
                        <Link to='/account/register'>
                            <button className="btn-primary btn-wide" type='submit'>Register</button>
                        </Link>
                    </div>}
                </div>
            </div>
            <div className='relative'>
                <img src={banner3} className='bg-cover blur-sm' alt="" />
                <div className='absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center flex-col text-center'>
                    <h1 className='text-4xl w-full lg:leading-tight lg:text-6xl lg:max-w-3xl title-text'>Welcome to Chef's Corner!!!</h1>
                    <p className='my-6 text-lg md:text-xl max-w-2/3 md:max-w-xl max-w-2xl text-white'>
                        Unleash your inner chef with our delectable recipes and cooking tips. Elevate your culinary game with us and savor the flavors of life.
                    </p>
                    {!user && <div className='hidden lg:flex justify-center gap-5'>
                        <Link to='/account/login'>
                            <button className="btn-primary btn-wide" type='submit'>Login</button>
                        </Link>
                        <Link to='/account/register'>
                            <button className="btn-primary btn-wide" type='submit'>Register</button>
                        </Link>
                    </div>}
                </div>
            </div>
        </AwesomeSlider>
    );
};

export default Banner;