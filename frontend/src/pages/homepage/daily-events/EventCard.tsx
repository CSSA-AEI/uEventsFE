import React, { useState , Suspense , useEffect } from 'react';
import Pill from '../../../components/Pill.tsx';
import './eventcard.css';

const EventCard: React.FC = () => {
  
    // TODO: Follow Figma flow, the whole login process should be done here
    return (
        <div className='event-card-container'>
            <div className='event-img-container'>

            </div>
            <div className='event-card-details'>
                <div className='event-card-header'>
                    <p>Capture the Flag</p>
                    <div className='club-card-logo'></div>
                </div>
                <div className='event-card-time'>1:00pm - 4:00pm</div>
            </div>
            <div className='event-card-tags'>
                <Pill title='Sport'/>
                <Pill title='Academic'/>
                <Pill title='Francophone'/>
            </div>
        </div>
    );
};

export default EventCard;