import React from 'react';
import { useParams } from 'react-router-dom';
import ENGLISH from './ENGLISH.png';
import './eventpage.css';

const EventPage: React.FC = () => {
    const { eventId } = useParams();

    const event = { 
        id: '1', 
        title: 'Capture the Flag', 
        time: '1:00pm - 4:00pm', 
        tags: ['Sport', 'Academic', 'Francophone'], 
        club: "CSSA"
    };

    return (
        <div className='event-details-body'>
            <div className='event-poster'>
                <img src={ENGLISH} />
            </div>

            
        </div>
    );
};

export default EventPage;
