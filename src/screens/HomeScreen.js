import React, { Component, Fragment } from 'react';

// imports components
import Header from '../comps/header/Header';
import TagsBar from '../comps/TagsBar';

class HomeScreen extends Component {
    render () {
        return (
            <Fragment>
                <Header />
                <main>
                    <TagsBar />
                </main>
            </Fragment>
        );
    }
}

export default HomeScreen;