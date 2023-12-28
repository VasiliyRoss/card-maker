import {
    TextBlock,
    ImageBlock,
    ArtBlock,
    Filter,
    Canvas,
    CardData,
} from '../types/content';

const filledText: TextBlock = {
    id: '2',
    height: 200,
    width: 300,
    posX: 200,
    posY: 200,
    isSelected: false,
    value: 'Hellow',
    fontSize: 18,
    fontFamily: 'Arial',
    fontColor: 'green',
    decoration: [],
};

const filledImageBlock: ImageBlock = {
    id: 'imageBlock1',
    posX: 200,
    posY: 200,
    isSelected: true,
    height: 200,
    width: 300,
    src: '../public/index.html',
};

const filledArtBlock: ArtBlock = {
    id: 'ArtBlock1',
    posX: 200,
    posY: 200,
    isSelected: true,
    height: 200,
    width: 300,
    src: 'qwd',
};

const enabledFilter: Filter = {
    r: 253,
    g: 150,
    b: 51,
    a: 0.5,
};

const filledCanvas: Canvas = {
    height: 900,
    width: 600,
};

const filledEditor: CardData = {
    objects: [filledArtBlock, filledImageBlock, filledText],
    canvas: filledCanvas,
    filter: enabledFilter,
};
