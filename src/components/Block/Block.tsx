import React from 'react';
import { ArtBlockType, BlockType } from '../../types/content';
import ArtBlock from '../Objects/Art';

function Block(props: BlockType) {
    switch (props.objectType) {
        case 'art': {
            const artElement = props.object as ArtBlockType;
            const artSize = props.size;
            return ArtBlock(artElement, artSize);
        }
        case 'image': {
            return (
                <div>
                    <p>Hello image</p>
                </div>
            );
        }
        case 'text': {
            return (
                <div>
                    <p>Hello text</p>
                </div>
            );
        }
        default: {
            return null;
        }
    }
}

export default Block;
