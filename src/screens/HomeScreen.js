import React, { Component, Fragment } from 'react';

// imports components
import Header from '../comps/header/Header';
import TagsBar from '../comps/TagsBar';
/*import NewsCarousel from '../comps/NewsCarousel';
import NewsCard from '../comps/NewsCard';*/

class HomeScreen extends Component {
    render () {
        return (
            <Fragment>
                <Header />
                <TagsBar />
            </Fragment>
        );
    }
}

export default HomeScreen;