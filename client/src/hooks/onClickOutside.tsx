import {RefObject, useEffect} from 'react';

const useOnClickOutside = (ref: RefObject<HTMLDivElement>, menuButtonRef: RefObject<HTMLDivElement>, handler: (event: { target: any }) => void) => {
    useEffect(() => {
        const listener = (event: { target: any; }) => {
            console.log('Услышал щелчок')
            if (!ref.current
                || ref.current.contains(event.target)
                || !menuButtonRef.current
                || menuButtonRef.current.contains(event.target)) {
                console.log('Щелчок вне меню')
                return;
            }
            handler(event);
        };
        document.addEventListener('mousedown', listener);
        return () => {
            document.removeEventListener('mousedown', listener);
        };
    }, [ref, handler]);
};

export default useOnClickOutside;