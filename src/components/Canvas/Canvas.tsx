import React, { useState } from 'react';
import styles from './Canvas.module.css';
import { CanvasType, Size } from '../../types/content';
import Block from '../Block/Block';

function Canvas({ size, objects, background }: CanvasType) {
    return (
        <div
            className={styles.canvas}
            style={{
                height: size.height + 'px',
                width: size.width + 'px',
                backgroundColor: background?.color,
            }}
        >
            {objects?.map((object, index) => <Block key={index} {...object} />)}
        </div>
    );
}

export default Canvas;
