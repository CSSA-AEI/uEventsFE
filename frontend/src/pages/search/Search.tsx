import React, { useState , Suspense , useEffect } from 'react';
import FollowedAccounts from '../homepage/followed-accounts/FollowedAccounts.tsx';
import DateCarousel from './DateCarousel/DateCarousel.tsx';
import EventCard from '../homepage/daily-events/EventCard.tsx';
import './Search.css';

const Search: React.FC = () => {

    const events = [
        { id: '1', title: 'Capture the Flag', time: '1:00pm - 4:00pm', tags: ['Sport', 'Academic', 'Francophone'], club: "CSSA"},
        { id: '2', title: 'Tech Talk', time: '2:00pm - 3:30pm', tags: ['Tech', 'Networking'], club: "ESS" },
        { id: '3', title: 'Coding Challenge', time: '3:00pm - 5:00pm', tags: ['Coding', 'Competition'], club: "CSSA" }
    ];
    
    return (
        <div className='search-layers'>
            <Suspense fallback={<div>Loading...</div>}>
                <FollowedAccounts accounts={[]} url=''/>
                <div className='search-bar-container'>

                </div>
                <DateCarousel />
                <div className='followed-accounts-events'>
                    <div className='following-header-container'>
                        <p className='following-header'>Following</p>
                        <p className='following-details'> These are from the accounts you follow</p>
                    </div>
                    <div className='followed-events-container'>
                        {events.map((event) => (
                            <div className='event-on-day' key={event.id}>
                                <EventCard event={event} />
                            </div>
                        ))}
                    </div>
                </div>
                <p className='following-header'>Accounts you're not following</p>
                <div className='not-following-events'>
                    <div className='not-follow-event'>
                        <div className='event-main-details'>
                            <div className='event-main-image'>

                            </div>
                            <div className='event-main-name'>
                                <div>Winter Wonderland Ball</div>
                            </div>
                        </div>
                    </div>
                    <div className='not-follow-event'>
                        <div className='event-main-details'>
                            <div className='event-main-image'>

                            </div>
                            <div className='event-main-name'>
                                <div>Winter Wonderland Ball</div>
                            </div>
                        </div>
                    </div>
                    <div className='not-follow-event'>
                        <div className='event-main-details'>
                            <div className='event-main-image'>

                            </div>
                            <div className='event-main-name'>

                            </div>
                        </div>
                    </div>
                </div>
            </Suspense>
        </div>
    );
};

export default Search;