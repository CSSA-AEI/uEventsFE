import React, { useState , Suspense , useEffect } from 'react';
import './pill.css';

interface PillProps{
    title: string;
}

const Pill: React.FC<PillProps> = ({title}) => {
  
    // TODO: Follow Figma flow, the whole login process should be done here
    return (
        <div className='pill'>
            {title}
        </div>
    );
};

export default Pill;