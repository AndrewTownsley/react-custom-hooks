import { useCallback, useEffect, useState } from "react";

const useMediaQuery = (queries = [], values = [], defaultValue ) => {
    const mediaQueryList = queries.map(q => window.matchMedia(q));
    const getValue = useCallback(() => {
        // eslint-disable-next-line no-undef
        const index = mediaQueryList.findIndex(mql => mql.matches(q));
        return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
    }, [mediaQueryList, values, defaultValue])

    const [value, setValue] = useState(getValue);

    useEffect(() => {
        const handler = () => setValue(getValue);
        mediaQueryList.forEach(mql => mql.addEventListener('change', (handler)));

        return () => 
            // eslint-disable-next-line no-undef
            mediaQueryList.forEach(mql.removeEventListener('change', handler));
    }, [getValue, mediaQueryList])

    return value;
}

export default useMediaQuery;