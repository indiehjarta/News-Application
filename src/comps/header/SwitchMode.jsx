import React, { Component } from 'react';
import './HeaderStyling.css';
import DarkModeToggle from "react-dark-mode-toggle";

class SwitchMode extends Component {
    render () {
        return (
			/*<div>
				<input type="checkbox" className="checkbox" id="chk" />
				<label className="label" for="chk">
					<i className="fas fa-moon"></i>
					<i className="fas fa-sun"></i>
					<div className="ball"></div>
				</label>
			</div>*/
			<DarkModeToggle size={40}/>
        );
    };
}

export default SwitchMode;