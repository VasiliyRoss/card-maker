import {
    TextBlock,
    ImageBlock, 
    ArtBlock,
    Filter,
    Canvas,
    CardData,
} from '../types/content';

const emptyText: TextBlock = {
    id: '2',
    height: 200,
    width: 300,
    posX: 200,
    posY: 200,
    isSelected: false,
    value: '',
    fontSize: 18,
    fontFamily: 'Arial',
    fontColor: 'green',
    decoration: []
};

const emptyImageBlock: ImageBlock = {
    id: 'imageBlock1',
    posX: 200,
    posY: 200,
    isSelected: true,
    height: 200,
    width: 300,
    src: '',
};

const emptyGraphicObject: ArtBlock = {
    id: 'ArtBlock1',
    posX: 200,
    posY: 200,
    isSelected: true,
    height: 200,
    width: 300,
    src: '',
};

const emptyFilter: Filter = {
    r: 0,
    g: 0,
    b: 0,
    a: 0,
};

const emptyCanvas: Canvas = {
    height: 300,
    width: 900,
};

const emptyCard: CardData = {
    objects: [],
    canvas: emptyCanvas,
    filter: emptyFilter,
};

export {emptyCanvas};