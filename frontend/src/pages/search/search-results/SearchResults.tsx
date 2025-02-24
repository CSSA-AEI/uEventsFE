import React, { useState , Suspense , useEffect } from 'react';
import './searchresults.css';
import EventCard from '../../homepage/daily-events/EventCard.tsx';

const SearchResults: React.FC = () => {
    
    const events = [
        { id: '1', title: 'Capture the Flag', time: '1:00pm - 4:00pm', tags: ['Sport', 'Academic', 'Francophone'], club: "CSSA"},
        { id: '2', title: 'Tech Talk', time: '2:00pm - 3:30pm', tags: ['Tech', 'Networking'], club: "ESS" },
        { id: '3', title: 'Coding Challenge', time: '3:00pm - 5:00pm', tags: ['Coding', 'Competition'], club: "CSSA" }
    ];
    
    return (
        <div className='result-layers'>
            <div className='result-events'>
                {events.map((event) => (
                    <div className='event' key={event.id}>
                        <EventCard event={event} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchResults;