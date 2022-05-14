import { useEffect, useRef } from "react";

const useEventListener = (
    eventType = '',
    listener = () => null, 
    target = window, 
    options = null 
) => {
    const savedListener = useRef();

    useEffect(() => {
        if(!target.addEventListener) return;

        const eventListener = event => savedListener.current(event);

        target.addEventListener(eventType, listener, options);

        return () => {
            target.addEventListener(eventType, listener, options);
        }
    }, [eventType, target, options])
}

export default useEventListener;