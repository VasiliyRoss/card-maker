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

enum CardActions {
    CREATE_CANVAS = 'CREATE_CANVAS',
    ADD_CANVAS_ELEMENT = 'ADD_CANVAS_ELEMENT',
    DELETE_CANVAS_ELEMENT = 'DELETE_CANVAS_ELEMENT',
    SAVE_CARD = 'SAVE_CARD',
    SAVE_PHOTO = 'SAVE_PHOTO',
    CHANGE_ACATIVE_ELEMENT = 'CHANGE_ACATIVE_ELEMENT',
    CHANGE_CANVAS_SIZE = 'CHANGE_CANVAS_SIZE',
    CHANGE_BACKGROUND = 'CHANGE_BACKGROUND',
    CHANGE_ORDER = 'CHANGE_ORDER',
    ADD_FILTER = 'ADD_FILTER',
    UNDO = 'UNDO',
    REDO = 'REDO',
}

type ChangeCanvasSizeAction = {
    type: CardActions.CHANGE_CANVAS_SIZE;
    payload: {
        size: Size;
    };
};

type Action = ChangeCanvasSizeAction;

export { CardActions, type Action };
