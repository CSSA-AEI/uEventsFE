import React, { Suspense } from 'react';
import { useAuth } from '../../authentication/AuthContext.tsx';
import SlidingTabs from '../../components/SlidingTabs.tsx';
import './clubpage.css';

// const navItems = ["Home", "Search", "MyEvents"];

const ClubPage: React.FC = () => {

    // const [active, setActive] = useState("Home");
  
    const { userRole } = useAuth();

    if (userRole === 'guest') {
        console.log('User is a guest');
    } else if (userRole === 'authenticated') {
        console.log('User is authenticated');
    }

    return (
        <div className='club-page-layers'>
            <Suspense fallback={<div>Loading...</div>}>
                <div className='club-main-page-header'>

                </div>
                {/* <div className='club-page-container'> */}
                <div className='club-main-details'>
                    <div className='club-main-logo'>

                    </div>
                    <div className='club-main-name'>
                        <div>Computer Science Students' Association</div>
                    </div>
                </div>
                <SlidingTabs />
                {/* </div> */}
            </Suspense>
        </div>
    );
};

export default ClubPage;