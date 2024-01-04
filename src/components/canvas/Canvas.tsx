import React, { Children } from 'react';
import styles from './Canvas.module.css';
import { CanvasType } from '../../types/content';
import ArtBlock from '../Objects/Art';
import { filledArtBlockType } from '../../data/testFilledData';

function Canvas({ width, height }: CanvasType) {
    return <div style={{ width, height }} className={styles.canvas}></div>;
}

export default Canvas;
