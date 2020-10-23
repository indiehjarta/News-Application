import React, { Component } from 'react';
import './HeaderStyling.css';
import SearchBar from './SearchBar';
import SocialMedia from './SocialMedia';
import SwitchMode from './SwitchMode';
//import SelectLanguage from './SelectLanguage';

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
                <div className='bottom-header'>
                    <h1>The Newspaper</h1>
                </div>
            </header>
        );
    }
}

export default Header;