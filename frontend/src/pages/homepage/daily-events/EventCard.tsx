import React from 'react';
import { useNavigate } from 'react-router';
import Pill from '../../../components/Pill.tsx';
import { Link } from "react-router";
import './eventcard.css';

interface EventCardProps{
    id: string;
    time: string;
    tags: any[];
    name: string;
    club: string;
    posterUrl: any;
}

const EventCard: React.FC<{event : EventCardProps}> = ({event}) => {
  
    // TODO: Follow Figma flow, the whole login process should be done here
    console.log(event.posterUrl);

    return (
        <Link to={`/events/${event.id}`} className='event-card-container'>
            <div className='event-img-container'>
                <img src={event.posterUrl}/>
            </div>
            <div className='event-card-details'>
                <div className='event-card-header'>
                    <p>{event.name}</p>
                    <div className='club-card-logo'></div>
                </div>
                {/* <div className='event-card-time'>{event.time}</div> */}
            </div>
            {/* <div className='event-card-tags'>
                {event.tags.map((tag, index) => (
                    <Pill key={index} title={tag} />
                ))}
            </div> */}
        </Link>
    );
};

export default EventCard;