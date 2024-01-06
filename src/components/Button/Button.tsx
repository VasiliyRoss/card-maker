import React, { MouseEventHandler } from 'react';
import styles from './Button.module.css';

type ButtonProps = {
    text: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

function Button({ text, onClick }: ButtonProps) {
    return (
        <button type="button" onClick={onClick} className={styles.button}>
            {text}
        </button>
    );
}

export default Button;
