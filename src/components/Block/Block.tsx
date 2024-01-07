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

function Block(props: BlockType) {
    const blockSize = props.size;
    switch (props.objectType) {
        case 'art': {
            const artElement = props.object as ArtBlockType;
            return ArtBlock(artElement, blockSize);
        }
        case 'image': {
            const imageElement = props.object as ImageBlock;
            return <Image {...imageElement} />;
        }
        case 'text': {
            const textElement = props.object as TextBlock;
            return Text(textElement);
        }
        default: {
            return null;
        }
    }
}

export default Block;
