import React, { Component, Fragment } from 'react';

// imports components
import Header from '../comps/header/Header';
import TagsBar from '../comps/nav/TagsBar';

class HomeScreen extends Component {
    render () {
        return (
            <Fragment>
                <Header />
                <div className='bottom-header'>
                    <h1>The Newspaper</h1>
                </div>
                <main>
                    <TagsBar />
                </main>
            </Fragment>
        );
    }
}

export default HomeScreen;