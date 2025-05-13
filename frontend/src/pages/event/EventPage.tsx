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
            <div className='event-actions'>
                <div className='event-nav-back'>Back</div>
                <div id='event-header'></div>
                <div className='save-button'></div>
                <div className='share-button'></div>
            </div>
            <div className='event-details-container'>
                <div className='event-poster'>
                    <div className='poster-image-container'>
                        <img src={ENGLISH}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventPage;
