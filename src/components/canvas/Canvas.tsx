import React from 'react';
import styles from './Canvas.module.css';
import { CanvasType } from '../../types/content';

function Canvas({ width, height }: CanvasType) {
    return <div style={{ width, height }} className={styles.canvas}></div>;
}

export default Canvas;
