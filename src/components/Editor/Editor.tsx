import React from 'react';
import styles from './Editor.module.css';
import Toolbar from '../Toolbar/Toolbar';
import Card from '../Card/Card';
import { filledCanvas } from '../../data/testFilledData';
import { filledArtBlockType } from '../../data/testFilledData';

function Editor() {
    const cardObjects = [filledArtBlockType];
    return (
        <div className={styles.background}>
            <Toolbar />
            <Card objects={cardObjects} canvas={filledCanvas} />
        </div>
    );
}

export default Editor;
