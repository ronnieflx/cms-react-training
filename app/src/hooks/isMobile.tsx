import React, { useState, useEffect } from 'react';

function viewPortSize() {
	const [isMobile, setIsMobile] = useState(Boolean);
	useEffect(() => {
		const mediaQuery = window.matchMedia('(max-width: 639px)');

		function handleViewportChange(event) {
			const isMobile = event.matches;
			const body = document.body;

			if (isMobile) {
				setIsMobile(true)
			
			} else {
				setIsMobile(false)
				
			}
		}
		
		handleViewportChange(mediaQuery);

		// Add event listener
		mediaQuery.addListener(handleViewportChange);

		// Remove event listener on unmount
		return () => mediaQuery.removeListener(handleViewportChange);
	}, []);
	return [ isMobile ]
}

export default viewPortSize;