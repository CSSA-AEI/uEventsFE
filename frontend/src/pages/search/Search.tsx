import React, { useState , Suspense , useEffect } from 'react';
import SearchResults from './search-results/SearchResults.tsx';
import './Search.css';

const Search: React.FC = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

    return (
        <div className='search-layers'>
            <Suspense fallback={<div>Loading...</div>}>
                Search for Events
                <div className='search'>
                    <form className='search-bar'>
                        <input id='search-input' type='text' placeholder='Search'></input>
                        <div className='search-filter-button' onClick={toggleDropdown}></div>
                        <input id='search-button' type='submit' value=''></input>
                    </form>                    
                    {isDropdownVisible && (
                        <div className='filter-dropdown'>
                            <div>Filter Option 1</div>
                            <div>Filter Option 2</div>
                            <div>Filter Option 3</div>
                        </div>
                    )}
                </div>
                <SearchResults />
            </Suspense>
        </div>
    );
};

export default Search;