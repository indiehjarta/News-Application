import React from 'react';
import './HeaderStyling.css';
import SearchBar from './SearchBar';
import SocialMedia from './SocialMedia';
import SwitchMode from './SwitchMode';

// imports libs, packages..
import DayJS from 'react-dayjs';
import styled from 'styled-components';

/**
 * THEME THIS 
 */

const TopHeader = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 50px;
    width: 100%;
    height: 50px;
    background-color: #373737;
`;

const Header = () => {
    return (
        <header>
            <TopHeader>
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
            </TopHeader>
        </header>
    );
}

export default Header;
