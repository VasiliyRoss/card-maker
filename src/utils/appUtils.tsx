import {
    BlockType,
    TextBlock,
    ImageBlock,
    ArtBlockType,
    CanvasType,
    CardData,
    Size,
    Color,
    Position,
} from '../types/content';

const getInitCardData = (): CardData => {
    return {
        canvas: { size: { width: 1000, height: 1000 } },
    };
};

export { getInitCardData };
