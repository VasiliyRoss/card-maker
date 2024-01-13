import { CardActions } from './actions';
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

const createChangeCanvasSize = (size: Size) => {
    return {
        type: CardActions.CHANGE_CANVAS_SIZE,
        payload: {
            size,
        },
    };
};

export { createChangeCanvasSize };
