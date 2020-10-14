import React, { Component, Fragment } from 'react';
import './HeaderStyling.css';

class SocialMedia extends Component {
    render () {
        return (
            <Fragment>
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-pinterest"></i>
            </Fragment>
        );
    };
}

export default SocialMedia;