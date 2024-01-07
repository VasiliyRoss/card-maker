import React from 'react';
import { Size, Position, ImageBlock } from '../../types/content';

function Image(props: ImageBlock) {
    return <img src={props.src} />;
}

export default Image;
