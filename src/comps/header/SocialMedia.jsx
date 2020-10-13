import React, { Component } from 'react';

import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
import { IconContext } from "react-icons";

class SocialMedia extends Component {
    render () {
        return (
            <IconContext.Provider value={{ size: '1.8em', style: { paddingRight: '15px' } }}>
                <FaFacebookSquare />
                <FaInstagram />
                <FaTwitter />
            </IconContext.Provider>
        );
    };
}

export default SocialMedia;