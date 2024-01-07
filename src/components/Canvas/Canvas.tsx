import React from 'react';
import styles from './Canvas.module.css';
import { CanvasType } from '../../types/content';
import Block from '../Block/Block';
import { relative } from 'path';

function Canvas(props: CanvasType) {
    const canvasSize = {
        height: props.size.height,
        width: props.size.width,
    };

    const canvasBackground = {
        background: props.background?.color,
    };

    return (
        <div
            className={styles.canvas}
            style={{
                height: canvasSize.height + 'px',
                width: canvasSize.width + 'px',
                backgroundColor: canvasBackground.background,
            }}
        >
            {props.objects?.map((object, index) => (
                <Block key={index} {...object} />
            ))}
        </div>
    );
}

export default Canvas;
