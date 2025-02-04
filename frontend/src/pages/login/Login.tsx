import React, { useState , Suspense , useEffect } from 'react';
import Welcome from './login-states/Welcome.tsx';
import SignIn from './login-states/SignIn.tsx';
import { useSearchParams } from 'react-router-dom';
import './Login.css';
import CreateAccount from './login-states/CreateAccount.tsx';

const Login: React.FC = () => {
  
    // TODO: Follow Figma flow, the whole login process should be done here
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
                    <div className='top-pictures' style={{backgroundColor: "#8F001A"}}>

                    </div>
                    <div className='login-processing'>
                        {render()}
                    </div>
                </Suspense>
            </div>
    );
};

export default Login;