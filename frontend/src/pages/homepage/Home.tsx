import React, { Suspense } from 'react';
import DailyEvents from './daily-events/DailyEvents.tsx';
import FollowedAccounts from './followed-accounts/FollowedAccounts.tsx';
import { useAuth } from '../../authentication/AuthContext.tsx';
import Headline from './assets/Covid.jpg';
import Comments from './assets/comments.svg';
import './Home.css';

// const navItems = ["Home", "Search", "MyEvents"];

const Home: React.FC = () => {

    // const [active, setActive] = useState("Home");
  
    const { userRole } = useAuth();

    if (userRole === 'guest') {
        console.log('User is a guest');
    } else if (userRole === 'authenticated') {
        console.log('User is authenticated');
    }

    return (
        <div className='home-layers'>
            <Suspense fallback={<div>Loading...</div>}>
                <FollowedAccounts accounts={[]} url=''/>
                <div className='newspaper-headliner'>
                    <img src={Headline} alt='headline'/>
                    <div className='headliner-details'>
                        <p>A New Era: What the virus means for the education of our species</p>
                        <p style={{fontFamily: "Roboto"}}>Lorem ipsum blah blah blah i cba to type anything useful in here</p>
                        <div className='article-writer-details'>
                            <div className='writers'>Christian Bale and Chris Bumstead</div>
                            <div className='comments'>
                                <div className='comments-icon'><img src={Comments} alt='comments icon'/></div>
                                <div>30</div>
                            </div>
                        </div>
                    </div>
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
            </Suspense>
        </div>
    );
};

export default Home;