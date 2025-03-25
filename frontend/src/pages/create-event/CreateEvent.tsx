import React, { useState , Suspense , useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../authentication/AuthContext.tsx';
import BasicInformation from './create-event-states/BasicInformation.tsx';
import './CreateEvent.css';

export interface FormData {
    eventName: string;
    eventLocation: string;
    description: string;
    age: string;
}

const CreateEvent: React.FC = () => {
  
    // TODO: Follow Figma flow, the whole login process should be done here
    const { login } = useAuth();
    const navigate = useNavigate();

    const [page, setPage] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();

    // Get page from URL or default to 0
    // const page = parseInt(searchParams.get('page') || '0');

    // Function to update page in the URL
    // const setPage = (newPage: number) => {
    //     setSearchParams({ page: newPage.toString() });
    // };
    const [formData, setFormData] = useState<FormData>({
        eventName: "",
        eventLocation: "",
        description: "",
        age: "",
    });
    
      // Handler for input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
      // Navigation handlers
    const nextStep = () => setPage((prev: number) => prev + 1);
    const prevStep = () => setPage((prev: number) => prev - 1);

    const handleSubmit = async () => {
        try {
          const response = await fetch("", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });
    
          if (!response.ok) {
            throw new Error("Failed to submit");
          }
    
          alert("Form submitted successfully!");
        } catch (error) {
          console.error("Error submitting form:", error);
        }
    };


    return (
            <div className='create-event-layers'>
                <Suspense fallback={<div>Loading...</div>}>
                    <div className='create-event-header' style={{flex: 2, backgroundColor: "red", width: "100%"}}>
                        Back
                    </div>
                    <div className='event-processing'>
                    {page === 1 && (
                        <BasicInformation formData={formData} handleChange={handleChange} nextStep={nextStep}/> 
                    )}

                    {page === 2 && (
                        <div>
                        <h2>Step 2: Enter Email</h2>
                        <input
                            type="email"
                            name="email"
                            value={formData.eventLocation}
                            onChange={handleChange}
                            placeholder="Enter your email"
                        />
                        <button onClick={prevStep}>Back</button>
                        <button onClick={nextStep}>Next</button>
                        </div>
                    )}

                    {page === 3 && (
                        <div>
                        <h2>Step 3: Enter Age</h2>
                        <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            placeholder="Enter your age"
                        />
                        <button onClick={prevStep}>Back</button>
                        <button onClick={handleSubmit}>Submit</button>
                        </div>
                    )}
                    </div>
                    <div className='progress-bar' style={{flex: 1, backgroundColor: "blue", width: "100%"}}>

                    </div>
                </Suspense>
            </div>
    );
};

export default CreateEvent;