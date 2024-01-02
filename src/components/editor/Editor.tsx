import React from 'react';
import styles from './Editor.module.css';
import Toolbar from '../toolbar/Toolbar';
import Canvas from '../canvas/Canvas';

function Editor() {
    return (
        <div className={styles.background}>
            <Toolbar />
            <Canvas width="800px" height="600px" />
        </div>
    );
}

export default Editor;
