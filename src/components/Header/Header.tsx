import React from 'react';
import styles from './Header.module.css';
import Button from '../Button/Button';
import { useAppActions } from '../../redux/hooks';
import { Size } from '../../types/content';

function Header() {
    const { createChangeCanvasSize } = useAppActions();
    const newSize: Size = {
        height: 1000,
        width: 1000,
    };

    return (
        <header className={styles.header}>
            <div className={styles.navigation}>
                <div className={styles.backwardButton}></div>
                <div className={styles.forwardButton}></div>
            </div>
            <Button text="Download Card" />
            <div>
                <button onClick={() => createChangeCanvasSize(newSize)}>
                    CHANGE CANVAS SIZE
                </button>
            </div>
        </header>
    );
}

export default Header;
