import React from 'react';
import styles from './Card.module.css';
import { CardData } from '../../types/content';
import Canvas from '../Canvas/Canvas';

function Card(props: CardData) {
    return (
        <div className={styles.wrapper}>
            <div
                className={styles.filter}
                style={{ background: props.filter?.color }}
            ></div>
            <Canvas {...props.canvas} />
        </div>
    );
}

export default Card;
