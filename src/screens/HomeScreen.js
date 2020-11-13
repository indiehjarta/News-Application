import React, { Component, Fragment } from 'react';

// imports components
import Header from '../comps/header/Header';
import NewsCard from '../comps/main/NewsCard';
import TagsBar from '../comps/nav/TagsBar';

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
                    <NewsCard />
                </main>
            </Fragment>
        );
    }
}

export default HomeScreen;