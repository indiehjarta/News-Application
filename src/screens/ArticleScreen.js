import React, { Component } from 'react';

// imports components
import Header from '../comps/header/Header';

class ArticleScreen extends Component {
    render () {
        return (
            <div className="ArticleScreen">
                <Header />
                <h2>Here comes the specific article</h2>
            </div>
        );
    };
}

export default ArticleScreen;