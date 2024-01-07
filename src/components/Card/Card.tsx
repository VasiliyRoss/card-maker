import React, { useState, useEffect } from 'react';
import styles from './Card.module.css';
import { CardData } from '../../types/content';
import Canvas from '../Canvas/Canvas';

function Card({ canvas, filter }: CardData) {
    const canvasSize = canvas.size;
    const [size, setSize] = useState(canvasSize);

    useEffect(() => {
        setSize(size);
    }, []);

    const newSizeFromWebhook = {
        height: 1000,
        width: 1000,
    };

    return (
        <div className={styles.wrapper}>
            <div
                className={styles.filter}
                style={{ background: filter?.color }}
            ></div>
            <button onClick={() => setSize(newSizeFromWebhook)}>
                NEW SIZE HERE
            </button>
            <Canvas
                size={canvas.size}
                objects={canvas.objects}
                background={canvas.background}
            />
        </div>
    );
}

export default Card;
