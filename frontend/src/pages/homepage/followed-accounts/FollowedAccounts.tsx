import React, { useState , Suspense , useEffect } from 'react';
import AccountPill from './AccountPill.tsx';
import { Link } from "react-router";
import './followedaccounts.css';

interface FollowedAccountsProps{
    accounts: any[];
    url: string;
}

const FollowedAccounts: React.FC<FollowedAccountsProps> = ({accounts, url}) => {
  
    // TODO: Follow Figma flow, the whole login process should be done here
    return (
        <div className='followed-accounts-container'>
            <div className='followed-accounts-header'>Accounts you follow</div>
            <div className='following-accounts'>
                <AccountPill account='' url=''/>
                <AccountPill account='' url=''/>
                <AccountPill account='' url=''/>
                <AccountPill account='' url=''/>
            </div>
        </div>
    );
};

export default FollowedAccounts;