import React, { useState , Suspense , useEffect } from 'react';
import './search.css';

const Search: React.FC = () => {
  
    return (
        <div className='home-layers'>
            <Suspense fallback={<div>Loading...</div>}>
                <div>Hallo Hallo</div>
            </Suspense>
        </div>
    );
};

export default Search;