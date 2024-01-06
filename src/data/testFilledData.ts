import {
    TextBlock,
    ImageBlock,
    ArtBlockType,
    CanvasType,
    CardData,
    Size,
    Color,
    BlockType,
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
    color: 'black',
};

const artBlockBorder: Color = {
    color: 'red',
};

const filledArtBlockType: ArtBlockType = {
    form: 'triangle',
    background: artBlockBackground,
    border: artBlockBorder,
};

const canvasSize: Size = {
    height: '600px',
    width: '600px',
};

const canvasBackground: Color = {
    color: 'yellow',
};

const blockWithArtSize: Size = {
    width: '100px',
    height: '100px',
};

const blockWithArt: BlockType = {
    id: '1',
    isSelected: true,
    size: blockWithArtSize,
    object: filledArtBlockType,
};

const filledCanvas: CanvasType = {
    size: canvasSize,
    objects: [blockWithArt],
    background: canvasBackground,
};

const filter: Color = {
    color: 'red',
};

const filledEditor: CardData = {
    canvas: filledCanvas,
    filter: filter,
};

export { filledCanvas, filledArtBlockType };
