import React from 'react';
import styles from './PropertiesPanelButton.module.css';

type ButtonProps<T> = {
    text: string;
    onClick?: (param?: T) => void;
};

function PropertiesPanelButton<T>({ text, onClick }: ButtonProps<T>) {
    const handleClick = (param?: T) => {
        if (onClick) {
            onClick(param);
        }
    };

    return (
        <button
            type="button"
            onClick={() => handleClick()}
            className={styles.button}
        >
            {text}
        </button>
    );
}

export default PropertiesPanelButton;
