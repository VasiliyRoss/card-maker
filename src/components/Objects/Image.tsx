import React from 'react';
import { ImageBlock } from '../../types/content';

function Image({ src }: ImageBlock) {
    return <img src={src} />;
}

export default Image;
