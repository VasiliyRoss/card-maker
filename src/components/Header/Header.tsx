import React from 'react';
import styles from './Header.module.css';
import Button from '../Button/Button';
import { saveModelToLocal } from '../../utils/fileUtils';
import { filledCard } from '../../data/testFilledData';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.navigation}>
                <div className={styles.backwardButton}></div>
                <div className={styles.forwardButton}></div>
            </div>
            <div>
                <Button text="Download Card" />
                <Button
                    text="Save"
                    onClick={() => saveModelToLocal(filledCard)}
                />
                <Button text="Import" />
            </div>
        </header>
    );
}

export default Header;
