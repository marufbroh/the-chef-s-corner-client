import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import errorSvg from '../../assets/404 Error-pana.png'

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <div className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <div className='max-w-md text-center'>
                    <img src={errorSvg} alt="404" />
                    <p className='text-2xl font-semibold md:text-3xl mb-8'>
                        {error?.message}
                    </p>
                    <Link
                        to='/'
                        className='px-8 py-3 font-semibold rounded bg-amber-600 text-gray-900'
                    >
                        Back to homepage
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage