import React from 'react';
import styles from './Editor.module.css';
import Toolbar from '../Toolbar/Toolbar';
import Card from '../Card/Card';
import { emptyData } from '../../data/testFilledData';

function Editor() {
    return (
        <div className={styles.editor}>
            <Toolbar />

            <Card canvas={emptyData.canvas} filter={emptyData.filter} />
        </div>
    );
}

export default Editor;
