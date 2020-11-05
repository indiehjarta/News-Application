import React, { Component } from 'react';

// imports components
import Header from '../comps/header/Header';

class PageNotFoundScreen extends Component {
    render () {
        return (
            <div className="PageNotFoundScreen">
                <Header />
                <h2>404 Page not found :(</h2>
            </div>
        );
    };
}

export default PageNotFoundScreen;