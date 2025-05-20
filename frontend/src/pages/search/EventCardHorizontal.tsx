import React, { useState , Suspense , useEffect } from 'react';
import FollowedAccounts from '../homepage/followed-accounts/FollowedAccounts.tsx';
import DateCarousel from './DateCarousel/DateCarousel.tsx';
import EventCard from '../homepage/daily-events/EventCard.tsx';
import './Search.css';

export interface EventCard {
    eventImage: File;
    eventName: String;
    eventDesc: String;
}
const EventCardHorizontal: React.FC = () => {

    
    return (
        <div className='not-follow-event'>
            <div className='event-main-details'>
                <div className='event-main-image'>

                </div>
                <div className='event-main-name'>
                    <div>Winter Wonderland Ball</div>
                    <div>A night of mystical wonder and whimsy</div>
                    <div>UOSU, IPSAA</div>
                </div>
            </div>
        </div>
    );
};

export default EventCardHorizontal;