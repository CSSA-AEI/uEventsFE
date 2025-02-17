import React, { useState , Suspense , useEffect } from 'react';
import Welcome from './login-states/Welcome.tsx';
import SignIn from './login-states/SignIn.tsx';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../authentication/AuthContext.tsx';
import './Login.css';
import CreateAccount from './login-states/CreateAccount.tsx';

const Login: React.FC = () => {
  
    // TODO: Follow Figma flow, the whole login process should be done here
    const { login } = useAuth();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    // Get page from URL or default to 0
    const page = parseInt(searchParams.get('page') || '0');

    // Function to update page in the URL
    const setPage = (newPage: number) => {
        setSearchParams({ page: newPage.toString() });
    };


    const render = () =>{
        switch(page){
            default:
                return <Welcome setPage={setPage}/>
            case 1:
                return <Welcome setPage={setPage}/>
            case 2:
                return <CreateAccount setPage={setPage} />
            case 3:
                return <SignIn setPage={setPage} />
        }
    }

    return (
            <div className='login-layers'>
                <Suspense fallback={<div>Loading...</div>}>
                    <div className='top-pictures'>
                        <div className='pictures-top-layer'>
                            <div className='top-images-container'>
                                <div style={{backgroundColor: "red"}}></div>
                                <div ></div>
                                <div style={{backgroundColor: "teal"}}></div>
                            </div>
                        </div>
                        <div className='pictures-bottom-layer'>
                            <div className='top-images-container'>
                                <div style={{backgroundColor: "red"}}></div>
                                <div ></div>
                                <div style={{backgroundColor: "teal"}}></div>
                                <div style={{backgroundColor: "red"}}></div>
                                <div ></div>
                                <div style={{backgroundColor: "teal"}}></div>
                            </div>
                        </div>
                    </div>
                    <div className='login-processing'>
                        {render()}
                    </div>
                </Suspense>
            </div>
    );
};

export default Login;