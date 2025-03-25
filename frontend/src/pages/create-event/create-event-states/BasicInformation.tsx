import React, { useState } from 'react';
import './basicinformation.css';
import { FormData } from '../CreateEvent';
  
export interface BasicInformationProps {
    formData: FormData;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    nextStep?: () => void;
    prevStep?: () => void;
    handleSubmit?: () => void;
}
  
const BasicInformation: React.FC<BasicInformationProps> = ({ formData, handleChange, nextStep }) => {
    return (
        <div className='basic-information-body'>
            <div className='create-event-title'>Create an Event</div>
            <div className='input-fields'>
                <input
                    className='login-input'
                    type="text"
                    name="eventName"
                    value={formData.eventName}
                    onChange={handleChange}
                    placeholder="Event Name"
                />
                <input
                    className='login-input'
                    type="text"
                    name="eventLocation"
                    value={formData.eventLocation}
                    onChange={handleChange}
                    placeholder="Event Location"
                />
                <input
                    className='login-input'
                    type="text"
                    name="eventLocation"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Description..."
                />
            </div>
            <div className='event-nav-buttons'>
                <button onClick={nextStep}>Next</button>
            </div>
        </div>
    );
  };
  
export default BasicInformation;