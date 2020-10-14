import React, { Component } from 'react';
import '../../App.css';
import SearchBar from './SearchBar';
import SocialMedia from './SocialMedia';
import SwitchMode from './SwitchMode';
import SelectLanguage from './SelectLanguage';

// import moment from 'moment';

class Header extends Component {
    render () {
        return (
            <header>
                <div id='header-left-container'>
                    <div className='header-item-top-left'>
                        <SocialMedia />
                    </div>
                    <hr className='header-line'/>
                    <div className='header-item-bottom-left'>
                        <SelectLanguage />
                    </div>
                </div>
                <div id='header-center-container'>
                    <h1>The Newspaper</h1>
                    <p id="current-date">– <span id="fetch-date">Wednesday 14 October 2020</span> –</p>
                </div>
                <div id='header-right-container'>
                    <div className='header-item-top-right'>
                        <SwitchMode />
                    </div>
                    <hr className='header-line'/>
                    <div className='header-item-bottom-right'>
                        <SearchBar />
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;