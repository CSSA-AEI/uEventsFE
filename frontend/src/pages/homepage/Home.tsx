import React, { useState , Suspense , useEffect } from 'react';
import DailyEvents from './daily-events/DailyEvents.tsx';
import FollowedAccounts from './followed-accounts/FollowedAccounts.tsx';
import { useAuth } from '../../authentication/AuthContext.tsx';
import { motion } from "framer-motion";
import Navbar from '../../components/Navbar.tsx';
import './Home.css';

const navItems = ["Home", "Search", "MyEvents"];

const Home: React.FC = () => {

    const [active, setActive] = useState("Home");
  
    const { userRole } = useAuth();

    if (userRole === 'guest') {
        console.log('User is a guest');
    } else if (userRole === 'authenticated') {
        console.log('User is authenticated');
    }

    return (
        <div className='home-layers'>
            <Suspense fallback={<div>Loading...</div>}>
                <DailyEvents />
                <div className='homepage-buttons'>
                    <div className='uottawa-news'>
                        <div className='homebutton-header'>News</div>
                        <div className='homebutton-bottom'>Catch up on what's happening on campus</div>
                    </div>
                    <div className='feedback' style={{backgroundColor:"#D28134"}}>
                        <div className='homebutton-header'>Feedback</div>
                        <div className='homebutton-bottom'>Tell us what you think!</div>
                    </div>
                    <div className='newsletter' style={{backgroundColor:"#D46FAA"}}>
                        <div className='homebutton-header'>News</div>
                        <div className='homebutton-bottom'>Catch up on what's happening on campus</div>
                    </div>
                    <div className='newsletter2' style={{backgroundColor:"#597AD5"}}>
                        <div className='homebutton-header'>News</div>
                        <div className='homebutton-bottom'>Catch up on what's happening on campus</div>
                    </div>
                    <div className='feedback2' style={{backgroundColor:"#CD6A65"}}></div>
                </div>
                <FollowedAccounts accounts={[]} url=''/>
            </Suspense>
        </div>
    );
};

export default Home;