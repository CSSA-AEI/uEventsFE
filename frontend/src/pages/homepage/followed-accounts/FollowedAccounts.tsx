import React from 'react';
import { Link } from "react-router";
import './followedaccounts.css';
import filter from "../assets/filter.svg";

interface FollowedAccountsProps{
    accounts: any[];
    url: string;
}

const FollowedAccounts: React.FC<FollowedAccountsProps> = ({accounts, url}) => {
  
    // TODO: Follow Figma flow, the whole login process should be done here
    return (
        <div className='followed-accounts-container'>
            {/* <div className='followed-accounts-header'>Accounts you follow</div> */}
            <div className='following-accounts'>
                <div className='followed-account'>
                    <Link to='/' className='account-circle'>
                        <img src={filter} alt='filter icon'/>
                    </Link>
                    <div className='account-name'>Edit</div>
                </div>
                <div className='followed-account'>
                    <Link to='/' className='account-circle'></Link>
                    <div className='account-name'>CSSA/AEI</div>
                </div>
                <div className='followed-account'>
                    <Link to='/' className='account-circle'></Link>
                    <div className='account-name'>AÉÉIPPSSA</div>
                </div>
                <div className='followed-account'>
                    <Link to='/' className='account-circle'></Link>
                    <div className='account-name'>The Gym Bro</div>
                </div>
                <div className='followed-account'>
                    <Link to='/' className='account-circle'></Link>
                    <div className='account-name'></div>
                </div>
                <div className='followed-account'>
                    <Link to='/' className='account-circle'></Link>
                    <div className='account-name'></div>
                </div>
            </div>
        </div>
    );
};

export default FollowedAccounts;