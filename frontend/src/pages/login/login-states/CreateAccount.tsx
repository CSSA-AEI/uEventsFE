import React, { useState } from 'react';
import TextContainer from '../../../components/login/TextContainer.tsx';
import './createaccount.css';

interface CreateAccountProps {
    setPage: (page: number) => void;
}

const CreateAccount: React.FC<CreateAccountProps> = ({setPage}) => {

    // TODO: Follow Figma flow, the whole login process should be done here

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await fetch('https://ueventsbe.onrender.com/users/add-user', {
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
                throw new Error('Failed to create account');
            }

            const result = await response.json();
            console.log('Success:', result);

            // Navigate to next page (e.g., login)
            setPage(3);
        } catch (error) {
            console.error('Error:', error);
            alert('Registration failed, please try again.');
        }
    };

    return (
        <div className='welcome-body'>
            <div className='login-header'>Create an Account</div>
            <form onSubmit={handleSubmit}>
                <input className='login-input' type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required/>
                <input className='login-input' type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required/>
                <input className='login-input' type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required/>
                <input className='login-input' type="password" name="password" placeholder="Your Password" value={formData.password} onChange={handleChange} required/>
                <div className='create-account-buttons'>
                    <button onClick={() => setPage(1)}>Go back</button>
                    <button type='submit'>Create</button>
                </div>
            </form>
            <div className='powered-cssa'>Powered by the CSSA</div>
        </div>
    );
};

export default CreateAccount;