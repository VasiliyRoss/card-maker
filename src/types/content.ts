// common types

type Position = {
    posX: string;
    posY: string;
};

type Size = {
    height: number;
    width: number;
};

type BlockType = {
    id: string;
    position: Position;
    isSelected: boolean;
    size: Size;
    objectType: 'text' | 'image' | 'art';
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
    src: string;
};

type ArtBlockType = {
    form: 'triangle' | 'ellipse' | 'rectangle';
    background?: Color;
    border: Color;
    borderRadius: number;
};

type Color = {
    color: string;
};

//Canvas

type CanvasType = {
    size: Size;
    objects: Array<BlockType>;
    background?: Color;
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
    Position,
};
