import React, { useState , Suspense , useEffect } from 'react';
import { Link } from "react-router";
import './accountpill.css';

interface AccountPillProps{
    account: any;
    url: string;
}

const AccountPill: React.FC<AccountPillProps> = ({account, url}) => {
  
    // TODO: Follow Figma flow, the whole login process should be done here
    return (
        <Link to='/' className='account-pill'>
            <div className='account-pill-logo'>

            </div>
            <div className='account-names'>
                <div className='account-title'>CSSA</div>
                <div className='account-full-title'>Computer Science Students' Association</div>
            </div>
        </Link>
    );
};

export default AccountPill;