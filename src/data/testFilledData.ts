import {
    TextBlock,
    ImageBlock,
    ArtBlockType,
    CanvasType,
    CardData,
    Size,
    Color,
    BlockType,
    Position,
} from '../types/content';

const filledText: TextBlock = {
    value: 'Hellow',
    fontSize: 18,
    fontFamily: 'Arial',
    fontColor: 'green',
    decoration: [],
    align: 'center',
};

const filledImageBlock: ImageBlock = {
    type: 'link',
    src: '../public/index.html',
};

const artBlockBackground: Color = {
    color: 'yellow',
};

const artBlockBorder: Color = {
    color: 'red',
};

const filledArtBlockType: ArtBlockType = {
    form: 'rectangle',
    background: artBlockBackground,
    border: artBlockBorder,
    borderRadius: '5',
};

const canvasSize: Size = {
    height: 500,
    width: 500,
};

const canvasBackground: Color = {
    color: '#ffffff',
};

const blockWithArtSize: Size = {
    width: 200,
    height: 300,
};

const blockWithArtPosition: Position = {
    posX: '100px',
    posY: '100px',
};

const blockWithArt: BlockType = {
    id: '1',
    isSelected: true,
    size: blockWithArtSize,
    objectType: 'art',
    object: filledArtBlockType,
    position: blockWithArtPosition,
};

const blockWithText: BlockType = {
    id: '1',
    isSelected: true,
    size: blockWithArtSize,
    objectType: 'text',
    object: filledText,
    position: blockWithArtPosition,
};

const filledCanvas: CanvasType = {
    size: canvasSize,
    objects: [blockWithArt, blockWithText],
    background: canvasBackground,
};

const filterCard: Color = {
    color: 'red',
};

const filledCard: CardData = {
    canvas: filledCanvas,
    filter: filterCard,
};

export { filledCanvas, filledArtBlockType, filledCard };
