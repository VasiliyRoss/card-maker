import React from 'react';
import styles from './Card.module.css';
import { CardData } from '../../types/content';
import Canvas from '../Canvas/Canvas';

function Card({ objects, canvas, filter }: CardData) {
    return <Canvas width={canvas.width} height={canvas.height} />;
}

export default Card;
