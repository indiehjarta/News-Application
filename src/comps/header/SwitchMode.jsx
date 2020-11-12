import React, { useState } from 'react'
import './HeaderStyling.css';
import DarkModeToggle from 'react-dark-mode-toggle';

const SwitchMode = () => {
	const [isDarkMode, setIsDarkMode] = useState(() => false);
	return (
		<DarkModeToggle 
			onChange={setIsDarkMode}
			checked={isDarkMode}
			size={58}
			speed={2}
		/>
	)
}

export default SwitchMode;