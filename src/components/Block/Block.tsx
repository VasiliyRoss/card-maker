import React from 'react';
import {
    ArtBlockType,
    BlockType,
    TextBlock,
    ImageBlock,
} from '../../types/content';
import ArtBlock from '../Objects/Art';
import Text from '../Objects/Text';
import Image from '../Objects/Image';
import styles from './Block.module.css';

function Block({
    id,
    position,
    isSelected,
    size,
    objectType,
    object,
}: BlockType) {
    const blockSize = size;
    const blockPosition = {
        top: position.posY,
        left: position.posX,
    };

    switch (objectType) {
        case 'art': {
            const artElement = object as ArtBlockType;
            return (
                <div style={blockPosition} className={styles.block}>
                    <ArtBlock {...artElement} {...blockSize} />
                </div>
            );
        }
        case 'image': {
            const imageElement = object as ImageBlock;
            return (
                <div style={blockPosition} className={styles.block}>
                    <Image {...imageElement} />
                </div>
            );
        }
        case 'text': {
            const textElement = object as TextBlock;
            return (
                <div style={blockPosition} className={styles.block}>
                    <Text {...textElement} />
                </div>
            );
        }
        default: {
            return null;
        }
    }
}

export default Block;
