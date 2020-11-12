import React, { Component, Fragment } from 'react';

// imports components
import Header from '../comps/header/Header';
import Article from '../comps/main/Article';

class ArticleScreen extends Component {
    render () {
        return (
            <Fragment>
                <Header />
                <main>
                    <Article />
                </main>
            </Fragment>
        );
    };
}

export default ArticleScreen;