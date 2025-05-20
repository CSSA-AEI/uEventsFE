import React, { Suspense, useState } from 'react';
import { useAuth } from '../../authentication/AuthContext.tsx';
import SlidingTabs from '../../components/SlidingTabs.tsx';
import Cover from "./101week.jpg";
import './clubpage.css';

// const navItems = ["Home", "Search", "MyEvents"];

const ClubPage: React.FC = () => {

    // const [active, setActive] = useState("Home");
  
    const { userRole } = useAuth();
    const [section, setSection] = useState(0);
    const sections = ["Posts", "Team"];

    if (userRole === 'guest') {
        console.log('User is a guest');
    } else if (userRole === 'authenticated') {
        console.log('User is authenticated');
    }

    return (
        <div className='club-page-layers'>
            <Suspense fallback={<div>Loading...</div>}>
                <div className='club-page-hero' style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${Cover})`, height: "30vh", width: "100%", backgroundSize: "cover", backgroundPosition: "center"}}>
                    <div className='club-main-details'>
                        <div className='club-main-logo'>

                        </div>
                        <div className='club-main-name'>
                            Computer Science Students' Association
                        </div>
                    </div>
                </div>
                <SlidingTabs tabs={sections} currentTab={setSection}/>
                <div className='club-posts'>
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
                                <div>A night of mystical wonder and whimsy</div>
                                <div>UOSU, IPSAA</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Suspense>
        </div>
    );
};

export default ClubPage;