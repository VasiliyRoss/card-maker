import React from 'react';
import styles from './Header.module.css';
import Button from '../Button/Button';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.navigation}>
                <div className={styles.backwardButton}></div>
                <div className={styles.forwardButton}></div>
            </div>
            <div>
                <Button text="Download" />
                <Button text="Import" />
            </div>
        </header>
    );
}

export default Header;
