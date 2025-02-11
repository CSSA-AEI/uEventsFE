import React, { useState , Suspense , useEffect } from 'react';
import DailyEvents from './daily-events/DailyEvents.tsx';
import FollowedAccounts from './followed-accounts/FollowedAccounts.tsx';
import { motion } from "framer-motion";
import Navbar from '../../components/Navbar.tsx';
import './Home.css';

const navItems = ["Home", "Search", "MyEvents"];

const Home: React.FC = () => {

    const [active, setActive] = useState("Home");
  
    // TODO: Follow Figma flow, the whole login process should be done here
    return (
        <div className='home-layers'>
            <Suspense fallback={<div>Loading...</div>}>
                <div className='navbar-body'>
                    <ul className='navbar-list'>
                        {navItems.map((item) => (
                            <motion.li
                                key={item}
                                className={`navbar-item ${active === item ? "active" : ""}`}
                                onClick={() => setActive(item)}
                                layout // Enables automatic FLIP-like animation
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                {active === item && (
                                <motion.div
                                    className="active-bg"
                                    layoutId="activeBg"
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                                )}
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </div>
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