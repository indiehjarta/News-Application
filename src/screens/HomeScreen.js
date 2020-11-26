import React from 'react';

// imports components
import Header from '../comps/header/Header';
import TagsBar from '../comps/nav/TagsBar';
import '../comps/header/HeaderStyling.css';
import { NewsContextProvider } from '../NewsContext';
import News from '../comps/main/News';

// imports libs, packages..
import styled from 'styled-components';

const H1 = styled.h1 `
    font-family: 'Playfair Display', serif;
    font-weight: 600;
    text-transform: uppercase;
    color: #000;
    font-size: 3rem;
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
`;

const HomeScreen = () => {
    return (
        <div>
            <Header />
                <div className='bottom-header'>
                    <H1>The Newspaper</H1>
                </div>
                <TagsBar />
                <main>
                    <NewsContextProvider>
                        <News />
                    </NewsContextProvider>
                </main>
        </div>
    )
}

export default HomeScreen
