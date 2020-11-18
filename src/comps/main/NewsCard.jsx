import React, { Component, Fragment } from 'react';
import './MainStyling.css';
import { Link } from 'react-router-dom';

import image from '../../image.jpg';

// <i className="fas fa-angle-double-up"> in READ MORE

class NewsCard extends Component {
    render() {
        return (
            <Fragment>
                <div className="card-container">
                    <Link to='/article'>
                    <div className="card">
                        <img src={image} alt='' className='card-img'></img>
                        <article>
                            <div className='tags'>
                                <span className='card-tag'>Global</span>
                            </div>
                            <h3>Live updates: FDA approves first coronavirus test that delivers rapid results at home - The Washington Post</h3>
                            <p className='description'>The average daily number of patients dying of covid-19 in the United States has reached a level not seen since the outbreak surged during the summer.</p>
                            <span className='read-more'>Read more</span>
                            <i className='fas fa-share-alt' />
                        </article>
                    </div>
                    </Link>
                </div>
            </Fragment>
        )
    }
}

export default NewsCard;