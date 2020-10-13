import React, { Component } from 'react';

import { FaSun, FaMoon } from "react-icons/fa";
import { IconContext } from "react-icons";

class SwitchMode extends Component {
    render () {
        return (
            <IconContext.Provider value={{ size: '1.8em', style: { paddingRight: '15px' } }}>
                <FaSun />
                <p>Switch btn here</p>
                <FaMoon />
            </IconContext.Provider>  
        );
    };
}

export default SwitchMode;