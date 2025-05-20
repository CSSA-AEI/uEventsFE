import React, { useState, Suspense, ChangeEvent } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../authentication/AuthContext.tsx';
import BasicInformation from './create-event-states/BasicInformation.tsx';
import SlidingTabs from '../../components/SlidingTabs.tsx';
import DropdownMenu from './DropdownMenu.tsx';
import ImageUploader from './ImageUploader.tsx';
import Pill from '../../components/Pill.tsx';
import './CreateEvent.css';

export interface FormData {
    eventName: string;
    eventLocation: string;
    description: string;
    age: string;
    eventImage: File | null; 
}

const CreateEvent: React.FC = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const [currentTab, setCurrentTab] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams();

    const tags = ['Sports', 'Music', 'Art', 'Tech', 'Travel'];
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const [formData, setFormData] = useState<FormData>({
        eventName: "",
        eventLocation: "",
        description: "",
        age: "",
        eventImage: null,             // ← initialize
    });

    // Text inputs handler
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // ImageUploader handler
    const handleImageSelect = (file: File | null) => {
        setFormData(prev => ({ ...prev, eventImage: file }));
    };

    const nextStep = () => setPage(p => p + 1);
    const prevStep = () => setPage(p => p - 1);

    const handleSubmit = async () => {
        try {
        // if you need to send the image, use FormData()
        const payload = new FormData();
        payload.append("eventName", formData.eventName);
        payload.append("eventLocation", formData.eventLocation);
        payload.append("description", formData.description);
        payload.append("age", formData.age);
        if (formData.eventImage) {
            payload.append("eventImage", formData.eventImage);
        }

        const response = await fetch("/api/events", {
            method: "POST",
            body: payload,
        });

        if (!response.ok) throw new Error("Failed to submit");
        alert("Form submitted successfully!");
        navigate("/events");    // or wherever
        } catch (error) {
        console.error("Error submitting form:", error);
        }
    };

    return (
        <div className='create-event-layers'>
            <Suspense fallback={<div>Loading...</div>}>
                <div className='event-actions'>
                    <div className='event-nav-back'></div>
                    <div id='event-header'>Create Event</div>
                    <div className='save-button' onClick={handleSubmit}>Save</div>
                </div>
                <SlidingTabs tabs={["English", "French"]} currentTab={setCurrentTab}/>
                <div className='upload-container'>
                    <div className='upload-header'>
                        1. Upload Event Poster
                    </div>
                    <div className='event-image-upload'>
                        <ImageUploader
                            onSelect={handleImageSelect}
                        />
                    </div>
                    <div className='create-event-title'>
                        <div className='upload-header'>2. Event Title</div>
                        <input type='text' placeholder='Event Title' name='eventTitle' required/>
                    </div>
                    <div className='create-event-title'>
                        <div className='upload-header'>3. Event Description</div>
                        <input type='text' placeholder='Event Description' name='eventTitle' required/>
                    </div>
                    <div className='create-event-title'>
                        <div className='upload-header'>4. Add Tags</div>
                        <div style={{fontSize: `0.5rem`}}>Please note you can only select up to 3 tags</div>
                        <DropdownMenu
                            options={tags}
                            selected={selectedTags}
                            onChange={setSelectedTags}
                            label="Pick up to 3 tags"
                            maxSelect={3}
                        />
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                            {selectedTags.map((tag, idx) => (
                                <Pill key={idx} title={String(tag)} />
                            ))}
                        </div>
                    </div>
                    <div className='create-event-title'>
                        <div className='upload-header'>5. Is this a collab event?</div>
                        <input type='text' placeholder='Event Description' name='eventTitle' required/>
                    </div>
                </div>
            </Suspense>
        </div>
    );
};

export default CreateEvent;
