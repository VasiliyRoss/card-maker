import React from 'react';
import styles from './Canvas.module.css';

type CanvasProps = {
    width?: string;
    height?: string;
};

function Canvas({ width, height }: CanvasProps) {
    return <div style={{ width, height }} className={styles.canvas}></div>;
}

export default Canvas;
