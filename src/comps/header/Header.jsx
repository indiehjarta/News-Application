import React, { Component } from 'react';
import './HeaderStyling.css';
import SearchBar from './SearchBar';
import SocialMedia from './SocialMedia';
import SwitchMode from './SwitchMode';

// import day
import DayJS from 'react-dayjs';

class Header extends Component {
    render () {
        return (
            <header>
                <div className='top-header'>
                    <div className='top-items-left'>
                        <SocialMedia />
                    </div>
                    <div className='top-item-center'>
                        <p id="current-date">– <DayJS date={ "" } format={"dddd D MMMM YYYY"}/> –</p>
                    </div>
                    <div className='top-items-right'>
                        <SearchBar />
                        <SwitchMode />
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;