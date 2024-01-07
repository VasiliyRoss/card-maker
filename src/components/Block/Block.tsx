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

function Block(props: BlockType) {
    const blockSize = props.size;
    const blockPosition = {
        top: props.position.posY,
        left: props.position.posX,
    };

    switch (props.objectType) {
        case 'art': {
            const artElement = props.object as ArtBlockType;
            return (
                <div style={blockPosition} className={styles.block}>
                    <ArtBlock {...artElement} {...blockSize} />
                </div>
            );
        }
        case 'image': {
            const imageElement = props.object as ImageBlock;
            return (
                <div style={blockPosition} className={styles.block}>
                    <Image {...imageElement} />
                </div>
            );
        }
        case 'text': {
            const textElement = props.object as TextBlock;
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
