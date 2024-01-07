import React from 'react';
import styles from './Canvas.module.css';
import { CanvasType, BlockType } from '../../types/content';
import { filledArtBlockType } from '../../data/testFilledData';
import Block from '../Block/Block';

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
            style={{
                height: canvasSize.height + 'px',
                width: canvasSize.width + 'px',
                backgroundColor: canvasBackground.background,
            }}
        >
            <Block {...props.objects?.[0]} />
        </div>
    );
}

export default Canvas;
