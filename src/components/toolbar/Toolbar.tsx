import React from 'react';
import styles from './Toolbar.module.css';
import Button from './button/Button';
import layoutsImg from './img/layouts.svg';
import artsImg from './img/artobjects.svg';
import textImg from './img/text.svg';
import imagesImg from './img/images.svg';

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
        </div>
    );
}

export default Toolbar;
