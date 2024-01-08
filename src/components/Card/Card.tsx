import React from 'react';
import styles from './Card.module.css';
import { CardData } from '../../types/content';
import Canvas from '../Canvas/Canvas';

function Card({ canvas, filter }: CardData) {
    return (
        <div className={styles.wrapper}>
            <div
                className={styles.filter}
                style={{ background: filter?.color }}
            ></div>
            <Canvas
                size={canvas.size}
                objects={canvas.objects}
                background={canvas.background}
            />
        </div>
    );
}

export default Card;
