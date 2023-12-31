import React from 'react';
import styles from './Toolbar.module.css';
import Button from './ToolbarButton/ToolbarButton';
import layoutsImg from './img/layouts.svg';
import artsImg from './img/artobjects.svg';
import textImg from './img/text.svg';
import imagesImg from './img/images.svg';
import { PropertiesPanel } from '../PropertiesPanel/PropertiesPanel';

function alarm() {
    console.log('Hello!');
}

function Toolbar() {
    return (
        <div className={styles.toolbarWrapper}>
            <div className={styles.toolbar}>
                <Button text="Layout" image={layoutsImg} onClick={alarm} />
                <Button text="Arts" image={artsImg} onClick={alarm} />
                <Button text="Text" image={textImg} onClick={alarm} />
                <Button text="Images" image={imagesImg} onClick={alarm} />
            </div>
            <div className={styles.actionBar}>
                <button className={styles.exampleButton}>rectangle</button>
                <button className={styles.exampleButton}>circle</button>
                <button className={styles.exampleButton}>triangle</button>
                <button className={styles.exampleButton}>Text</button>
            </div>
            <PropertiesPanel />
        </div>
    );
}

export default Toolbar;
