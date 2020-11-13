import React, { Component, Fragment } from 'react';
import './MainStyling.css';

class NewsCard extends Component {
    render() {
        return (
            <Fragment>
                <div className='card-container'>
                    <div className='card'></div>
                    <div className='card'></div>
                    <div className='card'></div>
                    <div className='card'></div>             
                </div>
                <div className='card-container'>
                    <div className='card'></div>
                    <div className='card'></div>
                    <div className='card'></div>
                    <div className='card'></div>             
                </div>
            </Fragment>
        )
    }
}

export default NewsCard;
