import { useEffect, useRef } from 'react';

export const useKeypress = (key, handler) => {
	
	const eventListenerRef = useRef(handler);

	useEffect(() => {
		eventListenerRef.current = (e) => {
			if (key === e.keyCode) {
				handler(e);
			}
		};
	}, [key, handler]);

	useEffect(() => {
	    const eventListener = (e) => {
	    	eventListenerRef.current(e)
	    };

	    window.addEventListener('keydown', eventListener);
	    return () => {
	    	window.removeEventListener('keydown', eventListener);
    	};
	}, []);
}