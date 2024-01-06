import React from 'react';
import { BlockType } from '../../types/content';
import ArtBlock from '../Objects/Art';

function Block(props: BlockType) {
    return (
        <div>
            <ArtBlock
                posX={props.posX}
                posY={props.posY}
                height={props.height}
                width={props.width}
                isSelected={props.isSelected}
                id={props.id}
                form="triangle"
            />
        </div>
    );
}

export default Block;
