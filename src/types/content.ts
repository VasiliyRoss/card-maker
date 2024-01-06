// common types

type Position = {
    posX: string;
    posY: string;
};

type Size = {
    height: string;
    width: string;
};

type BlockType = {
    id: string;
    isSelected: boolean;
    size: Size;
    object: TextBlock | ImageBlock | ArtBlockType;
};

// text types

type TextBlock = {
    value: string;
    fontSize: number;
    fontFamily: string;
    fontColor: string;
    decoration: TextDecoration[];
    align: TextAlign;
};

type TextDecoration = 'bold' | 'italic' | 'underline';

type TextAlign = 'left' | 'center' | 'right';

// graphic types

type ImageBlock = {
    type: 'link' | 'base64';
    src: string;
};

type ArtBlockType = {
    form: 'triangle' | 'ellipse' | 'rectangle';
    background?: Color;
    border: Color;
};

type Color = {
    color: string;
};

//Canvas

type CanvasType = {
    size: Size;
    objects?: Array<BlockType>;
    background?: ImageBlock | Color;
};

type CardData = {
    canvas: CanvasType;
    filter?: Color;
};

export type {
    BlockType,
    TextBlock,
    ImageBlock,
    ArtBlockType,
    CanvasType,
    CardData,
    Size,
    Color,
};
