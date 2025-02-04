import React, { useState , Suspense , useEffect } from 'react';
import './loginbutton.css';

interface LoginButtonProps {
    title: string;
    onClick?: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({title, onClick}) => {
  
    // TODO: Follow Figma flow, the whole login process should be done here
    return (
        <div className='login-button' onClick={onClick}>
            {title}
        </div>
    );
};

export default LoginButton;