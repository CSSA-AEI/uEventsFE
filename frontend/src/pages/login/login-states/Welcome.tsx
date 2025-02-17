import React from 'react';
import LoginButton from '../../../components/login/LoginButton.tsx';
import { useAuth } from '../../../authentication/AuthContext.tsx';
import { useNavigate } from 'react-router-dom';
import './welcome.css';

interface WelcomeProps {
    setPage: (page: number) => void;
}

const Welcome: React.FC<WelcomeProps> = ({setPage}) => {

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleGuestLogin = () => {
        login('guest');
        navigate('/');
    };

    return (
        <div className='welcome-body'>
            <div className='login-header'>Welcome to uEvents</div>
            <div className='login-container'>
                <LoginButton title='Already have a uEvents account?' onClick={() => setPage(3)}/>
                <LoginButton title='Create an account' onClick={() => setPage(2)}/>
                <LoginButton title='Skip for now' onClick={handleGuestLogin}/>
            </div>
            <div className='powered-cssa'>Powered by the CSSA</div>
        </div>
    );
};

export default Welcome;