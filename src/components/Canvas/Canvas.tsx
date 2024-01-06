import React, { Children } from 'react';
import styles from './Canvas.module.css';
import { CanvasType } from '../../types/content';
import ArtBlock from '../Objects/Art';
import { filledArtBlockType } from '../../data/testFilledData';
import Block from '../Block/Block';

function Canvas({ width, height }: CanvasType) {
    return (
        <div style={{ width, height }} className={styles.canvas}>
            <Block
                posX={0}
                posY={0}
                height={100}
                width={100}
                isSelected={true}
                id="1"
            />
        </div>
    );
}

export default Canvas;
