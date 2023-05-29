import React from 'react';
import partner1 from '../../assets/p1.jpg'
import partner2 from '../../assets/p2.jpg'
import partner3 from '../../assets/p3.jpg'
import partner4 from '../../assets/p4.jpg'
import partner5 from '../../assets/p5.jpg'
import partner6 from '../../assets/p6.jpg'


const OurPartners = () => {
    return (
        <div className='my-container space-y-6'>
            <h2 className='font-bold text-4xl text-center'>Our Patner’s</h2>
            <div className="flex flex-col lg:flex-row justify-around space-y-3">
                <img src={partner1} alt="" />
                <img src={partner2} alt="" />
                <img src={partner3} alt="" />
                <img src={partner4} alt="" />
                <img src={partner5} alt="" />
                <img src={partner6} alt="" />
            </div>
        </div>
    );
};

export default OurPartners;