import React from 'react';
import styles from './Editor.module.css';
import Toolbar from '../Toolbar/Toolbar';
import Card from '../Card/Card';
import { filledCanvas } from '../../data/testFilledData';

function Editor() {
    return (
        <div className={styles.background}>
            <Toolbar />
            <Card canvas={filledCanvas} />
        </div>
    );
}

export default Editor;
