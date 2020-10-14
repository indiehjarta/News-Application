import React, { Component } from 'react';
import './HeaderStyling.css';

class SwitchMode extends Component {
    render () {
        return (
			<div>
				<input type="checkbox" className="checkbox" id="chk" />
				<label className="label" for="chk">
					<i className="fas fa-moon"></i>
					<i className="fas fa-sun"></i>
					<div className="ball"></div>
				</label>
			</div>
        );
    };
}

export default SwitchMode;

/*

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});
*/ 