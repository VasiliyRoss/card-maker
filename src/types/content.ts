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
};

type TextDecoration = 'bold' | 'italic' | 'underline';

// graphic types

type ImageBlock = Block & {
    src: string;
};

type ArtBlock = Block & {
    src: string;
};

type Filter = {
    r: number;
    g: number;
    b: number;
    a: number;
};

//Canvas

type Canvas = {
    height: number;
    width: number;
};

type CardData = {
    objects: Array<TextBlock | ImageBlock | ArtBlock>;
    canvas: Canvas;
    filter: Filter;
};

export type { TextBlock, ImageBlock, ArtBlock, Filter, Canvas, CardData };
