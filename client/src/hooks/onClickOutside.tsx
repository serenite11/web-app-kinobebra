import {RefObject, useEffect} from 'react';

const useOnClickOutside = (ref: RefObject<HTMLDivElement>,
                           menuButtonRef: RefObject<HTMLDivElement>,
                           handler: (event: { target: any }) => void,
) => {
    useEffect(() => {
        const listener = (event: { target: any; }) => {
            if (!ref.current
                || ref.current.contains(event.target)
                || !menuButtonRef.current
                || menuButtonRef.current.contains(event.target)) {
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

const useOnClickOutsideForMenu =
    (
     userMenuRef: RefObject<HTMLDivElement>,
     userMenuButtonRef: RefObject<HTMLDivElement>,
     handler: (event: { target: any }) => void,
    ) => {
        useEffect(() => {
            const listener = (event: { target: any; }) => {
                if (!userMenuRef.current
                    || userMenuRef.current.contains(event.target)
                    || !userMenuButtonRef.current
                    || userMenuButtonRef.current.contains(event.target)) {
                    return;
                }
                handler(event);
            };
            document.addEventListener('mousedown', listener);
            return () => {
                document.removeEventListener('mousedown', listener);
            };
        }, [userMenuRef, handler]);
    };

export {useOnClickOutside, useOnClickOutsideForMenu};