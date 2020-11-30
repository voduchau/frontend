import React from 'react';
import { useMedia } from 'react-media';

const GLOBAL_MEDIA_QUERIES = {
    small: "(max-width: 599px)",
    medium: "(min-width: 600px) and (max-width: 1199px)",
    large: "(min-width: 1200px)"
};

const QueryMedia = () => {
    const matches = useMedia({ queries: GLOBAL_MEDIA_QUERIES });
    console.log('vao day k')
    return matches;
}

export default QueryMedia;
