import React, { Component } from 'react';
import '../../App.css';
import SocialMedia from './SocialMedia';
import SwitchMode from './SwitchMode';

// import moment from 'moment';

class Header extends Component {
    render () {
        return (
            <header>
                <div className='header-left-container'>
                    <SocialMedia />
                    <hr />
                    <SwitchMode />
                </div>
                <div className='header-center-container'>
                    <h1>The Newspaper</h1>
                    <p id="current-date">– <span id="fetch-date">Tuesday 29 September 2020</span> –</p>
                </div>
                <div className='header-right-container'>
                </div>
            </header>
        );
    }
}

export default Header;