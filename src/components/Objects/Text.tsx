import React from 'react';
import { TextBlock } from '../../types/content';

function Text(props: TextBlock) {
    const textStyle = {
        textAlign: props.align,
        fontSize: props.fontSize + 'px',
        color: props.fontColor,
        fontFamily: props.fontFamily,
        textDecoration: props.decoration?.[0],
    };
    return <p style={textStyle}>{props.value}</p>;
}

export default Text;
