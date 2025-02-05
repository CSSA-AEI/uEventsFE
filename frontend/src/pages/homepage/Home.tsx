import React, { useState , Suspense , useEffect } from 'react';
import DailyEvents from './daily-events/DailyEvents.tsx';
import './Home.css';

const Home: React.FC = () => {
  
    // TODO: Follow Figma flow, the whole login process should be done here
    return (
        <div className='home-layers'>
            <Suspense fallback={<div>Loading...</div>}>
                <div><DailyEvents /></div>
            </Suspense>
        </div>
    );
};

export default Home;