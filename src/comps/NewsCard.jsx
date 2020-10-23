import React, { Component, Fragment } from 'react';
import '../App.css';

import { Card } from '@material-ui/core';

class NewsCard extends Component {
    render () {
        return (
            <Fragment>
                <Card>Ett</Card>
                <Card>Två</Card>
                <Card>Tre</Card>
            </Fragment>
        );
    }
}

export default NewsCard;

/*

import React, { Component } from 'react';
import '../App.css';
import testimg from '../img/pexels-dark-indigo-2917442.jpg';

class NewsCard extends Component {
    render () {
        return (
            <div className='cards-container'>
                <div className='card'>
                    <img src={testimg} alt='something'/>
                    <h2>Heading 1</h2>
                </div>
                <div className='card'>
                    <h2>Heading 2</h2>
                </div>
                <div className='card'>
                    <h2>Heading 3</h2>
                </div>
                <div className='card'>
                    <h2>Heading 4</h2>
                </div>
            </div>
        );
    }
}

export default NewsCard;

*/