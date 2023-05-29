import React from 'react';
import Pdf from 'react-to-pdf';
import { useRef } from 'react';

const Blog = () => {
    const ref = useRef();
    return (
        <div className='my-container'>
            <div className='flex justify-center mb-6'>
                <Pdf targetRef={ref} filename="document.pdf">
                    {({ toPdf }) => (
                        <button onClick={toPdf} className="btn-primary">
                            Download
                        </button>
                    )}
                </Pdf>
            </div>
            <div ref={ref} className='space-y-5'>
                <div className='bg-slate-100 p-5 lg:p-8 rounded-lg space-y-3 shadow-lg'>
                    <h3 className='font-bold text-3xl'>What is the differences between uncontrolled and controlled components?</h3>
                    <p className='font-semibold text-lg'>In a controlled component, we can  add event handlers to the form element to do capture changes in the input values .And Also updated the component's state with the new values. That means controlled component have full control over what happens to the data in the form, and you can validate and manipulate it before it's submitted. On the other hand ,uncontrolled component allows the user to enter data into a form without tracking that data in the component's state. Also uncontrolled components are simpler to set up and can be useful for simple forms where we don't need to do much validation or tracking of the data.
                    </p>
                </div>
                <div className='bg-slate-100 p-5 lg:p-8 rounded-lg space-y-3 shadow-lg'>
                    <h3 className='font-bold text-3xl'>How to validate React props using PropTypes?</h3>
                    <p className='font-semibold text-lg'>PropTypes are simply a mechanism that ensures that the passed value is of the correct datatype. At first we must  Install the PropTypes package by using this commend (npm install prop-types). 2nd we must import PropTypes from prop-types. The propTypes property is an object that contains keys for each prop that your component expects to receive, and values that specify the type of data that should be passed in.</p>
                </div>
                <div className='bg-slate-100 p-5 lg:p-8 rounded-lg space-y-3 shadow-lg'>
                    <h3 className='font-bold text-3xl'>What is the difference between nodejs and express js?</h3>
                    <p className='font-semibold text-lg'>Express.js and Node.js gave JavaScript newborn back-end functionality by allowing developers to create software with JavaScript on the server side for the first time. <br /> Node.js is a server-side runtime environment that allows you to run JavaScript code outside of a web browser, and it used to build server-side applications by using JavaScript. It provides us many features like file system access, networking capabilities, and the ability to run server-side JavaScript code.Node.js increases performance and handles tons of requests. For the client side it’s very useful, practical and fast because it demands users to form fewer clicks and have everything loaded directly. <br /> One the other side express js is a framework that simplifies the process of building web applications using Node.js. It also used for many features like routing, middleware support, and an easy-to-use API for handling HTTP requests and responses. Express js also help to creating server-side web applications more  faster and more smarter. <br /> In summary, Node.js is the platform that enables the execution of JavaScript code on the server, while Express.js is a framework that provides a set of tools and features to make building web applications easier on top of Node.js
                    </p>
                </div>
                <div className='bg-slate-100 p-5 lg:p-8 rounded-lg space-y-3 shadow-lg'>
                    <h3 className='font-bold text-3xl'>What is a custom hook, and why will you create a custom hook?</h3>
                    <p className='font-semibold text-lg'>In react application we use many hook like as useState ,useREf ,useEffect etc . But we can also create our own personal hook in react. Thats called custom hook . custom hook always start by "use" word like other react hooks .Custom hook used to implement a specific feature or behavior that can be shared across multiple components in a React application. Custom hooks should only contain logic related to a specific feature or behavior. To make custom hook we can solve very complex problem in our site . But custom hook should be unique and does not conflict with any existing hooks or functions in your application.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;