import React, { useState } from 'react';
import TextContainer from '../../../components/login/TextContainer.tsx';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../authentication/AuthContext.tsx';
import './createaccount.css';

interface SignInProps {
    setPage: (page: number) => void;
}

const SignIn: React.FC<SignInProps> = ({setPage}) => {

    // TODO: Follow Figma flow, the whole login process should be done here
    const { login } = useAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent page refresh

        try {
            // POST to endpoint to verify user data is correct
            console.log("woke")
            const response = await fetch('https://ueventsbe.onrender.com/users/validate-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
                mode: 'cors',
                redirect: 'manual',
                credentials: 'include',
            });

            if (!response.ok) {
                throw new Error('No such user exists');
            }

            const result = await response.json();
            console.log('Success:', result);

            // Navigate to next page (e.g., login)
            login("authenticated");

            // Redirect to homepage after successful login
            navigate('/');
        } catch (error) {
            console.error('Error:', error);
            alert('Registration failed, please try again.');
        }
    };

    return (
        <div className='welcome-body'>
            <div className='login-header'>Sign In</div>
            <form onSubmit={handleSubmit}>
                <input className='login-input' type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required/>
                <input className='login-input' type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required/>
                <div className='create-account-buttons'>
                    <button onClick={() => setPage(1)}>Go back</button>
                    <button type='submit'>Sign In</button>
                </div>
            </form>
            <div className='powered-cssa'>Powered by the CSSA</div>
        </div>
    );
};

export default SignIn;