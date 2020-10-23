import React, { Component, Fragment } from 'react';
import './HeaderStyling.css';

class SocialMedia extends Component {
    render () {
        return (
            <Fragment>
                <i className="fab fa-facebook-square" style={{color: 'white'}}></i>
                <i className="fab fa-instagram" style={{color: 'white'}}></i>
                <i className="fab fa-twitter" style={{color: 'white'}}></i>
                <i className="fab fa-pinterest" style={{color: 'white'}}></i>
            </Fragment>
        );
    };
}

export default SocialMedia;