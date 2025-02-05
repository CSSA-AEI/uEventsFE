import React, { useState , Suspense , useEffect } from 'react';
import EventCard from './EventCard.tsx';
import './dailyevents.css';

const DailyEvents: React.FC = () => {
  
    // TODO: Follow Figma flow, the whole login process should be done here
    return (
        <div className='day-events-container'>
            <div className='date-header'>
                <div className='date'>Happening Today</div>
                {/* <div className='day-navigation-buttons'>
                    <div className='day-navigation'>l</div>
                    <div className='day-navigation'>r</div>
                </div> */}
                <div className='day-navigation-buttons'>
                    See All
                </div>
            </div>
            <div className='daily-events'>
                <div className='event-on-day'>
                    <EventCard />
                </div>
                <div className='event-on-day'>
                    <EventCard />
                </div>
                <div className='event-on-day'>
                    <EventCard />
                </div>
            </div>
        </div>
    );
};

export default DailyEvents;