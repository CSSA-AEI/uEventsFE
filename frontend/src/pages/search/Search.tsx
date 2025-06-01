import React, { useState , Suspense , useEffect } from 'react';
import FollowedAccounts from '../homepage/followed-accounts/FollowedAccounts.tsx';
import DateCarousel from './DateCarousel/DateCarousel.tsx';
import EventCard from '../homepage/daily-events/EventCard.tsx';
import './Search.css';

const API_BASE = 'https://ueventsbe.onrender.com';

const Search: React.FC = () => {

    const [selectedDate, setSelectedDate] = useState<string>(() => {
        const t = new Date();
        t.setHours(0, 0, 0, 0);
        return t.toISOString();
    });
    
    // Fetched events for that date
    const [events, setEvents] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        async function fetchEvents() {
            setLoading(true);
            setError(null);
            try {
                const url = `https://ueventsbe.onrender.com/events/get-events-specific?date=${encodeURIComponent(selectedDate)}`;
                const resp = await fetch(url);
                if (!resp.ok) throw new Error(`Server returned ${resp.status}`);
                const data = await resp.json();
                setEvents(data);
            }  
            catch (err: any) {
                setError(err.message);
                setEvents([]);
            } 
            finally {
                setLoading(false);
            }
        }
        fetchEvents();
    }, [selectedDate]);

    console.log(events)
    
    return (
        <div className='search-layers'>
            <Suspense fallback={<div>Loading...</div>}>
                <FollowedAccounts accounts={[]} url=''/>
                <div className='search-bar-container'>

                </div>
                <DateCarousel selectedDate={selectedDate} onDateSelect={setSelectedDate}/>
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
                                <div>A night of mystical wonder and whimsy</div>
                                <div>UOSU, IPSAA</div>
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