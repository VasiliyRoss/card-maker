// common types

type Position = {
    posX: number;
    posY: number;
};

type Size = {
    height: number;
    width: number;
};

type Block = Position &
    Size & {
        id: string;
        isSelected: boolean;
    };

// text types

type TextBlock = Block & {
    value: string;
    fontSize: number;
    fontFamily: string;
    fontColor: string;
    decoration: TextDecoration[];
    align: TextAlign[];
};

type TextDecoration = 'bold' | 'italic' | 'underline';

type TextAlign = 'left' | 'center' | 'right';

// graphic types

type ImageBlock = Block & {
    src: string;
};

type ArtBlockType = Block & {
    form: 'triangle' | 'ellipse' | 'rectangle';
};

type Filter = {
    r: number;
    g: number;
    b: number;
    a: number;
};

//Canvas

type CanvasType = {
    height: string;
    width: string;
};

type CardData = {
    objects?: Array<TextBlock | ImageBlock | ArtBlockType>;
    canvas: CanvasType;
    filter?: Filter;
};

export type {
    TextBlock,
    ImageBlock,
    ArtBlockType,
    Filter,
    CanvasType,
    CardData,
};
