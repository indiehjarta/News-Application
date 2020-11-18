import React, { Component, Fragment } from 'react';

// imports components
import Header from '../comps/header/Header';
import TagsBar from '../comps/nav/TagsBar';
import { NewsContextProvider } from '../NewsContext';
import News from '../comps/main/News';

class HomeScreen extends Component {
    render () {
        return (
            <Fragment>
                <Header />
                <div className='bottom-header'>
                    <h1>The Newspaper</h1>
                </div>
                <TagsBar />
                <main>
                    <NewsContextProvider>
                        <News />
                    </NewsContextProvider>
                </main>
            </Fragment>
        );
    }
}

export default HomeScreen;