import React from 'react';
import LoginButton from '../../../components/login/LoginButton.tsx';
import './welcome.css';

interface WelcomeProps {
    setPage: (page: number) => void;
}

const Welcome: React.FC<WelcomeProps> = ({setPage}) => {

    // TODO: Follow Figma flow, the whole login process should be done here
    return (
        <div className='welcome-body'>
            <div className='login-header'>Welcome to uEvents</div>
            <div className='login-container'>
                <LoginButton title='Already have a uEvents account?' onClick={() => setPage(3)}/>
                <LoginButton title='Create an account' onClick={() => setPage(2)}/>
                <LoginButton title='Skip for now' onClick={() => console.log(3)}/>
            </div>
            <div className='powered-cssa'>Powered by the CSSA</div>
        </div>
    );
};

export default Welcome;