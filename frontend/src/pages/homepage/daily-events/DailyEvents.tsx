import React from 'react';
import EventCard from './EventCard.tsx';
import './dailyevents.css';

const DailyEvents: React.FC = () => {
    
    const events = [
        { id: '1', title: 'Capture the Flag', time: '1:00pm - 4:00pm', tags: ['Sport', 'Academic', 'Francophone'], club: "CSSA"},
        { id: '2', title: 'Tech Talk', time: '2:00pm - 3:30pm', tags: ['Tech', 'Networking'], club: "ESS" },
        { id: '3', title: 'Coding Challenge', time: '3:00pm - 5:00pm', tags: ['Coding', 'Competition'], club: "CSSA" }
    ];
    
    // TODO: Follow Figma flow, the whole login process should be done here
    return (
        <div className='day-events-container'>
            <div className='date-header'>
                <div className='date'>Happening Today</div>
                <div className='day-navigation-buttons'>
                    See All
                </div>
            </div>
            <div className='daily-events'>
                {events.map((event) => (
                    <div className='event-on-day' key={event.id}>
                        <EventCard event={event} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DailyEvents;