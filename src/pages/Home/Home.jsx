import React from 'react';
import Banner from './Banner';
import ChefSection from './ChefSection';
import AboutSection from './AboutSection';
import OurPartners from './OurPartners';

const Home = () => {
    return (
        <div>
            <Banner />
            <ChefSection />
            <AboutSection />
            <OurPartners />
        </div>
    );
};

export default Home;