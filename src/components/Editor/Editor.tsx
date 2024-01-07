import React from 'react';
import styles from './Editor.module.css';
import Toolbar from '../Toolbar/Toolbar';
import Card from '../Card/Card';
import { filledCard } from '../../data/testFilledData';

function Editor() {
    return (
        <div className={styles.background}>
            <Toolbar />
            <Card {...filledCard} />
        </div>
    );
}

export default Editor;
