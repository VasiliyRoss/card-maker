import { useRef, useEffect } from 'react';
import { TextBlock } from '../../types/content';
import styles from './SlideText.module.css';

type TextProps = {
    data: TextBlock;
};

const Text = (props: TextProps) => {
    const data = props.data;
    const textStyle = {
        textAlign: data.align,
        fontSize: data.fontSize,
        fontColor: data.fontColor,
        fontFamily: data.fontFamily,
        fontStyle: data.decoration,
    };
};
