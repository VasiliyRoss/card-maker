import React from 'react';
import styles from './ToolbarButton.module.css';

type ButtonProps = {
    text: string;
    image: string;
    onClick?: () => void;
};

function Button({ text, image, onClick }: ButtonProps) {
    return (
        <div className={styles.button} onClick={onClick}>
            <img className={styles.buttonImage} src={image} />
            <p className={styles.buttonText}>{text}</p>
        </div>
    );
}

export default Button;
