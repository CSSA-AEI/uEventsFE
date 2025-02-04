import React, { useState , Suspense , useEffect } from 'react';
import './textcontainer.css';

interface TextContainerProps {
    title: string;
}

const TextContainer: React.FC<TextContainerProps> = ({title}) => {
  
    // TODO: Follow Figma flow, the whole login process should be done here
    return (
        <input className='login-input' placeholder={title}>   
        </input>
    );
};

export default TextContainer;