import React, { useState , Suspense , useEffect } from 'react';
import './home.css';

const Home: React.FC = () => {
  
    // TODO: Follow Figma flow, the whole login process should be done here
    return (
        <div className='home-layers'>
            <Suspense fallback={<div>Loading...</div>}>
                <div>Hallo Hallo</div>
            </Suspense>
        </div>
    );
};

export default Home;